import { google } from 'googleapis';
import Link from 'next/link';
import Head from 'next/head';

export async function getServerSideProps({ query }) {
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

    const sheets = google.sheets({ version: 'v4', auth });

    const { name } = query;
    const range = `A${name}:I${name}`;

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID_KUNDE,
        range,
    });

    const [ID, Name, Geburtsdatum, Wohnort, Beitrittsdatum, Email, Telefonnummer, Kreditkartennummer, Geschlecht] = response.data.values[0];

    return {
        props: {
            ID,
            Name,
            Geburtsdatum,
            Wohnort,
            Beitrittsdatum,
            Email,
            Telefonnummer,
            Kreditkartennummer,
            Geschlecht
        }
    }
}

export default function Post({ ID, Name, Geburtsdatum, Wohnort, Beitrittsdatum, Email, Telefonnummer, Kreditkartennummer, Geschlecht,  }) {
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
                <Link href="/Rechnungen/2"><h4>Rechnungen</h4></Link>
                <h1>{Name}</h1>
                <div className="kundeinfo">
                    <h2>ID:</h2>
                    <h2>{ID}</h2>
                </div>
                <div className="kundeinfo">
                    <h2>Geschlecht:</h2>
                    <h2>{Geschlecht}</h2>
                </div>
                <div className="kundeinfo">
                    <h2>Geburtsdatum:</h2>
                    <h2>{Geburtsdatum}</h2>
                </div>
                <div className="kundeinfo">
                    <h2>Wohnort:</h2>
                    <h2>{Wohnort}</h2>
                </div>
                <div className="kundeinfo">
                    <h2>E-mail:</h2>
                    <h2>{Email}</h2>
                </div>
                <div className="kundeinfo">
                    <h2>Telefonnummer:</h2>
                    <h2>{Telefonnummer}</h2>
                </div>
                <div className="kundeinfo">
                    <h2>Kreditkartennummer:</h2>
                    <h2>{Kreditkartennummer}</h2>
                </div>
            </div>
        </div>
    )
}