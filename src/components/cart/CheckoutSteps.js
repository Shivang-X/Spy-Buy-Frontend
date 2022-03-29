import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutSteps = ({ shipping, confirmOrder, payment }) => {
    return (
        <div className="checkout-progress d-flex justify-content-center mt-5 laptop">

            {shipping ? <Link to='shipping' className="float-right ">
                <div className="triangle2-active "></div>
                <div className="step active-step ">Shipping</div>
                <div className="triangle-active "></div>
            </Link> : <Link to="#!" disabled>
                    <div className="triangle2-incomplete laptop"></div>
                    <div className="step incomplete laptop">Shipping</div>
                    <div className="triangle-incomplete laptop"></div>
                </Link>}

            {confirmOrder ? <Link to='/confirm' className="float-right ">
                <div className="triangle2-active "></div>
                <div className="step active-step ">Confirm Order</div>
                <div className="triangle-active "></div>
            </Link> : <Link to="#!" disabled>
                    <div className="triangle2-incomplete laptop"></div>
                    <div className="step incomplete laptop">Confirm Order</div>
                    <div className="triangle-incomplete laptop"></div>
                </Link>}

            {payment ? <Link to='/payment' className="float-right laptop">
                <div className="triangle2-active laptop"></div>
                <div className="step active-step laptop">Payment</div>
                <div className="triangle-active laptop"></div>
            </Link> : <Link to="#!" disabled>
                    <div className="triangle2-incomplete laptop"></div>
                    <div className="step incomplete laptop">Payment</div>
                    <div className="triangle-incomplete laptop"></div>
                </Link>}

        </div>
    )
}

export default CheckoutSteps
