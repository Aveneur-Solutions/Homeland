/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import Gallery_2 from './2_Gallery';
import './ourStory.css'
import {ourStory} from './storyInfo'
import SvgComponent from '../Navbar/logosvg';

class OurStory extends Component {
    render() {
        return (
            <div className="main-story">
            <Gallery_2/>
            <div className="our-story">
            {ourStory.map((story, index) =>{
                return <div className="our-story-content" key={index}>
                    <h3>{story.title}</h3>
                    <h5>{story.para}</h5>
                </div>
            })}
        </div>
        <div className="main-logo">
            <SvgComponent/>
        </div>
        </div>
        );
    }
}

export default OurStory
