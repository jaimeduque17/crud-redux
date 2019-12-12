import React, { Fragment, useEffect } from 'react';

import Product from '../components/Product';

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
    const error = useSelector(state => state.products.error);
    const products = useSelector(state => state.products.products);

    return (
        <Fragment>
            {error ? <div className="font-weight-bold alert alert-danger text-center mt-4">There was an error</div> : null}
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
                            {products.map(product => (
                                <Product 
                                key={product.id}
                                product={product}
                                />
                            ))}
                        </tbody>
                    </table>
                    {loading ? 'Loading...' : null}
                </Fragment>
        </Fragment>
    );
}

export default Products;