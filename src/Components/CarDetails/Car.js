import { useState } from 'react';
import fakeData from '../../fakeData/fakeData.json';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Car.css';

const Car = () => {
	const first15 = fakeData.slice(0, 15);
	const [ products, setProduct ] = useState(first15);
	const [ cart, setCart ] = useState([]);
	const handleAddProduct = (product) => {
		const newCart = [ ...cart, product ];
		setCart(newCart);
	};

	return (
		<div className="car-container">
			<div className="product-container">
				{products.map((product) => <Product handleAddProduct={handleAddProduct} product={product} />)}
			</div>
			<div className="cart-container">
				<Cart cart={cart} />
			</div>
		</div>
	);
};

export default Car;
