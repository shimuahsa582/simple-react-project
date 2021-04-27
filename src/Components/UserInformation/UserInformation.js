import React from 'react';
import './UserInformation.css';
const UserInformation = (props) => {
	const { id, name, email, phone, website } = props.user;
	const handleUserMember = props.handleUserMember;
	return (
		<div className="information">
			<div className="user_information">
				<h2>Id:{id}</h2>
				<h4>I am: {name}</h4>
				<h5>Phone:{phone}</h5>
				<p>
					<small>email:{email}</small>
				</p>
				<h5>{website}</h5>
				<button className="userButton" onClick={() => handleUserMember(props.user)}>
					added member
				</button>
			</div>
		</div>
	);
};

export default UserInformation;
