import React from 'react';
import useForm from 'react-hook-form';
import styled from 'styled-components';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { signup } from '../../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Titles = styled.h1`font-family: 'Girassol', cursive;`;

const RestaurantCreateAccountPage = (props) => {
	const { register, handleSubmit, errors } = useForm();
	//REACT II LOOK AT THIS NOT SURE WHICH ONE IS THE ONE YOU WANT.
	const onSubmit = (data, e) => {
		e.preventDefault();
		axiosWithAuth().post('api/users/register', data).then((res) => {
			console.log(res.data);
			localStorage.setItem('token', res.data.token);
			props.history.push('/dashboard');
		});
		console.log(data);
	};
	// const onSubmit = (data) => {
	// 	console.log(data);
	// 	props.register(data).then(() => {
	// 		props.history.push('/dashboard');
	// 	});
	// };
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
						name='username'
						ref={register({ required: true, maxLength: 80 })}
					/>
					{errors.username && <p className='errors'>Username Required</p>}
					<input
						className='inputs form-control'
						type='password'
						placeholder='Password'
						name='password'
						ref={register({ required: true, max: 8 })}
					/>
					{errors.password && <p className='errors'>Password Required</p>}

					<input
						className='inputs form-control'
						type='text'
						placeholder='Name'
						name='name'
						ref={register({ required: true })}
					/>
					{errors.name && <p className='errors'>Name Required</p>}
					<input
						className='inputs form-control'
						type='text'
						placeholder='City'
						name='city'
						ref={register({ required: true })}
					/>
					{errors.city && <p className='errors'>City Required</p>}

					<input
						className='inputs form-control'
						type='email'
						placeholder='Email'
						name='email'
						ref={register({ required: true, pattern: /^\S+@\S+$/i })}
					/>
					{errors.email && <p className='errors'>Email Required</p>}
					<input className='inputs buttons' type='submit' />
				</form>
				<Link className='inputs' to='/'>
					<p> Already have an accout with Restaurant Passport? Sign in here.</p>
				</Link>
			</div>
		</Titles>
	);
};

const mapStateToProps = (state) => {
	return {
		signingUp : state.signingUp,
	};
};
export default connect(mapStateToProps, { signup })(RestaurantCreateAccountPage);