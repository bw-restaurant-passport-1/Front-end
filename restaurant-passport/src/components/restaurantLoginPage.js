import React from 'react';
import useForm from 'react-hook-form';
import styled from 'styled-components';

const Titles = styled.div`font-family: 'Girassol', cursive;`;

export default function App() {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<Titles className='login-page'>
			<div className='forms'>
				<h1 className='title'>Restaurant Passport Sign-In!</h1>
				<form className='forms2' onSubmit={handleSubmit(onSubmit)}>
					<input
						className='inputs form-control'
						type='text'
						placeholder='Username'
						name='Username'
						ref={register({ required: true, maxLength: 80 })}
					/>
					{errors.Username && <p className='errors'>Username Required</p>}
					<input
						className='inputs form-control'
						type='password'
						placeholder='Password'
						name='Password'
						ref={register({ required: true, max: 8 })}
					/>
					{errors.Password && <p className='errors'>Password Required</p>}
					<input className='inputs' type='submit' />
				</form>
			</div>
		</Titles>
	);
}
