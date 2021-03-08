const FilterReducer = (state = '', action ) => {
   
   switch(action.type){
         case 'TYPED': {
            //console.log('userEntered', action.filter)
            //let userEntered = action.filter
            return action.filter
         }
        default:
            return state
   }
}

export const filterChange = filter => {
    return {
        type: 'TYPED',
        filter
    }
}

export default FilterReducer