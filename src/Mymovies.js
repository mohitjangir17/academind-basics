import React from "react";
import "./App.css";



export class Movies extends React.Component {
  constructor(props) {
    super();
    this.state = { 
      age: props.age
    };
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 4
    });
  }
    // const movies = [
    //     {name:'harryporter' , price:'10'},
    //     {name:'harryporter' , price:'10'},
    // ]
    render() {
      return (
        <div className="movies">
          <h1>Name:{this.props.name}</h1>
          <hr />
          <h1>Age:{this.state.age}</h1>
          <hr />
          <button onClick={() => this.onMakeOlder()}>Make me old</button>
        </div>
      );
    }  
}
export default Movies
