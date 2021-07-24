// import { google } from 'googleapis';
import Link from 'next/link';
import Head from 'next/head';

// export async function getServerSideProps({ query }) {
//   const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

//   const sheets = google.sheets({ version: 'v4', auth });

//   const { name } = query;
//   const range = `A${name}:I${name}`;

//   const response = await sheets.spreadsheets.values.get({
//       spreadsheetId: process.env.SHEET_ID_KUNDE,
//       range,
//   });

//   const [ID, Name, Geburtsdatum, Wohnort, Beitrittsdatum, Email, Telefonnummer, Kreditkartennummer, Geschlecht] = response.data.values[0];

//   return {
//       props: {
//           ID,
//           Name,
//           Geburtsdatum,
//           Wohnort,
//           Beitrittsdatum,
//           Email,
//           Telefonnummer,
//           Kreditkartennummer,
//           Geschlecht
//       }
//   }
// }

export default function Post({ title, content, title1, content1, title2, content2, title3, content3 }) {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <header>
        <div className="headerTitle">
          <Link href="/"><h2>PC Geschäft</h2></Link>
        </div>
        <div className="headerIcons">
          <Link href="/shoppingCart"><i className="fa fa-shopping-cart"></i></Link>
          <Link href="/Kunde/2"><i className="fa fa-male"></i></Link>
        </div>
        <div className="headerLogIn">
          {/* <Link href="/login"><h4>Log In</h4></Link> */}
        </div>
      </header>
      <div className="kundecontent">
        <div>
          <h1>Name</h1>
          <input placeholder="Name" />
        </div>
        <div>
          <h1>Passwort</h1>
          <input placeholder="Beitrittsdatum" />
        </div>
      </div>
    </div>
  )
}