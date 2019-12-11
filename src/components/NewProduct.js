import React, { useState } from 'react';

// Redux
import { createNewProductAction } from '../actions/productsActions';
import { validateFormAction, successValidation, errorValidation } from '../actions/validationActions';
import { useDispatch, useSelector } from 'react-redux';

const NewProduct = ({history}) => {

    // state
    const [name, saveName] = useState('');
    const [price, savePrice] = useState('');

    // create new product
    const dispatch = useDispatch();
    const addProduct = (product) => dispatch(createNewProductAction(product));
    const validateForm = () => dispatch(validateFormAction());
    const validationSuccess = () => dispatch(successValidation());
    const validationError = () => dispatch(errorValidation());

    // useState is use for access to the state of Redux
    // get the data of the state
    const error = useSelector((state) => state.error.error);


    // add new product
    const submitNewProduct = e => {
        e.preventDefault();

        validateForm();

        // form validate
        if (name.trim() === '' || price.trim() === '') {
            validationError();
            return;
        }

        // if pass the validation
        validationSuccess();

        // create the new product
        addProduct({
            name,
            price
        });

        // redirect
        history.push('/');
    }

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Add New Book</h2>
                        <form onSubmit={submitNewProduct}>
                            <div className="form-group">
                                <label>Book Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Book Name"
                                    value={name}
                                    onChange={e => saveName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Book Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Book Price"
                                    value={price}
                                    onChange={e => savePrice(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Add</button>
                        </form>
                        {error ? <div className="font-weight-bold alert alert-danger text-center mt-4">All fields are required</div> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;