import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

// Redux
import { useDispatch } from 'react-redux';

import { deleteProductAction } from '../actions/productsActions';

const Product = ({ product }) => {

    // dispatch for execute the actions
    const dispatch = useDispatch();

    const deleteConfirm = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                dispatch(deleteProductAction());

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })

        // sweet alert confirmation
    }

    return (
        <tr>
            <td>{product.name}</td>
            <td>
                <span className="font-weight-bold">$ {product.price}</span>
            </td>
            <td className="actions">
                <Link
                    to={`/products/edit/${product.id}`}
                    className="btn btn-primary mr-2">
                    Edit
                </Link>
                <button
                    className="btn btn-danger"
                    onClick={() => deleteConfirm(product.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default Product;

// ver video 228