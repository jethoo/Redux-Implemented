import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/store";
import { voted } from "../reducers/NotificationReducer";

const AnecdoteList = (props) => {
    let anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(addVote(id))
        dispatch(voted(id))
     }
     
     //sorted anecdotes by votes
    let sortedAnecdote = anecdotes.sort((a,b) => {
        return (
        b.votes - a.votes
        )
    })

    return (
       <>
           {sortedAnecdote.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
                </div>
            )}
       </>
    )
}

export default AnecdoteList