import React from 'react';
import './App.css';
import {useWindowSize} from "./utils/UseWindowSize";

function App() {
    const size = useWindowSize();
    const mobile = size.width <= 960;

    return (
        <div style={{minWidth: 400}}>
            <h1 style={{margin: 24, fontFamily: 'Helvetica'}}>Team 5</h1>
            <div style={{
                flexDirection: 'row',
                flex: 1,
                display: 'flex',
                flexWrap: 'wrap',
                margin: 24
            }}>
                <div style={{margin: 12}}>
                    <h2>Hvordan få T5 kalenderen på din mobil?</h2>
                    <p>Dersom du er på iPhone så må du først legge til Google-kontoen din i instillinger:
                    </p>
                    <ul>
                        <li>Select Passwords & Accounts and then Add Account and then Google.</li>
                    </ul>
                    <p>Så kan du legge til kalenderen og velge at den skal synkroniseres til din mobil.</p>
                    <ol>
                        <li><a
                            href="https://calendar.google.com/calendar/u/0/r?cid=7bjdc11fbtikpgicg0vaufqm7k@group.calendar.google.com">
                            <button style={{padding: 8, margin: 12}}>Legg
                                til kalenderen i Google Calendar
                            </button>
                        </a>
                        </li>
                        <li><a href="https://calendar.google.com/calendar/u/0/syncselect">
                            <button style={{padding: 8, margin: 12}}>Kryss av "T5 - Lovsang" for
                                synkronisering
                            </button>
                        </a></li>
                    </ol>
                    Dersom du har noe trøbbel:
                    <a href="https://m.me/sjoenh">
                        <button style={{padding: 8, margin: 12}}>{`Send Henry 🤓 en melding`}</button>
                    </a>
                </div>
                <div style={{margin: 12}}>
                    <h2>Kalender</h2>
                    {mobile
                        ? <iframe
                            title='Kalender'
                            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FOslo&amp;src=N2JqZGMxMWZidGlrcGdpY2cwdmF1ZnFtN2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%2344a703&amp;showTitle=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;showNav=1&amp;mode=AGENDA"
                            height="400" frameBorder="0" scrolling="no"/>
                        : <iframe
                            title='Kalender'
                            src="https://calendar.google.com/calendar/embed?src=7bjdc11fbtikpgicg0vaufqm7k%40group.calendar.google.com&ctz=Europe%2FOslo"
                            style={{width: 800, height: 600}} frameBorder="0" scrolling="no"/>
                    }
                </div>
                <div style={{margin: 12}}>
                    <h2>Spotify spilleliste</h2>
                    <iframe
                        title='Spotify Spilleliste'
                        src="https://open.spotify.com/embed/playlist/1EiZh1zjDKnz1BhF2mjCDy"
                        width="300" height="380" frameBorder="0"
                        allowTransparency="true" allow="encrypted-media"
                    />
                </div>
                <div style={{margin: 12}}>
                    <h2>Lenker</h2>
                    <ul>
                        <li>
                            <a href="https://www.messenger.com/t/1966802903393312">
                                <button style={{padding: 8, margin: 12}}>
                                    T5 Chat
                                </button>
                            </a></li>
                        <li><a href="https://www.messenger.com/t/3232098980208574">
                            <button style={{padding: 8, margin: 12}}>
                                T5 Info
                            </button>
                        </a></li>
                        <li><a href="https://www.dropbox.com/sh/5a3gmzjoyoauc8q/AACU-RyZ2OpjAVKR2Nr2cX6Ra?dl=0">
                            <button style={{padding: 8, margin: 12}}>Noter og slikt -> Dropbox</button>
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
