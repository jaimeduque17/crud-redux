import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../types';

import clientAxios from '../config/axios';

// create a new product - main function
export function createNewProductAction(product) {
    return (dispatch) => {
        dispatch(newProduct());

        // insert in the API
        clientAxios.post('/books', product)
            .then(response => {
                console.log(response);

                // if the insert is correctly
                dispatch(addProductSuccess(product));
            })
            .catch(error => {
                console.log(error);

                // if there is an error
                dispatch(addProductError())
            })

    }
}

export const newProduct = () => ({
    type: ADD_PRODUCT
})

export const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

export const addProductError = error => ({
    type: ADD_PRODUCT_ERROR
})