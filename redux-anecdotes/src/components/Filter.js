import React from 'react'
import { filterChange } from '../reducers/FilterReducer'

const Filter = () => {
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    filterChange(event.target.value)
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

export default Filter