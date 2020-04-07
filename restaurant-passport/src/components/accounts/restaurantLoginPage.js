import React from 'react';
import useForm from 'react-hook-form';
import styled from 'styled-components';
import { login } from '../../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { axiosWithAuth } from '../../utils/axiosWithAuth';

import "../../styles/accountsPage.css"

import { Header, Button, Form,Grid,Segment, Message } from 'semantic-ui-react'


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
  console.log("props",props);
  console.log("error", errors)
  

  return (
    <Grid columns="equal" className="login-page">
      <Grid.Column></Grid.Column>
      <Grid.Column width={8}>
      
        <Header id='title' as="h1">Restaurant Passport Sign-In!</Header>

        <Form loading ={props.loggingIn}className='forms2' onSubmit={handleSubmit(onSubmit)}>
          <Form.Field
            error= { errors.username}
            
          >
            <label id="label">Username</label>
            <input
              className='inputs form-control'
              type='text'
              placeholder={`Username ${errors.username ?  "Required" : ""}`}
              // {`rating ${ ratingDisplay === 5 && "checked"}`}
              name='username'
              ref={register({ required: true, maxLength: 80 })}
            />
          </Form.Field>
          
          <Form.Field
            error= {errors.password}
          >
            <label id="label">Password</label>
            <input
              className='inputs form-control'
              type='password'
              placeholder={`Password ${errors.password ?  "Required" : ""}`}
              name='password'
              ref={register({ required: true, max: 8 })}
            />
          </Form.Field>

          <Message
            error
            header='Action Forbidden'
            content='You can only sign up for an account once with a given e-mail address.'
          />

          <Button basic loading={props.loggingIn} type="submit">{props.loggingIn ? "Signing In..." : "Sign In"}</Button>
        </Form>
        <Link className='inputs' to='/register'>
          <p> New to Restaurant Passport? Sign up here. </p>
        </Link>
      
      </Grid.Column>
      <Grid.Column></Grid.Column>

    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    loggingIn: state.loggingIn,
	user: state.user
  };
};

export default connect(mapStateToProps, { login })(RestaurantLoginPage);
