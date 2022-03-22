import React, {useState} from 'react';
import {useParams, NavLink} from 'react-router-dom';
import DATA from '../Data';
import TryOnDetails from './TryOnDetails';
import {useDispatch} from 'react-redux'
import {addItem, delItem} from '../redux/actions/index'

const ProductDetails = () => {

    const [cartBtn, setCartBtn] = useState("Add to Cart");
    const proid = useParams();
    const prodetail = DATA.filter(item => item.id == proid.id);
    const product = prodetail[0];

    const dispatch = useDispatch()


    const handleCart = (product) => {
        setCartBtn((cart) => {return (cart == "Add to Cart" ? (dispatch(addItem(product)),"Remove" ): (dispatch(delItem(product)),"Add to Cart") )} )
    }

  return (
        <>
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.img} alt={product.title}  width ={500} height={500} />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">{product.title}</h1>
                        <hr />
                        <h2 className="my-4">${product.price}</h2>
                        <p className="lead">{product.desc}</p>
                        <button onClick ={() => handleCart(product)} className="btn btn-success my-5">{cartBtn}</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
