import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
	const { id, image, name, email, price } = props.product;

	return (
		<div className="single-product">
			<div>
				<img className="product-image" src={image} alt="" />
			</div>
			<div className="product-name">
				<h2>Id:{id}</h2>
				<h4>Name:{name}</h4>
				<h4>price:${price}</h4>
				<p>
					<small> email:{email}</small>
				</p>
				<button className="product-button" onClick={() => props.handleAddProduct(props.product)}>
					<FontAwesomeIcon icon={faShoppingCart} />add to cart
				</button>
			</div>
		</div>
	);
};

export default Product;
