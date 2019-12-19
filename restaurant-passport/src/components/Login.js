import React, {Component} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

class PassportLogin extends Component {
    state = {
        isLoading: false,
        credentials: {
            username: '',
            password: ''
        } //end state
    }
    handleChange = e => {
        this.setState({
            ...this.state.credentials,
            [e.target.name]: e.target.value
        })
    }; //end handleChange

    loginHandler = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/dashboard')
        })
        .catch(err => console.log(err.response))
    } //end login event
    render() {
        return (
            <div></div>
        )
    }
}// End PassportLogin 

export default PassportLogin;
