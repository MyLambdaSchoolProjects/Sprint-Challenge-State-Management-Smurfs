import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { addSmurf } from "../../actions";

const AddSmurfForm = props => {
  const [name, setName] = useState({});
  const [age, setAge] = useState({});
  const [height, setHeight] = useState({});
  const handleNameChanges = e => {
    setName({name: e.target.value});
  };
  const handleAgeChanges = e => {
    setAge({age: e.target.value});
  };
  const handleHeightChanges = e => {
    setHeight({height: e.target.value} );
  };
  const onSubmit = (e) => {
      e.preventDefault();
      console.log(name,age,height);
    axios
      .post("http://localhost:3333/smurfs",{...name, ...age, ...height})
      .then(res => {
        console.log('smurf',res.data);
        props.addSmurf(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleNameChanges}
          required
        />
        <input type="number" name="age" placeholder="200" onChange={handleAgeChanges} required />
        <input type="text" name="height" placeholder="5cm" onChange={handleHeightChanges} required />
        <button type="submit">Add Smurf</button>
      </form>
    </>
  );
};

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { addSmurf }
)(AddSmurfForm);
