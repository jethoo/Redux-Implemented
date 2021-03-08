

const FilterReducer = (state = [], action ) => {
   switch(action.type){
       case 'SEARCH':
           let userEntered = action.filter
           console.log('userEntered', userEntered)
           let filteredObjects = 
           return state
        default:
            return state
   }
}

export const filterChange = filter => {
    return {
        type: 'SEARCH',
        filter
    }
}

export default FilterReducer