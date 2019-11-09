import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from 'axios';
import { getSmurf } from "../../actions";

const GetSmurf = props => {
  useEffect(() => {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        //console.log(res)  
        props.getSmurf(res.data) 
    })
    .catch(err =>console.error(err));
  });
  return (
    <>
      <h1>Smurfs</h1>
      
      { props.smurfs? props.smurfs.map(smurf => {
        return (
          <div key={smurf.id}>
            <p>name: {smurf.name}</p>
            <p>age: {smurf.age}</p>
            <p>height: {smurf.height}</p>
          </div>
        );
      }):null} 
    </>
  );
};
const mapStateToProps = state => state;

export default connect(mapStateToProps,{getSmurf})(GetSmurf);
