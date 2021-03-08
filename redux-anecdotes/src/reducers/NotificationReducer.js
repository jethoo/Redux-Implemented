const initialState = {
    status: '',
    value: ''
}

const NotificationReducer = (state = initialState, action) => {
    switch(action.type){
    
        case 'VOTED': 
          const newState = { status: 'VOTED', value: action.data.id }
          return newState
        
        case 'NEW':
          const anotherState = { status: 'NEW', value: action.data.content }
          return anotherState
    
        default:
          return state
      }   
}

export const voted = (id) => {
    return {
        type: 'VOTED',
        data: { id }
    }
}

export const created = (content) => {
    return {
        type: 'NEW',
        data: { content }
    }
}

export default NotificationReducer