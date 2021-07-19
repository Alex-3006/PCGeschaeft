// import { google } from 'googleapis';
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
const { google } = require('googleapis');

export default function Post({ }) {
    const [rows, setRows] = useState([]);
    const [name, setName] = useState("Name");

    // async function addNewRow() {
    //     if (name !== "Name") {
    //         const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

    //         const sheets = google.sheets({ version: 'v4', auth });

    //         const range = `A1:I4`;

    //         const doc = await sheets.spreadsheets.values.get({
    //             spreadsheetId: process.env.SHEET_ID_KUNDE,
    //             range
    //         });

    //         await doc.loadInfo();
    //         const sheet = doc.sheetsByIndex[0];

    //         await sheet.addRow({
    //             Name: name
    //         });

    //         const rows = await sheet.getRows();
    //         setRows(rows);

    //         setName('Name');
    //         alert('Thank you for adding a quote! :)');
    //     } else {
    //         alert("Some data is missing!");
    //     }
    // }

    async function addNewRow() {
        if (name !== "Name") {
            const SCOPES = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

            fs.readFile('secrets.json', (err, content) => {
                if (err) return console.log('Error loading client secret file:', err);
                authorize(JSON.parse(content), writeData);
            });

            function writeData(auth) {
                const sheets = google.sheets({ version: 'v4', auth });
                let values = [
                    [
                        'Chris',
                        'Male',
                        '1. Freshman',
                        'FL',
                        'Art',
                        'Baseball'
                    ]
                ];
                const resource = {
                    values,
                };
                sheets.spreadsheets.values.append({
                    spreadsheetId: '1vuXt8sQq7SkmvTp8lIpAPJAA2hSlK6LFY21-fm4E7pM',
                    range: 'KUNDE!A5',
                    valueInputOption: 'RAW',
                    resource: resource,
                }, (err, result) => {
                    if (err) {
                        // Handle error
                        console.log(err);
                    } else {
                        console.log('%d cells updated on range: %s', result.data.updates.updatedCells, result.data.updates.updatedRange);
                    }
                });
            }
        }
    }


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
            {/* <div className="kundecontent">
                <h2>Name:</h2>
                <div className="container">
                    {rows.map((row, index) => {
                        return (
                            <div className="card" key={index}>
                                <p>{`${row.Name}`}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="container">
                    <div className="container">
                        <div onChange={(e) => { setName(e.target.value) }}>
                            <input value={name} type="textarea" row="1" col="4"></input>
                        </div>
                    </div>
                </div>
                <button onClick={addNewRow} className="buttonregister">Add New Name</button>
            </div>*/}
        </div> 
    )
}