import React from 'react';

const userCart = (props) => {
	const userCart = props.userCart;
	let totalUserMember = 0;
	for (let i = 0; i < userCart.length; i++) {
		const user = userCart[i];
		totalUserMember = totalUserMember + user.name;
	}
	return (
		<div>
			<h4 style={{ textAlign: 'center' }}>Added Cart Number:{userCart.length}</h4>
			<h3 style={{ textAlign: 'center' }}>Total Name:{totalUserMember}</h3>
		</div>
	);
};

export default userCart;
