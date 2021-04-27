import { useState, useEffect } from 'react';
import './App.css';
import Car from './Components/CarDetails/Car';
import Header from './Components/Header/Header';
import UserInformation from './Components/UserInformation/UserInformation';
import UserCart from './Components/UserCart/UserCart';

function App() {
	const [ users, setUsers ] = useState([]);
	const [ userCart, setUserCart ] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((data) => setUsers(data))
			.catch((error) => console.log(error));
	}, []);

	const handleUserMember = (user) => {
		const newCart = [ ...userCart, user ];
		setUserCart(newCart);
	};
	return (
		<div>
			<Header />
			<Car />

			<h1 style={{ textAlign: 'center' }}> Total Users: {users.length}</h1>
			<h4 style={{ textAlign: 'center' }}>Added Member:{userCart.length}</h4>
			<UserCart userCart={userCart} />
			<ul>
				{users.map((user) => (
					<UserInformation user={user} handleUserMember={handleUserMember} key={user.username} />
				))}
			</ul>
		</div>
	);
}
//
export default App;
