import React from 'react';
import HornedBeasts from './horned-beasts.js';
class Main extends React.Component{
    render() {
        return (
            <>
            <h2>this is my Main</h2>
            <HornedBeasts title= "Moose" imageUrl="https://via.placeholder.com/500" description="big moose with horns" />
            <HornedBeasts title= "elk" imageUrl="https://via.placeholder.com/500" description="big elk with horns" />
            </>
        )
    }
}

export default Main;