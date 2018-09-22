const loadProducts = () => {
    return {
        type: "LOAD_PRODUCTS"
    }
}

const addToCart = product => {
    return {
        type: "ADD_TO_CART",
        product
    }
}

const removeFromCart = product => {
    return {
        type: "REMOVE_FROM_CART",
        product
    }
}

const requestDataProductsSuccess = products => {
    return {
        type: "REQUEST_DATA_PRODUCT_SUCCESS",
        products
    }
}

export { loadProducts, addToCart, removeFromCart, requestDataProductsSuccess }