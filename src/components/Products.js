import React, { Fragment, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../actions/productsActions';

const Products = () => {

    // call the main action for return the products
    const dispatch = useDispatch();

    useEffect(() => {
        // products when the component is ready
        const uploadProducts = () => (
            dispatch(getProductsAction())
        )
        uploadProducts();
    }, []);

    // access the state
    const loading = useSelector(state => state.products.loading);

    return (
        <Fragment>
            <h2 className="text-center my-5">Products List</h2>

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
            {loading ? 'Loading...' : null}
        </Fragment>
    );
}

export default Products;