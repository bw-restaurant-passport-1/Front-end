import React, {Component} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

class PassportRegister extends Component {
    state = {
        register: {
        username: '',
        password: '',
        name: '',
        city: '',
        email: ''
        }
    }
    handleChange = e => {
        this.setState({
            ...this.state.register,
            [e.target.name]: e.target.value
        })
    }; //end handleChange

    registerHandler = e => {
        e.preventDefault();
        axiosWithAuth() 
        .post('', this.state.register)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/dashboard')
        })
        .catch(err => console.log(err.message))
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
export default PassportRegister;