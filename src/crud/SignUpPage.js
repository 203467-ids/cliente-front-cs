import React, {Component} from 'react';
import {SignUpForm} from './SignUpForm';
import post from '../api/authRepository';
import './SignUp.css';

class SignUpPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                first_name:'',
                last_name:'',
                username: '',
                email: '',
                password: '',
                password2: '',
            }
        };
    }

    onChange = (e) => {
        let user = Object.assign({},this.state.user);
        user[e.target.name] = e.target.value;
        this.setState({user});
    }; 

    onSubmit = (e) => {
        e.preventDefault();
        const user = Object.assign({},this.state.user);
        user.password = user.password2;
        post.newPost(user)
        .then(r => {
            alert('Usuario creado');
            this.props.history.push('/');
        }).catch(e => {
            alert('Error al crear usuario');
        });

    }

    render(){
        return (
            <div className="container">
                <SignUpForm
                    user={this.state.user}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }

}

export default SignUpPage;