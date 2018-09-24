import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from '../components/Product'
import { addToCart, loadProducts } from '../actions/ShoppingCart'

class ProductList extends Component {
    componentDidMount() {
        this.props.loadProducts()
    }

    render() {
        return (
            <Product products={this.props.products} addToCart={this.props.addToCart} />
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart(product) {
            dispatch(addToCart(product))
        },
        loadProducts() {
            dispatch(loadProducts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)