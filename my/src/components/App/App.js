import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import List from '../List';


class App extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      term:"",
      items:[]
    }
  }

  onChange = (event) => {

    this.setState({

      term: event.target.value

    });

  }

  onComplete = (i) =>  {

    this.setState(
      prevState => ({

        items: [

          ...prevState.items.slice(0,i),
          {
            todo: prevState.items[i].todo,
            complete: !prevState.items[i].complete
          },

          ...prevState.items.slice(i+1)

        ]

      }));

  }

  onSubmit = (event) =>  {

    event.preventDefault();
    this.setState({

      term:'',
      items: [...this.state.items, {todo: this.state.term, complete: false}]

    });

  }

  render() {
    return (
      <div>
        <form className= "App" onSubmit = {this.onSubmit}>
        <input value = {this.state.term} onChange={this.onChange}/>
        <button>Add Item to To-Do List</button>
        <p>Hello!</p>
      </form>
      <List items={this.state.items} onComplete={this.onComplete}/>
      </div>
    );
  }
}


export default App;
