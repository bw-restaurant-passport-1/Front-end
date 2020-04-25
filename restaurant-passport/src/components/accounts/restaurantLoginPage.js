import React from 'react';
import useForm from 'react-hook-form';
// import styled from 'styled-components';
import { login } from '../../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { axiosWithAuth } from '../../utils/axiosWithAuth';

import "../../styles/accountsPage.css"

import { Header, Button, Form,Grid,Segment, Message, Responsive,Container, Label } from 'semantic-ui-react'



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
    
    <Grid columns="equal" divided className="login-page" >

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
      
        <Container textAlign="center">
          <Header id='title' as="h1">Restaurant Passport Sign-In</Header>
        </Container>
        <Form loading ={props.loggingIn} onSubmit={handleSubmit(onSubmit)}>
          <Form.Field
            error= { errors.username && {content: "Please enter your Username.", pointing: "below"}}
            
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
            error= {errors.password && true}
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


          <Container textAlign="center">
            <Button color="yellow" type="submit">{props.loggingIn ? "Signing In..." : "Sign In"}</Button>
          </Container>
        </Form>

        <Segment textAlign="center" className="accounts_link">
          <p>New to Restaurant Passport?</p>
          <Link className='inputs' to='/register'>
            Sign up here
          </Link>  
        </Segment>



        {props.error.message ? <Message negative  content="Invalid Credentials"/> : null}
        
        {console.log(props.error)}
        
      
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
    loggingIn: state.loggingIn,
    user: state.user,
    error: state.error,
  };
};

export default connect(mapStateToProps, { login })(RestaurantLoginPage);
