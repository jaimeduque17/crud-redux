import React, { useEffect, Fragment, useRef } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { productEditAction, editProductAction } from '../actions/productsActions';
import { validateFormAction, successValidation, errorValidation } from '../actions/validationActions';

const EditProduct = ({ history, match }) => {

    // create refs
    const nameRef = useRef('');
    const priceRef = useRef('');

    // dispatch to execute the main action
    const dispatch = useDispatch();

    const editProduct = (product) => dispatch(editProductAction(product));
    const validateForm = () => dispatch(validateFormAction());
    const validationSuccess = () => dispatch(successValidation());
    const validationError = () => dispatch(errorValidation());

    // get the ID to edit
    const { id } = match.params;

    useEffect(() => {
        dispatch(productEditAction(id))
    }, [dispatch, id]);

    // access to the state
    const product = useSelector(state => state.products.product);
    const error = useSelector(state => state.products.error);

    // when the API is charging
    if (!product) return 'Loading...';

    const submitEditProduct = (e) => {
        e.preventDefault();

        // validate the form
        validateForm();

        if (nameRef.current.value.trim() === '' || priceRef.current.value.trim() === '') {
            validationError();
            return;
        }

        // there wasn't an error
        validationSuccess();

        // save changes
        editProduct({
            id,
            name: nameRef.current.value,
            price: priceRef.current.value
        });

        // redirect
        history.push('/');
    }

    return (

        <Fragment>
            {error
                ?
                <div className="font-weight-bold alert alert-danger text-center mt-4">There was an error, try again</div>
                :
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-center">Edit Product</h2>
                                <form
                                    onSubmit={submitEditProduct}
                                >
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Title"
                                            defaultValue={product.name}
                                            ref={nameRef}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Price"
                                            defaultValue={product.price}
                                            ref={priceRef}
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Save Changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    );
}

export default EditProduct;