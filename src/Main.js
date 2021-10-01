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
              title={beast.title}
              image={beast.image_url}
              description={beast.description}
              displayAsModal={this.props.displayAsModal}
              />
            })}
            </>
            
        )
    }
}

export default Main;