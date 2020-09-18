import React, {useEffect, useState} from 'react';
import './App.css';

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
}

function App() {
    const size = useWindowSize();
    const mobile = size.width <= 960;

    return (
        <div style={{minWidth:400}}>
            <h1 style={{margin: 24, fontFamily: 'Helvetica'}}>Team 5</h1>
            <div style={{
                flexDirection: 'row',
                flex: 1,
                display: 'flex',
                flexWrap: 'wrap',
                margin: 24
            }}>
                <div style={{margin: 12}}>
                    <h2>Kalender</h2>
                    {mobile ?
                        <iframe
                            title='Kalender'
                            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FOslo&amp;src=N2JqZGMxMWZidGlrcGdpY2cwdmF1ZnFtN2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%2344a703&amp;showTitle=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;showNav=1&amp;mode=AGENDA"
                            height="400" frameBorder="0" scrolling="no"/> :
                        <iframe
                            title='Kalender'
                            src="https://calendar.google.com/calendar/embed?src=7bjdc11fbtikpgicg0vaufqm7k%40group.calendar.google.com&ctz=Europe%2FOslo"
                            style={{width: 800, height: 600}} frameBorder="0" scrolling="no"/>
                    }
                </div>
                <div style={{margin: 12}}>
                    <h2>Spotify spilleliste</h2>
                    <iframe
                        title='Spotify Spilleliste'
                        src="https://open.spotify.com/embed/playlist/2gKC1cadlh0QnGWyx4fKlK"
                        width="300" height="380" frameBorder="0"
                        allowTransparency="true" allow="encrypted-media"
                    />
                </div>
                <div style={{margin: 12}}>
                    <h2>Lenker</h2>
                    <ul>
                        <li><a href="https://www.messenger.com/t/1966802903393312">T5 Chat</a></li>
                        <li><a href="https://www.messenger.com/t/3232098980208574">T5 Info</a></li>
                        <li><a href="https://www.dropbox.com/sh/5a3gmzjoyoauc8q/AACU-RyZ2OpjAVKR2Nr2cX6Ra?dl=0">Noter og
                            slikt
                            -> Dropbox</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
