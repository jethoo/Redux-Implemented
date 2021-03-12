import React from 'react'
//import { useSelector } from "react-redux";
import { connect } from "react-redux";

const Notification = (props) => {

  const notification = props.message
  
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

const mapStateToProps = (state) => {
  console.log('state', state)
   if(state.notification.status === ""){
     return {
       message: ""
     }
   }else if(state.notification.status === 'NEW'){
     return {
       message: `New Anecdote '${state.notification.value}' added`
     }
   }else {
    let filtered = state.anecdotes.find(anecdote => anecdote.id === state.notification.value)
    return {
      message: `you voted '${filtered.content}'`
    }
   }
}

const NotificationConnected = connect(
  mapStateToProps
)(Notification)

export default NotificationConnected