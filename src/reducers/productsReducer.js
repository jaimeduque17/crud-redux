import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR
} from '../types';
import { bindActionCreators } from '../../../../Library/Caches/typescript/3.6/node_modules/redux';

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
        default:
            return state;
    }
}