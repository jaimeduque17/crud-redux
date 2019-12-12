import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR,
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR
} from '../types';

// each reducer has its own state
const initialState = {
    products: [],
    error: null,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                error: null
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                error: null,
                products: [...state.products, action.payload]
            }
        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                error: true
            }
        case DOWNLOAD_PRODUCTS:
            return {
                ...state,
                loading: true
            }
        case DOWNLOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: false
            }
        case DOWNLOAD_PRODUCTS_ERROR:
            return {
                ...state,
                products: [],
                loading: false,
                error: true
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                error: null
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                error: null,
                products: state.products.filter( product => product.id !== action.payload )
            }
        case DELETE_PRODUCT_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}