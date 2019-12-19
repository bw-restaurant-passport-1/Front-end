import React from 'react';
import useForm from 'react-hook-form';
import styled from 'styled-components';
import {axiosWithAuth} from '../utils/axiosWithAuth'

const Titles = styled.h1`font-family: 'Girassol', cursive;`;

export default function App(props) {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data, e) => {
		e.preventDefault();
		axiosWithAuth()
		.post('api/users', data)
		.then(res => {
			console.log(res.data)
			localStorage.setItem('token', res.data.token);
			props.history.push('/dashboard')
		})
		console.log(data)
	
	};
	console.log(errors);

	return (
		<Titles className='register-page'>
			<div className='forms'>
				<h1 className='title'> Restaurant Passport Registeration </h1>
				<form className='forms2' onSubmit={handleSubmit(onSubmit)}>
					<input
						className='inputs form-control'
						type='text'
						placeholder='Username'
						name='Username'
						ref={register({ required: true, maxLength: 80 })}
					/>
					<input
						className='inputs form-control'
						type='password'
						placeholder='Password'
						name='Password'
						ref={register({ required: true, max: 8 })}
					/>
					<input
						className='inputs form-control'
						type='text'
						placeholder='Name'
						name='Name'
						ref={register({ required: true })}
					/>
					<input
						className='inputs form-control'
						type='text'
						placeholder='City'
						name='City'
						ref={register({ required: true })}
					/>
					<input
						className='inputs form-control'
						type='email'
						placeholder='Email'
						name='Email'
						ref={register({ required: true, pattern: /^\S+@\S+$/i })}
					/>
					<input className='inputs' type='submit' />
				</form>
			</div>
		</Titles>
	);
}
