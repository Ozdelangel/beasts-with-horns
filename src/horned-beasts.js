import React from 'react';
import './hornedbeast.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component{
    // have to add state
    constructor(props){
        super(props);
        // state must be an object
        this.state = {
            fav: 0,
            isFav: false,
        }
       
    }
    addfav = () => {
        this.setState({fav: this.state.fav + 1});
        // console.log('button pressed');
    }

    notFav = () => {
        if(this.state.fav > 0){
            this.setState({fav: this.state.fav - 1});
        }
        
    }

    render() {
        return (
            <>
            <h2>{this.props.beast.title}</h2>
            <p >{this.props.description}</p>
            
            <p onClick ={this.addfav}> :heart = {this.state.fav}</p>
            
            

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.image} alt="a beast" title=" a beast" />
            <Card.Body>
            <Card.Title onClick={() => this.props.displayAsModal(this.props.beast.title)}>{this.props.title}</Card.Title>
            <Card.Text>
            {this.props.description}
            </Card.Text>
    <p onClick={this.setFav}>Number Of Clicks: {this.state.fav}</p>
            {/* (a ternary is a if/else all wrapped in on) */}
            
    <Button className='m-1' onClick={this.addfav}>Add Fav</Button>
    <Button className='m-1'onClick={this.notFav}>remove</Button>
  </Card.Body>
</Card>
</>
            
        );
    }
}

export default HornedBeasts;