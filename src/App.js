import React, { Component } from 'react';
import SearchDisplay from './components/search/SearchDisplay';
import TableDisplayArtist from './components/tables/TableDisplayArtist'
import TableDisplayRecording from './components/tables/TableDisplayRecording'
import TableDisplayRelease from './components/tables/TableDisplayRelease'
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
    this.getData(endPoint)
  }

  getData=(endPoint)=>{
    axios.get(endPoint)
    .then(res=>{
      const apiResponse =res.data.artists || res.data.releases || res.data.recordings;
      console.log(apiResponse);
      this.setState({data:apiResponse});
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

  handleClick = ()=>{
    console.log("hola")
  }

  render() {
    return (
      <div>
        <SearchDisplay
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleClick={this.handleClick}
        />
        {this.state.form.type==="artist" && this.state.data.length!==0?
        <TableDisplayArtist 
        data={this.state.data}
        />:""
        }
        {this.state.type==="recording" && this.state.data.length!==0?
        <TableDisplayRecording 
        data={this.state.data}
        />:""
        }
        {this.state.type==="release" && this.state.data.length!==0?
        <TableDisplayRelease 
        data={this.state.data}
        />:""
        }
      </div>
    );
  }
}

export default App;
