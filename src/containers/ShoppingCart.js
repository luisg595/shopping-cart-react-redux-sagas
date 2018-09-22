import React, { Component } from 'react'
import { connect } from 'react-redux'
import Shopping from '../components/Shopping'
import { removeFromCart } from '../actions/ShoppingCart'

class ShoppingCart extends Component {
    render() {
        return (
            <Shopping cart={this.props.cart} removeFromCart={this.props.removeFromCart} />
        )
    }
}

const mapStateToProps = state => {
    const cart = state.cart.cart || []
    return {
        cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart(product) {
            dispatch(removeFromCart(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)