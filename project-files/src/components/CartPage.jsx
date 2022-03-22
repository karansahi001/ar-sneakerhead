import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {delItem} from '../redux/actions/index'

const CartPage = () => {
    const state = useSelector((state) => state.addItem)
    const dispatch = useDispatch()
    
    const handleClose = (item) => {
        dispatch(delItem(item))
    }


    const cartItems = (cartItem) => {
        return (
            <div className="p-5 bg-dark text-light" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick = {() => handleClose(cartItem)} className="btn-close bg-light float-end" aria-label="Close" ></button>
                    <div className="row justify-content-center align-items-center"> 
                        <div className="col-md-4">
                            <img src={cartItem.img} alt={cartItem.title} height="180px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead">${cartItem.price}</p>
                        </div>
                    </div>
                </div>
                <hr className="bg-success"/>
            </div>
        )
    }

    const empty = () => {
        return(
            <div className="py-5 bg-dark text-light">
                <div className="container py-4">
                    <div className="row text-center">
                        <div className="col">
                            <h2 className="text-light">Your Cart is empty!</h2>
                            <p className="lead my-5">Add something to your cart</p>
                            <NavLink to="/products" className="btn btn-lg btn-success ms-2 mt-3 text-light px-5 rounded-pill">
                                Buy
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
  return (
    <>
        {state.length !== 0 ? state.map(cartItems) : empty()}
    </>
  )
}

export default CartPage