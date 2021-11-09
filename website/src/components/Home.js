import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            <div>
                <h1>Hair By Sid</h1>
            </div>
            <div id = 'hair'>
                <BrowserRouter>
                    <button classname = 'move'><Link id = 'see-hair' to = '/portfolio'>Check out my work!</Link></button>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default Home;