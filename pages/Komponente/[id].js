import { google } from 'googleapis';
import Link from 'next/link';
import Head from 'next/head';

export async function getServerSideProps({ query }) {
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

    const sheets = google.sheets({ version: 'v4', auth });

    const { id } = query;
    const range = `A${id}:AF${id}`;
    const range1 = `A${id}:P${id}`;
    const range2 = `A${id}:B${id}`;

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID_KOMPONENTE,
        range,
    });

    const response1 = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID_PORTS,
        range,
    });

    const response2 = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID_KOMPONENTE_PORTS,
        range,
    });

    const [KOMPONENTENUMMER, Hersteller, Name, Gewicht, Abmessungen, Preis, Verfuegbar, Arbeitsspeicher, Taktrate, DDRType, Produktkategorie, RGB, Stromverbrauch, Pruefsiegel, WARENKORB, PORTSkom, Aufloesung, VRAM, CUDAKerne, Raytracing, minimalTemperatur, maximalTemperatur, Kabelanzahl, Speicherkapazitaet, Formfaktor, Wirkungsgrad, Lautstaerke, WLAN, Bluethoot, Kerne, Threads, IGPU] = response.data.values[0];

    const [ID, HDMI, VGA, Klinkenanschluss, USBC, USB1, USB2, USB3, DVID, PIN8, PIN6, PIN4, SATA, KOMPONENTENpo, Displayport, Ethernet] = response1.data.values[0];

    const [PORTS, KOMPONENTE] = response2.data.values[0];

    return {
        props: {
            Komponenten: {
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
                IGPU
            },
            Ports: {
                ID,
                HDMI,
                VGA,
                Klinkenanschluss,
                USBC,
                USB1,
                USB2,
                USB3,
                DVID,
                PIN8,
                PIN6,
                PIN4,
                SATA,
                KOMPONENTENpo,
                Displayport,
                Ethernet
            },
            KOMPONENTE_PORTS: {
                PORTS,
                KOMPONENTE
            }
        }
    }
}

export default function Post({ KOMPONENTENUMMER, Hersteller, Name, Gewicht, Abmessungen, Preis, Verfuegbar, Arbeitsspeicher, Taktrate, DDRType, Produktkategorie, RGB, Stromverbrauch, Pruefsiegel, WARENKORB, PORTSkom, Aufloesung, VRAM, CUDAKerne, Raytracing, minimalTemperatur, maximalTemperatur, Kabelanzahl, Speicherkapazitaet, Formfaktor, Wirkungsgrad, Lautstaerke, WLAN, Bluethoot, Kerne, Threads, IGPU, ID, HDMI, VGA, Klinkenanschluss, USBC, USB1, USB2, USB3, DVID, PIN8, PIN6, PIN4, SATA, KOMPONENTEnpo, Displayport, Ethernet, PORTS, KOMPONENTE }) {
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
            <h2 className="contentTitle">{Hersteller, Name}</h2>
            <h4 className="contentDescription">Allgemein:</h4>
            {Produktkategorie == "GPU" && <table>
                <tbody>
                    <tr>
                        <th>Hersteller</th>
                        <td>{Hersteller}</td>
                        <th>Name</th>
                        <td>{Name}</td>
                    </tr>
                    <tr>
                        <th>Gewicht</th>
                        <td>{Gewicht}g</td>
                        <th>Abmessungen</th>
                        <td>{Abmessungen} in mm</td>
                    </tr>
                    <tr>
                        <th>Preis</th>
                        <td>{Preis}€</td>
                        <th>Verfuegbar</th>
                        <td>{Verfuegbar}</td>
                    </tr>
                    <tr>
                        <th>Taktrate</th>
                        <td>{Taktrate}HZ</td>
                        <th>Produktkategorie</th>
                        <td>{Produktkategorie}</td>
                    </tr>
                    <tr>
                        <th>RGB</th>
                        <td>{RGB}</td>
                        <th>Stromverbrauch</th>
                        <td>{Stromverbrauch}W</td>
                    </tr>
                    <tr>
                        <th>Pruefsiegel</th>
                        <td>{Pruefsiegel}</td>
                        <th>Aufloesung</th>
                        <td>{Aufloesung}</td>
                    </tr>
                    <tr>
                        <th>VRAM</th>
                        <td>{VRAM}</td>
                        <th>CUDAKerne</th>
                        <td>{CUDAKerne}</td>
                    </tr>
                    <tr>
                        <th>Raytracing</th>
                        <td>{Raytracing}</td>
                        <th>minimalTemperatur</th>
                        <td>{minimalTemperatur}°C</td>
                    </tr>
                    <tr>
                        <th>maximalTemperatur</th>
                        <td>{maximalTemperatur}°C</td>
                        <th>Kabelanzahl</th>
                        <td>{Kabelanzahl}</td>
                    </tr>
                    <tr>
                        <th>Formfaktor</th>
                        <td>{Formfaktor}</td>
                    </tr>
                </tbody>
            </table>}
            {Produktkategorie == "CPU" && <table>
                <tbody>
                    <tr>
                        <th>Hersteller</th>
                        <td>{Hersteller}</td>
                        <th>Name</th>
                        <td>{Name}</td>
                    </tr>
                    <tr>
                        <th>Gewicht</th>
                        <td>{Gewicht}g</td>
                        <th>Abmessungen</th>
                        <td>{Abmessungen} in mm</td>
                    </tr>
                    <tr>
                        <th>Preis</th>
                        <td>{Preis}€</td>
                        <th>Verfuegbar</th>
                        <td>{Verfuegbar}</td>
                    </tr>
                    <tr>
                        <th>Taktrate</th>
                        <td>{Taktrate}HZ</td>
                        <th>Produktkategorie</th>
                        <td>{Produktkategorie}</td>
                    </tr>
                    <tr>
                        <th>RGB</th>
                        <td>{RGB}</td>
                        <th>Stromverbrauch</th>
                        <td>{Stromverbrauch}W</td>
                    </tr>
                    <tr>
                        <th>Pruefsiegel</th>
                        <td>{Pruefsiegel}</td>
                        <th>DDR-Type</th>
                        <td>{DDRType}</td>
                    </tr>
                    <tr>
                        <th>Formfaktor</th>
                        <td>{Formfaktor}</td>
                        <th>Lautstaerke</th>
                        <td>{Lautstaerke}</td>
                    </tr>
                    <tr>
                        <th>Raytracing</th>
                        <td>{Raytracing}</td>
                        <th>minimalTemperatur</th>
                        <td>{minimalTemperatur}°C</td>
                    </tr>
                    <tr>
                        <th>maximalTemperatur</th>
                        <td>{maximalTemperatur}°C</td>
                        <th>Threads</th>
                        <td>{Threads}</td>
                    </tr>
                    <tr>
                        <th>Kerne</th>
                        <td>{Kerne}</td>
                        <th>I-GPU</th>
                        <td>{IGPU}</td>
                    </tr>
                </tbody>
            </table>}
            {Produktkategorie == "Mainboard" && <table>
                <tbody>
                    <tr>
                        <th>Hersteller</th>
                        <td>{Hersteller}</td>
                        <th>Name</th>
                        <td>{Name}</td>
                    </tr>
                    <tr>
                        <th>Gewicht</th>
                        <td>{Gewicht}g</td>
                        <th>Abmessungen</th>
                        <td>{Abmessungen} in mm</td>
                    </tr>
                    <tr>
                        <th>Preis</th>
                        <td>{Preis}€</td>
                        <th>Verfuegbar</th>
                        <td>{Verfuegbar}</td>
                    </tr>
                    <tr>
                        <th>DDR-Type</th>
                        <td>{DDRType}</td>
                        <th>Produktkategorie</th>
                        <td>{Produktkategorie}</td>
                    </tr>
                    <tr>
                        <th>RGB</th>
                        <td>{RGB}</td>
                        <th>Kabelanzahl</th>
                        <td>{Kabelanzahl}</td>
                    </tr>
                    <tr>
                        <th>Pruefsiegel</th>
                        <td>{Pruefsiegel}</td>
                        <th>Formfaktor</th>
                        <td>{Formfaktor}</td>
                    </tr>
                    <tr>
                        <th>Bluethoot</th>
                        <td>{Bluethoot}</td>
                        <th>WLAN</th>
                        <td>{WLAN}</td>
                    </tr>
                </tbody>
            </table>}
            {Produktkategorie == "Gehause" && <table>
                <tbody>
                    <tr>
                        <th>Hersteller</th>
                        <td>{Hersteller}</td>
                        <th>Name</th>
                        <td>{Name}</td>
                    </tr>
                    <tr>
                        <th>Gewicht</th>
                        <td>{Gewicht}g</td>
                        <th>Abmessungen</th>
                        <td>{Abmessungen} in mm</td>
                    </tr>
                    <tr>
                        <th>Preis</th>
                        <td>{Preis}€</td>
                        <th>Verfuegbar</th>
                        <td>{Verfuegbar}</td>
                    </tr>
                    <tr>
                        <th>Pruefsiegel</th>
                        <td>{Pruefsiegel}</td>
                        <th>Produktkategorie</th>
                        <td>{Produktkategorie}</td>
                    </tr>
                    <tr>
                        <th>RGB</th>
                        <td>{RGB}</td>
                        <th>Kabelanzahl</th>
                        <td>{Kabelanzahl}</td>
                    </tr>
                    <tr>
                        <th>Formfaktor</th>
                        <td>{Formfaktor}</td>
                    </tr>
                </tbody>
            </table>}
            {(Produktkategorie == "GPU" && Portskom == KOMPONENTE && PORTS == PORTSkom) && <div>
                <h4 className="contentDescription">Ports:</h4>
                <table>
                    <tbody>
                        <tr>
                            <th>HDMI</th>
                            <td>{HDMI}</td>
                            <th>VGA</th>
                            <td>{VGA}</td>
                        </tr>
                        <tr>
                            <th>USB-C</th>
                            <td>{USBC}</td>
                            <th>DVI-D</th>
                            <td>{DVID}</td>
                        </tr>
                        <tr>
                            <th>Displayport</th>
                            <td>{Displayport}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            }
            {(Produktkategorie == "Mainboard" && ID == 2) && <div>
                <h4 className="contentDescription">Ports:</h4>
                <table>
                    <tbody>
                        <tr>
                            <th>HDMI</th>
                            <td>{HDMI}</td>
                            <th>4-PIN</th>
                            <td>{PIN4}</td>
                        </tr>
                        <tr>
                            <th>Klinkenanschluss</th>
                            <td>{Klinkenanschluss}</td>
                            <th>USB-C</th>
                            <td>{USBC}</td>
                        </tr>
                        <tr>
                            <th>USB 1.0</th>
                            <td>{USB1}</td>
                            <th>USB 2.0</th>
                            <td>{USB2}</td>
                        </tr>
                        <tr>
                            <th>USB 3.0</th>
                            <td>{USB3}</td>
                            <th>SATA</th>
                            <td>{SATA}</td>
                        </tr>
                        <tr>
                            <th>8-PIN</th>
                            <td>{PIN8}</td>
                            <th>6-PIN</th>
                            <td>{PIN6}</td>
                        </tr>
                        <tr>
                            <th>Displayport</th>
                            <td>{Displayport}</td>
                            <th>Ethernet</th>
                            <td>{Ethernet}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            }
            {(Produktkategorie == "Gehause" && ID == 3) && <div>
                <h4 className="contentDescription">Ports:</h4>
                <table>
                    <tbody>
                        <tr>
                            <th>Klinkenanschluss</th>
                            <td>{Klinkenanschluss}</td>
                            <th>USB-C</th>
                            <td>{USBC}</td>
                        </tr>
                        <tr>
                            <th>USB 1.0</th>
                            <td>{USB1}</td>
                            <th>USB 2.0</th>
                            <td>{USB2}</td>
                        </tr>
                        <tr>
                            <th>USB 3.0</th>
                            <td>{USB3}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            }
        </div>
    )
}