import React from 'react'
//import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { createAnecdote } from "../reducers/AnecdoteReducer";
import { created } from "../reducers/NotificationReducer";

const AnecdoteForm = (props) => {
   
    const addDote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createAnecdote(content)
        props.created(content)
    }

    return (
        <>
            <h2>Create New</h2>
            <form onSubmit={addDote}>
                <div><input name='anecdote' /></div>
                <button type='submit'>create</button>
            </form>
        </>
    )
}

export default connect(
    null,
    { createAnecdote, created }
)(AnecdoteForm)