import React, { Component } from 'react';
//import { axiosWithAuth } from '../utils/axiosWithAuth';
import { login } from '../actions/index';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

class PassportLogin extends Component {
  state = {
    isLoading: false,
    credentials: {
      username: '',
      password: ''
    } //end state
  };
  handleChange = e => {
    this.setState({
      ...this.state.credentials,
      [e.target.name]: e.target.value
    });
  }; //end handleChange

  loginHandler = e => {
    e.preventDefault();
    axios
      .post('', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/dashboard');
      })
      .catch(err => console.log(err.response));
  }; //end login event
  render() {
    return (
      <>
        <div>
          <form className='form container' onSubmit={this.login}>
            <h2 className='text-warning'>BookR</h2>

            <input
              type='text'
              onChange={this.handleChange}
              name='username'
              placeholder='username'
              className='input'
              value={this.state.credentials.username}
              required
            />
            <input
              type='password'
              onChange={this.handleChange}
              name='password'
              placeholder='password'
              className='input'
              value={this.state.credentials.password}
              required
            />
            <button className='btn btn-primary'>LogIn</button>

            <p>
              Not registered?
              <Link to='/signup'>
                {' '}
                <span className='account'>Create an account</span>{' '}
              </Link>
            </p>
          </form>
        </div>
      </>
    );
  }
} // End PassportLogin

export default PassportLogin;
