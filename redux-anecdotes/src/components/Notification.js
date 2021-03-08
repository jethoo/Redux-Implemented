import React from 'react'
import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector(({ anecdotes, notification}) => {
      if( notification.status === "") {
        return ""
      }else if(notification.status === 'NEW'){
        return `New Anecdote '${notification.value}' added`
      }else{
        let filtered = anecdotes.find(anecdote => anecdote.id === notification.value)
        return `you voted '${filtered.content}'`
      }
    })
  
    const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div>
      {(notification === "") ? null
        : <div style={style}>{notification}</div>
      }
    </div>
  )
}

export default Notification