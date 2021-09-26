import React from 'react';
import HornedBeasts from './horned-beasts.js';
import data from './data.json';

class Main extends React.Component{
    //set functions
    render() {
        // set variables
        
        
        let newArr = data.map((horn,idx) => 
            
                <HornedBeasts key={idx} 
                title={horn.title} 
                image={horn.image_url} 
                description={horn.description} 
                toggleModal={this.props.toggleModal}/>
            
        );
        return (
            <>
            <h2> rate the horned Horned Beasts</h2>
            
            {newArr};
            
            </>
        )
    }
}

export default Main;