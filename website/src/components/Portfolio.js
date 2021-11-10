import React from 'react';
import one from '../images/hair/one.jpg';
import two from '../images/hair/two.jpg';
import three from '../images/hair/three.jpg';
import four from '../images/hair/four.jpg';
import five from '../images/hair/five.jpg';
import six from '../images/hair/six.jpg';

function Portfolio() {
    return (
        <div class = 'home'>
            <div class = 'home-image'>
                <h1>Work Portfolio</h1>
                <h3>From Sidney Wilcox</h3>
            </div>
            <div class = 'work'>
                <div class = 'work-1'>
                <img class = 'hair-image' src = {one} alt = 'Hair By Sid' />
                </div>
                <div class = 'work-2'>
                <img class = 'hair-image' src = {two} alt = 'Hair By Sid' />
                </div>
            </div>
            <div class = 'seperator'>
                <h3>Client Before and After</h3>
            </div>
            <div class = 'work'>
            <div class = 'work-1'>
                <img class = 'hair-image' src = {three} alt = 'Hair By Sid' />
                </div>
                <div class = 'work-2'>
                <img class = 'hair-image-odd' src = {four} alt = 'Hair By Sid' />
                </div>
            </div>
            <div class = 'seperator'></div>
            <div class = 'work'>
            <div class = 'work-1'>
                <img class = 'hair-image' src = {five} alt = 'Hair By Sid' />
                </div>
                <div class = 'work-2'>
                <img class = 'hair-image' src = {six} alt = 'Hair By Sid' />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;