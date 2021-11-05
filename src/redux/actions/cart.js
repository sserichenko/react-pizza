export const addPizzaToCart = (pizza) => ({
    type: "ADD_PIZZA_TO_CART",
    payload: pizza
})

export const clearCart = () => ({
    type: "CLEAR_CART",
})