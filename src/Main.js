import React from 'react';
import HornedBeasts from './horned-beasts.js';
import data from './data.json';
class Main extends React.Component{
    //set functions
    render() {
        // set variables
        let hornArr = [];
        // "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
        // "title": "UniWhal",
        // "description": "A unicorn and a narwhal nuzzling their horns",
        // "keyword": "narwhal",
        // "horns": 1
        data.forEach((horn,idx) => {
            hornArr.push(
                <HornedBeasts title={horn.title} image={horn.image} description={horn.description} keyword={horn.keyword} horns={horn.horns}/>
            )
        })
        return (
            <>
            <h2>this is my Main</h2>
            {hornArr}
            </>
        )
    }
}

export default Main;