import React, { Component } from 'react';
import axios from 'axios';
import SearchContainer from '../search/SearchContainer'
import queryString from 'query-string'
import TableDisplayArtist from './TableDisplayArtist'


class TableCaontainer extends Component {
  
  state={
    data:[]
  }

  componentWillMount(){
    const parsed = queryString.parse(this.props.location.search)
    const type = parsed.type
    const search = parsed.search
    this.getData(type,search)
    console.log(parsed)
  }
  

  getData=(type,search)=>{
    const endPoint =`http://musicbrainz.org/ws/2/${type}/?query=${search}&fmt=json`
    axios.get(endPoint)
    .then(res=>{
      const apiResponse =res.data.artists || res.data.releases || res.data.recordings;
      console.log(apiResponse);
      this.setState({data:apiResponse});
    })
    .catch(error=>console.log(error))
  }

  render() {
    const {data}=this.state
    return (
      <div>
        <SearchContainer {...this.props}/>
        <TableDisplayArtist data={data}/>
      </div>
    );
  }
}

export default TableCaontainer;
