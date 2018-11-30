import React from 'react'
import {Switch, Route} from 'react-router-dom'
import SearchContainer from './components/search/SearchContainer'
import TableContainer from './components/tables/TableContainer'


const Routes = ()=>{
  return(
    <Switch>
      <Route path="/listas" component={TableContainer}/>
      <Route exact path="/" component={SearchContainer}/>
    </Switch>
  )
}

export default Routes