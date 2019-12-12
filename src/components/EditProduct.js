import React, { useEffect, Fragment } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { productEditAction } from '../actions/productsActions';

const EditProduct = ({ match }) => {

    // dispatch to execute the main action
    const dispatch = useDispatch();

    // get the ID to edit
    const { id } = match.params;

    useEffect(() => {
        dispatch(productEditAction(id))
    }, [dispatch, id]);

    // access to the state
    const product = useSelector(state => state.products.product);
    const error = useSelector(state => state.products.error);

    // when the API is charging
    if (!product) return 'Cargando...';

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
                                <form>
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Title"
                                            defaultValue={product.name}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Price"
                                            defaultValue={product.price}
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