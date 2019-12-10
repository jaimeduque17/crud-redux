import React from 'react';

const EditProduct = () => {
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