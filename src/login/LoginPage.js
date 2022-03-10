import React, {Component} from 'react';
import {LoginForm} from './LoginForm';
import AuthApi from '../api/authRepository';
import '../login/Login.css';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                username: '',
                password: '',
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
       // user.username = user.email;
        AuthApi.logIn(user)
            .then(r => {
                alert('BIENVENIDO '+user.username);
                
                this.props.history.push('/profile');
               
            }).catch(e => {
                alert('User no registrado!!!');
        });

    };

    onClick = (e) => {
            
                this.props.history.push('/crud');
    };

    render(){
        return (
            <div className="container">
                <LoginForm
                    user={this.state.user}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    onClick={this.onClick}
                />
            </div>
        );
    }

}

export default LoginPage;