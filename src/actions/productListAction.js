import axios from "axios";

const baseurl = 'http://localhost:3000'

export const ProductsList = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${baseurl}/all-Products`)
        console.log(data.result);
        dispatch({
            type: 'Success',
            payload: data.result
        })
    }
    catch (error) {
        dispatch({
            type: 'Failed',
            error: error
        })
    }
}

export const CartList = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${baseurl}/CartProducts`)
        console.log(data.result);
        dispatch({
            type: 'Success',
            payload: data.result,
            amount: data.amount
        })
    }
    catch (error) {
        dispatch({
            type: 'Failed',
            error: error
        })
    }
}

