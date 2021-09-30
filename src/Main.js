import React from 'react';
import HornedBeasts from './horned-beasts.js';


class Main extends React.Component{
    //set functions
    render() {
        // set variables
        
        
        
        return (
            <>
            {this.props.beastData.map((beast,idx) =>{
              return  <HornedBeasts
              key={idx}
              beast={beast}
              displayAsModal={this.props.displayAsModal}
              />
            })}
            </>
            
        )
    }
}

export default Main;