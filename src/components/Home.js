import React from 'react'
import RoomList from './RoomList'
import LoginButton from './LoginButton'
import Login from './Login'

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.onClickLogin = this.onClickLogin.bind(this);
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
        this.state = {
            curr_view: 'home',
            room: '',
            user: '',
            logged_in: false,
            messages: ''}
    }

    onLoginSubmit(e) {
        e.preventDefault();
        let email = document.getElementById('login_username').value;
        let password = document.getElementById('login_password').value;
        fetch('/authen/logging_in', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(res => res.json())
            .then(data => console.log(data.email));
    }

    onClickLogin(e) {
        fetch('/authen/login')
            .then(res => res.json())
            .then(data => this.setState({ messages: data.messages, curr_view: 'login'}));
    }

    render() {
        return (

            <div>
                {this.state.curr_view === 'home' ? (
                    <LoginButton handleClick={() => this.onClickLogin()} />) : (
                        <Login data={this.state} onLoginSubmit={() => this.onLoginSubmit}/>
                )}
                {this.state.curr_view === 'home' &&
                    <RoomList data={this.state}/>
                }
            </div>

        )
    }
}