import { google } from 'googleapis';
import Link from 'next/link';
import Head from 'next/head';

export async function getServerSideProps() {
  const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

  const sheets = google.sheets({ version: 'v4', auth });

  const range = `A2:AF2`;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID_WARENKORB,
    range,
  });

  const response1 = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID_KOMPONENTE,
    range,
  });

  const [WARENKORB, AnzahlKomponenten, Komponenten] = response.data.values[0];

  const [KOMPONENTENUMMER, Hersteller, Name, Gewicht, Abmessungen, Preis, Verfuegbar, Arbeitsspeicher, Taktrate, DDRType, Produktkategorie, RGB, Stromverbrauch, Pruefsiegel, WARENKORBkom, PORTSkom, Aufloesung, VRAM, CUDAKerne, Raytracing, minimalTemperatur, maximalTemperatur, Kabelanzahl, Speicherkapazitaet, Formfaktor, Wirkungsgrad, Lautstaerke, WLAN, Bluethoot, Kerne, Threads, IGPU] = response1.data.values[0];

  return {
    props: {
      WARENKORB,
      AnzahlKomponenten,
      Komponenten,
      KOMPONENTENUMMER,
      Hersteller,
      Name,
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
      WARENKORBkom,
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

export default function Post({ WARENKORB, AnzahlKomponenten, Komponenten, KOMPONENTENUMMER, Hersteller, Name, Gewicht, Abmessungen, Preis, Verfuegbar, Arbeitsspeicher, Taktrate, DDRType, Produktkategorie, RGB, Stromverbrauch, Pruefsiegel, WARENKORBkom, PORTSkom, Aufloesung, VRAM, CUDAKerne, Raytracing, minimalTemperatur, maximalTemperatur, Kabelanzahl, Speicherkapazitaet, Formfaktor, Wirkungsgrad, Lautstaerke, WLAN, Bluethoot, Kerne, Threads, IGPU }) {
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
          <h2>WARENKORB:</h2>
          <h2>{WARENKORB}</h2>
        </div>
        <div className="kundeinfo">
          <h2>Anzahl an Komponenten:</h2>
          <h2>{AnzahlKomponenten}</h2>
        </div>
        <h2>Products:</h2>
        <h3>{Hersteller + Name}</h3>
      </div>
    </div>
  )
}