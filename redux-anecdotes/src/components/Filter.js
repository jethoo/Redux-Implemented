import React from 'react'
import { filterChange } from '../reducers/FilterReducer'
//import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const Filter = (props) => {
  
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    props.filterChange(event.target.value)
}

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const connectedFilter = connect(
  null,
  { filterChange }
)(Filter) 

export default connectedFilter