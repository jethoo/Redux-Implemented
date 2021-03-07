import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";

const AnecdoteList = (props) => {
    let anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(addVote(id))
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