
export const productlistReducer = (state = { productList: [] }, action) => {
    switch (action.type) {
        case 'Success':
            return { productList: action.payload }
        case 'Failed':
            return { productList: action.error }
        default:
            return state
    }
}

export const CartlistReducer = (state = { cartList: [], totalPrice: 0 }, action) => {
    switch (action.type) {
        case 'Success':
            return {
                cartList: action.payload,
                totalPrice:action.amount
            }
        case 'Failed':
            return { cartList: action.error }
        default:
            return state
    }
}