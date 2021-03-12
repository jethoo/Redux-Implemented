import React from 'react'
import { filterChange } from '../reducers/FilterReducer'
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const Filter = (props) => {
  console.log('props', props.filterChange)
   const dispatch = useDispatch()

  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    dispatch(filterChange(event.target.value))
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

const mapDispatchToProps = {
  filterChange
}

const connectedFilter = connect(
  mapDispatchToProps,
)(Filter) 

export default connectedFilter