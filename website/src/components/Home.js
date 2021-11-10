import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

function Home() {
    return (
        <div class = 'home'>
            <div class = 'home-image'>
                <h1>Hair By Sid</h1>
                <h3>Feel Beautiful</h3>
            </div>
            <div class = 'options'>
                <div class = 'option-1'>
                <h3>An Amazing Experience</h3>
                <BrowserRouter>
                    <button classname = 'move'><Link to = '/portfolio'>Check out my work!</Link></button>
                </BrowserRouter>
                </div>
                <div class = 'option-2'>
                <h3>My Mission</h3>
                <BrowserRouter>
                    <button classname = 'move'><Link to = '/about'>Learn about me!</Link></button>
                </BrowserRouter>
                </div>
            </div>
        </div>
    )
}

export default Home;