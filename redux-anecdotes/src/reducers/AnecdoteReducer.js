//notificationreducer import  
import anecdoteService from '../services/anecdotes'

const AnecdoteReducer = (state = [], action) => {
    switch(action.type){
      
      case 'ADD_VOTE': {
        
        return state.map(anecdote => 
          anecdote.id !== action.id ? anecdote : action.data
        )
      }
  
      case 'NEW_DOTE':
        return state.concat(action.data)
      
      case 'INIT_DOTES':
        return action.data
  
      default:
        return state
    }
  }
  
  //separate function for handling the event of adding vote
  export const addVote = (id) => {
    return async dispatch => {
      const dotes = await anecdoteService.getAll()
      const anecdoteToChange = dotes.find(n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      const updatedDote = await anecdoteService.addingVote(id, changedAnecdote)
      dispatch({
        type: 'ADD_VOTE',
        data: updatedDote,
        id: id
      })
    }
  }
  
  //separate function for handling the event for adding new anecdote
  export const createAnecdote = content => {
    return async dispatch => {
      const newDote = await anecdoteService.createNew(content)
      console.log('newDote', newDote)
      //state update 
      dispatch({
        type: 'NEW_DOTE',
        data: newDote
      })
    } 
  }
  
  //method for initializing the state , fetching data from backend 
  export const initializeDotes = () => {
    return async dispatch => {
      const dotes = await anecdoteService.getAll()
      dispatch({
        type: 'INIT_DOTES',
        data: dotes,
      })
      }
  }
  
  export default AnecdoteReducer