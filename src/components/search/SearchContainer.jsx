import React, { Component } from 'react';
import SearchDisplay from './SearchDisplay';

class SearchContainer extends Component {
  
  state={
    form:{}
  }

  componentDidMount(){
    console.log(this.props)
  }

  handleChange=(e)=>{
    const {form} = this.state;
    const key = e.target.name; 
    const value = e.target.value;
    form[key]=value;
    this.setState({form});
  }
  
  handleSubmit=(e)=>{
    const {form} = this.state;
    if(!form.type || !form.search)return alert("Te falto rellenar un campo");
    this.props.history.push(`/listas?${form.type}&${form.search}`);
  }

  render() {
    return (
      <div>
        <SearchDisplay 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default SearchContainer;
