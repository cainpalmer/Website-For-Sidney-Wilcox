import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import '../App.css';

function About() {
    return (
        <div class = 'about'>
            <div class = 'about-h1'>
                <h1>About Sidney Wilcox</h1>
            </div>
            <div class = 'about-profile'>
                <img class = 'about-image' width = '300px' height = '300px' src = 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/60865918_536283710241612_8981351475833733120_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=x3CjJe6ulSEAX_kUq3v&_nc_ht=scontent-ort2-2.xx&oh=59d83f5dfe3f561d99ae20d638378b33&oe=61B10DC7' alt = 'Sidney Wilcox' />
                <p class = 'about-bio'>Hi! My career includes dealing with multiple clients at a time. For the term project I choose to write about one of my new clients that I have just met through a phone call. His name is Steve Chen and he found my advertisement on one of the magazine that I have advertised. At first I knew nothing about him beside that he want to look for a house in San Leandro or San Lorenzo that is 3 bedrooms and 2 bathrooms with a price that is below $250,000. He didn’t even want to give his name out to me….</p>
            </div>
        </div>
    )
}

export default About;