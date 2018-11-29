import React, { Component } from 'react';
import SearchDisplay from './components/search/SearchDisplay';
import TableDisplay from './components/table/TableDisplay'

import axios from 'axios';

class App extends Component {
  
  state={
    form:{},
    data:[]
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    const {form} = this.state;
    if(!form.type || !form.search)return alert("Te falto rellenar un campo");
    const endPoint =`http://musicbrainz.org/ws/2/${form.type}/?query=${form.search}&fmt=json`;
    axios.get(endPoint)
    .then(res=>{
      const apiResponse =res.data.artists || res.data.releases || res.data.recordings;
      console.log(apiResponse)
      this.setState({data:apiResponse})
    })
    .catch(error=>console.log(error))
  }

  handleChange=(e)=>{
    const {form} = this.state;
    const key = e.target.name; 
    const value = e.target.value;
    form[key]=value;
    this.setState({form})
  }

  render() {
    return (
      <div>
        <SearchDisplay
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        />
        {this.state.data.length===0?'':
        <TableDisplay 
        data={this.state.data}
        />
        }
      </div>
    );
  }
}

export default App;
