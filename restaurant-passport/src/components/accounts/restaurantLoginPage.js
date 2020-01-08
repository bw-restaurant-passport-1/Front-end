import React from 'react';
import useForm from 'react-hook-form';
import styled from 'styled-components';
import { login } from '../../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const Titles = styled.div`
  font-family: 'Girassol', cursive;
`;

const RestaurantLoginPage = props => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    props.login(data).then(() => props.history.push('/dashboard'));
  };
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
          <input className='inputs buttons' type='submit' />
        </form>
        <Link className='inputs' to='/register'>
          <p> New to Restaurant Passport? Sign up here. </p>
        </Link>
      </div>
    </Titles>
  );
};

const mapStateToProps = state => {
  return {
    loggingIn: state.loggingIn
  };
};

export default connect(mapStateToProps, { login })(RestaurantLoginPage);
