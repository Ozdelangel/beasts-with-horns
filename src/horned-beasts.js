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
            numClicks: 0,
            isFav: false,
        }
       
    }
    onAdd = () => {
        this.setState({numClicks: this.state.numClicks + 1});
        // console.log('button pressed');
    }

    notFav = () => {
        if(this.state.numClicks > 0)
        this.setState({numClicks:this.state.numClicks - 1});
    }
    setFav = () => {
        if(this.state.isFav){
            this.setState({isFav:false})
        }
        else{
            this.setState({isFav:true})

        }
    }
    render() {
        return (
            
            
            
            

            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.image} alt="a box" title=" a beast" />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.description}
    </Card.Text>
    <p onClick={this.setFav}>Number Of Clicks: {this.state.numClicks}</p>
            {/* (a ternary is a if/else all wrapped in on) */}
            <p>{(this.state.isFav) ? 'heart': ''}</p>
    <Button className='m-1' onClick={this.onAdd}>Add Fav</Button>
    <Button className='m-1'onClick={this.notFav}>remove</Button>
  </Card.Body>
</Card>
            
        )
    }
}

export default HornedBeasts;