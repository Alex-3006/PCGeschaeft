import { google } from 'googleapis';
import Link from 'next/link';
import Head from 'next/head';

export async function getServerSideProps({ query }) {
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

    const sheets = google.sheets({ version: 'v4', auth });

    const { nummer } = query;
    const range = `A${nummer}:AF${nummer}`;

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID_RECHNUNGEN,
        range,
    });

    const response1 = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID_KUNDE,
        range,
    });

    const response2 = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID_KOMPONENTE,
        range,
    });

    const [RECHNUNGSNUMMER, KUNDE, Gesamtsumme, Waren, Datetime, Firma] = response.data.values[0];

    const [ID, Name, Geburtsdatum, Wohnort, Beitrittsdatum, Email, Telefonnummer, Kreditkartennummer, Geschlecht] = response1.data.values[0];

    const [KOMPONENTENUMMER, Hersteller, KompName, Gewicht, Abmessungen, Preis, Verfuegbar, Arbeitsspeicher, Taktrate, DDRType, Produktkategorie, RGB, Stromverbrauch, Pruefsiegel, WARENKORB, PORTSkom, Aufloesung, VRAM, CUDAKerne, Raytracing, minimalTemperatur, maximalTemperatur, Kabelanzahl, Speicherkapazitaet, Formfaktor, Wirkungsgrad, Lautstaerke, WLAN, Bluethoot, Kerne, Threads, IGPU] = response2.data.values[0];

    return {
        props: {
            RECHNUNGSNUMMER,
            KUNDE,
            Gesamtsumme,
            Waren,
            Datetime,
            Firma,
            ID,
            Name,
            Geburtsdatum,
            Wohnort,
            Beitrittsdatum,
            Email,
            Telefonnummer,
            Kreditkartennummer,
            Geschlecht,
            KOMPONENTENUMMER,
            Hersteller,
            KompName,
            Gewicht,
            Abmessungen,
            Preis,
            Verfuegbar,
            Arbeitsspeicher,
            Taktrate,
            DDRType,
            Produktkategorie,
            RGB,
            Stromverbrauch,
            Pruefsiegel,
            WARENKORB,
            PORTSkom,
            Aufloesung,
            VRAM,
            CUDAKerne,
            Raytracing,
            minimalTemperatur,
            maximalTemperatur,
            Kabelanzahl,
            Speicherkapazitaet,
            Formfaktor,
            Wirkungsgrad,
            Lautstaerke,
            WLAN,
            Bluethoot,
            Kerne,
            Threads,
            IGPU,
        }
    }
}

export default function Post({ RECHNUNGSNUMMER, KUNDE, Gesamtsumme, Waren, Datetime, Firma, ID, Name, Geburtsdatum, Wohnort, Beitrittsdatum, Email, Telefonnummer, Kreditkartennummer, Geschlecht, KOMPONENTENUMMER, Hersteller, KompName, Gewicht, Abmessungen, Preis, Verfuegbar, Arbeitsspeicher, Taktrate, DDRType, Produktkategorie, RGB, Stromverbrauch, Pruefsiegel, WARENKORB, PORTSkom, Aufloesung, VRAM, CUDAKerne, Raytracing, minimalTemperatur, maximalTemperatur, Kabelanzahl, Speicherkapazitaet, Formfaktor, Wirkungsgrad, Lautstaerke, WLAN, Bluethoot, Kerne, Threads, IGPU }) {
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
                <div className="kundeinfo">
                    <h2>RECHNUNGSNUMMER:</h2>
                    <h2>{RECHNUNGSNUMMER}</h2>
                </div>
                <div className="kundeinfo">
                    <h2>KUNDE:</h2>
                    <h2>{Name}</h2>
                </div>
                <div className="kundeinfo">
                    <h2>Gesamtsumme:</h2>
                    <h2>{Gesamtsumme}</h2>
                </div>
                <div className="kundeinfo">
                    <h2>Waren:</h2>
                    <h2>{KompName}</h2>
                </div>
                <div className="kundeinfo">
                    <h2>Datetime:</h2>
                    <h2>{Datetime}</h2>
                </div>
                {Firma != "/" && <div className="kundeinfo">
                    <h2>Firma:</h2>
                    <h2>{Firma}</h2>
                </div>
                }
            </div>
            <div className="rechnungenButton">
                {RECHNUNGSNUMMER != "1" && <Link href={"./" + RECHNUNGSNUMMER}><button className="rechnungButton">Previous</button></Link>}
                {RECHNUNGSNUMMER != "3" && <Link href={"./" + (RECHNUNGSNUMMER * 1 + 2)}><button className="rechnungButton">Next</button></Link>}
            </div>
        </div>
    )
}