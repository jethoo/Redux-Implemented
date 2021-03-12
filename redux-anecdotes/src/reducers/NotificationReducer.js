const initialState = {
    status: '',
    value: ''
}

const NotificationReducer = (state = initialState, action) => {
    let newState = ""
    
    switch(action.type){
        case 'VOTED': 
           newState = { status: 'VOTED', value: action.data.id }
           return newState
        case 'NEW':
            newState = { status: 'NEW', value: action.data.content }
            return newState
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