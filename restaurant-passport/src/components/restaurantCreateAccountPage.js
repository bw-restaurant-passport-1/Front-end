import React from 'react';
import useForm from 'react-hook-form';
import styled from 'styled-components';
import { signup } from '../actions/index';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const Titles = styled.h1`font-family: 'Girassol', cursive;`;

const RestaurantCreateAccountPage = props => {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = data => {
		console.log(data);
		props.signup(data).then(()=> {props.history.push('/dashboard')
	})
}
	console.log(errors);

	return (
		<Titles className='register-page'>
			<div className='forms'>
				<h1 className='title'> Restaurant Passport Registration </h1>
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

const mapStateToProps = state => {
	return {
		signingUp: state.signingUp
	};
};
export default connect(mapStateToProps, {signup})(RestaurantCreateAccountPage);