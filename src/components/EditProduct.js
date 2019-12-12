import React, {useEffect} from 'react';

// Redux
import {useDispatch} from 'react-redux';
import {productEditAction} from '../actions/productsActions';

const EditProduct = ({match}) => {

// dispatch to execute the main action
const dispatch = useDispatch();

// get the ID to edit
const {id} = match.params;

useEffect(() => {
    dispatch(productEditAction(id))
}, [dispatch, id]);

    return (

        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center">Edit Product</h2>
                        <form>
                            <div className="form-group">
                                <label>Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Title"
                                />
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Price"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Save Changes</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProduct;