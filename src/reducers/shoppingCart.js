const products = (state=[], action) => {
    if (action.type === "REQUEST_DATA_PRODUCT_SUCCESS") {
        return {
            ...state,
            products: action.products
        }
    }

    return state
}

const cart = (state=[], action) => {
    if (action.type === "ADD_TO_CART") {
        const cart = state.cart || []
        return {
            ...state,
            cart: cart.concat(action.product)
        }
    }
    else if (action.type === "REMOVE_FROM_CART") {
        const cart = state.cart || []
        return {
            ...state,
            cart: cart.filter(product => product.id !== action.product.id)
        }
    }

    return state
}

export { products, cart }