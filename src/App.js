import React, { Component } from 'react';
import SearchDisplay from './components/search/SearchDisplay';
import axios from 'axios';

class App extends Component {
  
  state={
    form:{}
  }

  onSubmit=(e)=>{
    e.preventDefault();
    const form = this.state;
    console.log(form)
  }

  onChange=(e)=>{
    const {form} = this.state;
    const key = e.target.name; 
    const value = e.target.value;
    form[key]=value;
    console.log(form)
  }

  render() {
    return (
      <div>
        <SearchDisplay
        onChange={this.onChange}
        />
      </div>
    );
  }
}

export default App;
