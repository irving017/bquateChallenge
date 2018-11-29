import React from 'react';

const TableDisplay = (props) => {
  return (
    <div>
      <div>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <p>Name</p>
          <p>Sort Name</p>
          <p>Type</p>
          <p>Gender</p>
          <p>Area</p>
          <p>Star</p>
          <p>End</p>
        </div>
        {props.data.map((e,i)=>
        <div style={{display:'flex', justifyContent:'space-around'}} key={i}>
          <p>{e.name}</p>
          <p>{e["sort-name"]}</p>
          <p>{e.type}</p>
          <p>{e.gender}</p>
          <p>{e.area.name}</p>
          <p>{e["life-span"].begin}</p>
          <p>{e["life-span"].end}</p>
        </div>
      )}    
      </div>
    </div>
  );
}

export default TableDisplay;
