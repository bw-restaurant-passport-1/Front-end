import React from 'react';
import useForm from 'react-hook-form';

import "../../styles/accountsPage.css"


import { signup } from '../../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Header, Button, Form,Grid,Segment, Message, Responsive,Container, Label } from 'semantic-ui-react';






const RestaurantCreateAccountPage = props => {
  const { register, handleSubmit, errors } = useForm();
 
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    props.signup(data).then(() => {
    	props.history.push('/dashboard');
    });
  };
  console.log(errors);


  return (
  
    <Grid columns="equal" divided className='register-page'>
      <Responsive
        maxWidth={400}
        as={Grid.Column}
        width={1}
      />

      <Responsive
        minWidth={400}
        maxWidth={600}
        as={Grid.Column}
        width={2}
      />
      
      <Responsive
        minWidth={600}
        as={Grid.Column}
        width={3}
      />

      <Grid.Column className="center" >

        <Container>
          <Header id="title" as="h1">Restaurant Passport Register</Header>
        </Container>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Field
            error = {errors.username ? {content: "Please enter your username", pointing: "below"}: null}
          >
            <label htmlFor="username">Username</label>
            <input
              className='inputs form-control'
              type='text'
              placeholder='Username'
              name='username'
              ref={register({ required: true, maxLength: 80 })}
            />
          </Form.Field>
          
          {/* { <p className='errors'>Username Required</p>} */}
          <Form.Field
            error={errors.password && {content: "Please enter your username", pointing: "below"}}
          >
            <label htmlFor="password">Password</label>
            <input
              className='inputs form-control'
              type='password'
              placeholder='Password'
              name='password'
              ref={register({ required: true, max: 8 })}
            />
            {/* {errors.password && <p className='errors'>Password Required</p>} */}
          </Form.Field>
          
          <Form.Field
            error={errors.name && {content: "Please enter your name", pointing: "below"}}
          >
            <label htmlFor="name">Name</label>
            <input
              className='inputs form-control'
              type='text'
              placeholder='Name'
              name='name'
              ref={register({ required: true })}
            />

          </Form.Field>

          <Form.Field
            error={errors.city && {content:"City Required", pointing: "below"}}
          >
            <label htmlFor="city">City</label>
            <input
              className='inputs form-control'
              type='text'
              placeholder='City'
              name='city'
              ref={register({ required: true })}
            />
          </Form.Field>
          
          
          <Form.Field
            error={errors.email && {content: "Email Required", pointing: "below"}}
          >
            <label htmlFor="email">Email</label>
            <input
              className='inputs form-control'
              type='email'
              placeholder='Email'
              name='email'
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
          </Form.Field>
          
          <Container textAlign="center">
            <Button color="yellow" disabled={props.signingUp} type="submit">{props.signingUp ? "Registering..." : "Register"}</Button>
          </Container>
        </Form>

        <Segment textAlign="center" className="accounts_link">
          <p>Already have an account with Restaurant Passport?</p>
          <Link className='inputs' to='/'>
            Sign in here
          </Link>
        </Segment>
        
      </Grid.Column>


      <Responsive
        maxWidth={400}
        as={Grid.Column}
        width={1}
      />

      <Responsive
        minWidth={400}
        maxWidth={600}
        as={Grid.Column}
        width={2}
      />
      
      <Responsive
      minWidth={600}
        as={Grid.Column}
        width={3}
      />

    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    signingUp: state.signingUp
  };
};
export default connect(mapStateToProps, { signup })(
  RestaurantCreateAccountPage
);
