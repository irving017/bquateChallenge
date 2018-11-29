import React from 'react';
import {Grid} from '@material-ui/core'

const TableDisplayArtist = (props) => {
  return (
    <div style={{width:"100%",alignContent:"center"}}>
        <Grid container spacing={8} style={{borderBottom:"1px solid black",width:"90%",marginLeft:"5%"}}>
          <Grid item xs><p>Name</p></Grid>
          <Grid item xs><p>Sort Name</p></Grid>
          <Grid item xs><p>Type</p></Grid>
          <Grid item xs><p>Gender</p></Grid>
          <Grid item xs><p>Area</p></Grid>
          <Grid item xs><p>Start Career</p></Grid>
          <Grid item xs><p>End Career</p></Grid>
        </Grid>
        {props.data.map((e,i)=>
        <Grid container spacing={8} key={i} style={{borderBottom:"1px solid black",width:"90%",marginLeft:"5%"}}>
          <Grid item xs><p>{e.name}</p></Grid>
          <Grid item xs><p>{e["sort-name"]}</p></Grid>
          <Grid item xs><p>{e.type}</p></Grid>
          <Grid item xs><p>{e.gender}</p></Grid>
          <Grid item xs><p>{e.area?e.area.name:""}</p></Grid>
          <Grid item xs><p>{e["life-span"]?e["life-span"].begin:""}</p></Grid>
          <Grid item xs><p>{e["life-span"]?e["life-span"].end:""}</p></Grid>
        </Grid>
      )}    
  </div>
  );
}

export default TableDisplayArtist;
