import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/AnecdoteReducer";
import { voted } from "../reducers/NotificationReducer";

const AnecdoteList = (props) => {
    let anecdotes = useSelector(({anecdotes, filter}) => {
       if(filter.length > 0){
           return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter))
       }else{
           return anecdotes
       }
    })
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