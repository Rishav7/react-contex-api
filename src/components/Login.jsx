import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
const Login = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const { setUser } = useContext(UserContext);
	const handleSubmit = (e) => {
		e.preventDefault();
		setUser({ userName, password });
	};
	return (
		<div>
			<h1>Login</h1>
			<input type="text" placeholder="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
			<input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
};
export default Login;
