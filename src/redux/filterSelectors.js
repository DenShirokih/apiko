
const getSearch=state=>{
    const array = {
        title: '',
        location: '',
        price: '',
    }

   if(state.filters.title){
    array.title =  state.filters.title
   } 
   if(state.filters.location){
    array.location =  state.filters.location
   }
   if(state.filters.price){
    array.price =  state.filters.price
}

return array
}

export const filterSelectors = {
    getSearch
} 