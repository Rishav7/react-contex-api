import React from 'react';
import Login from '../components/Login';
import Profile from '../components/Profile';
import UserContextProvider from '../context/UserContextProvider';

function ContextSimple() {
	return (
		<UserContextProvider>
			<h1 className="text-3xl font-bold underline ">Hello</h1>
			<Login />
			<Profile />
		</UserContextProvider>
	);
}

export default ContextSimple;
