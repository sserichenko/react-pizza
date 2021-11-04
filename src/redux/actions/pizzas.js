import axios from "axios";


export const setLoaded = (value) => ({
    type: "SET_LOADED",
    payload: value
})

export const fetchPizzas = (category,sortBy) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(res => {
      const response = res.data;
        dispatch(setPizzas(response))
    })
}

export const setPizzas = (items) => ({
    type: "SET_PIZZAS", 
    payload: items
})