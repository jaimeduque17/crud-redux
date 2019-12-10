import React, { useState } from 'react';

const NewProduct = () => {

    // state
    const [name, saveName] = useState('');
    const [price, savePrice] = useState('');

    // add new product
    const submitNewProduct = e => {
        e.preventDefault();

        // form validate
        if (name.trim() === '' || price.trim() === '') {
            console.log('error validation');
            return;
        }

        // if pass the validation


        // create new product


        // redirect
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

                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;