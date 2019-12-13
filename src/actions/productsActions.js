import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR,
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
    EDIT_PRODUCT,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_ERROR,
    START_EDIT_PRODUCT,
    EDITED_PRODUCT_SUCCESS,
    EDITED_PRODUCT_ERROR
} from '../types';

import clientAxios from '../config/axios';
import Swal from 'sweetalert2';

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

// get products list (check API)
export function getProductsAction() {
    return (dispatch) => {
        dispatch(getProductsBegin());

        // check the API
        clientAxios.get('/books')
            .then(response => {
                dispatch(downloadProductsSuccess(response.data));
            })
            .catch(error => {
                dispatch(downloadProductsError());
            })
    }
}

export const getProductsBegin = () => ({
    type: DOWNLOAD_PRODUCTS
})

export const downloadProductsSuccess = (products) => ({
    type: DOWNLOAD_PRODUCTS_SUCCESS,
    payload: products
})

export const downloadProductsError = () => ({
    type: DOWNLOAD_PRODUCTS_ERROR
})

// function for delete a product
export function deleteProductAction(id) {
    return (dispatch) => {
        dispatch(productDelete())

        // delete form the API
        clientAxios.delete(`/books/${id}`)
            .then(response => {
                dispatch(productDeleteSuccess(id));
            })
            .catch(error => {
                dispatch(productDeleteError());
            })
    }
}

export const productDelete = () => ({
    type: DELETE_PRODUCT
})

export const productDeleteSuccess = (id) => ({
    type: DELETE_PRODUCT_SUCCESS,
    payload: id
})

export const productDeleteError = () => ({
    type: DELETE_PRODUCT_ERROR
})

// get the product to edit
export function productEditAction(id) {
    return (dispatch) => {
        dispatch(productAction());

        // get product from the API
        clientAxios.get(`/books/${id}`)
            .then(response => {
                dispatch(productEditSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(productEditError());
            })
    }
}

export const productAction = () => ({
    type: EDIT_PRODUCT
})

export const productEditSuccess = (product) => ({
    type: EDIT_PRODUCT_SUCCESS,
    payload: product
})

export const productEditError = () => ({
    type: EDIT_PRODUCT_ERROR
})

export function editProductAction(product) {
    return (dispatch) => {
        dispatch(startEditProduct())

        // check API
        clientAxios.put(`/books/${product.id}`, product)
            .then(response => {
                dispatch(editProductSuccess(response.data));
                Swal.fire(
                    'Almacenado',
                    'El producto se actualizó correctamente',
                    'success'
                )
            })
            .catch(error => {
                dispatch(editProductError());
            })
    }
}

export const startEditProduct = () => ({
    type: START_EDIT_PRODUCT
})

export const editProductSuccess = product => ({
    type: EDITED_PRODUCT_SUCCESS,
    payload: product
})

export const editProductError = () => ({
    type: EDITED_PRODUCT_ERROR
})