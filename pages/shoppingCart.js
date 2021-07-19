import { google } from 'googleapis';
import Link from 'next/link';
import Head from 'next/head';

export async function getServerSideProps() {
  const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

  const sheets = google.sheets({ version: 'v4', auth });

  const range = `A2:H2`;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID_KUNDE,
    range,
  });

  const [ID, Name, Geburtsdatum, Wohnort, Beitrittsdatum, Email,Telefonnummer, Kreditkartennummer] = response.data.values[0];

  return {
    props: {
      ID,
      Name,
      Geburtsdatum,
      Wohnort,
      Beitrittsdatum,
      Email,
      Telefonnummer,
      Kreditkartennummer
    }
  }
}

export default function Post({ ID, Name, Geburtsdatum, Wohnort, Beitrittsdatum, Email, Telefonnummer, Kreditkartennummer }) {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <header>
        <div className="headerTitle">
          <Link href="/"><h2>Home</h2></Link>
        </div>
        <div className="headerIcons">
          <Link href="./shoppingCart"><i className="fa fa-shopping-cart"></i></Link>
          <Link href="./Kunde"><i className="fa fa-male"></i></Link>
        </div>
        <div className="headerLogIn">
          <Link href="./login"><h4>Log In</h4></Link>
          <h4>|</h4>
          <Link href="/register"><h4>Register</h4></Link>
        </div>
      </header>
      <div className="kundecontent">
        <h2>Products:</h2>
        
      </div>
    </div>
  )
}