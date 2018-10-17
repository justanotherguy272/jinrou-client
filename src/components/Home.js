import React from 'react'
import RoomList from './RoomList'
import LoginButton from './LoginButton'
import Login from './Login'
import Signup from './SignUp'
import SignupButton from "./SignupButton";
import Header from './Header';
import InRoom from './InRoom';
import Profile from './Profile'

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.onClickLogin = this.onClickLogin.bind(this);
        this.onClickSignup = this.onClickSignup.bind(this);
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
        this.onSignupSubmit = this.onSignupSubmit.bind(this);
        this.onClickRoom = this.onClickRoom.bind(this);
        this.state = {
            curr_view: 'home',
            room: '',
            user: '',
            logged_in: false,
            messages: ''}
    };

    onLoginSubmit(e) {
        e.preventDefault();
        let email = document.getElementById('login_username').value;
        let password = document.getElementById('login_password').value;
        console.log('email' + email + 'pass' + password);
        // this.setState({logged_in: true, curr_view: 'home', user: '1'});
        // fetch('/authen/logging_in', {
        //     method: 'post',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         email: email,
        //         password: password
        //     })
        // })
        //     .then(res => console.log(res));
            // .then(res => res.json())
            // .then(data => console.log(data.email));
    };

    onSignupSubmit(e) {
        e.preventDefault();
        let name = document.getElementById('signup_username').value;
        let password = document.getElementById('signup_password').value;
        console.log('Sign Up With Email: ' + name + ' and password ' + password);
        // this.setState({logged_in: true, curr_view: 'home', user: '1'});
        fetch('/authen/signing_up', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                password: password
            })
        })
            .then(res => res.json())
            .then(data => this.setState({curr_view: data.curr_view, logged_in: data.logged_in, user: data.user}))
    };

    onClickLogin(e) {
        // fetch('/authen/login')
        //     .then(res => res.json())
        //     .then(data => this.setState({ messages: data.messages, curr_view: 'login'}));
        this.setState({curr_view: 'login-page'});
    };

    onClickSignup(e) {
        fetch('/authen/signup')
            .then(res => res.json())
            // .then(data => console.log(data.curr_view))
            .then(data => this.setState({curr_view: data.curr_view}));
        // this.setState({curr_view: 'sign-up-page'});
    };

    onClickRoom = (id) => {
        console.log(id);
        this.setState({curr_view: 'room', room: id})
    };

    onClickMenu = (view) => {
        switch(view) {
            case 'home':
                this.setState({curr_view: 'home'});
                break;
            case 'profile':
                this.setState({curr_view: 'profile'});
                break;
            case 'logout':
                this.setState({curr_view: 'home', logged_in: false});
                break;
            default:
                break;
        }
    };

    switchView(state) {
        switch(state.curr_view) {
            case 'home':
                return (
                    state.logged_in ?
                        (
                            <div>
                                <p className='text-left'>Hello, {this.state.user.name}</p>
                                <RoomList handleClickRoom={this.onClickRoom}/>
                            </div>

                        ) : (
                            <div>
                                <LoginButton handleClick={() => this.onClickLogin()} />
                                <SignupButton handleClick={() => this.onClickSignup()}/>
                            </div>
                        )
                );
            case 'sign-up-page':
                return (
                    <Signup data={this.state} onSignupSubmit={() => this.onSignupSubmit}/>
                );
            case 'login-page':
                return (
                    <Login data={this.state} onLoginSubmit={() => this.onLoginSubmit}/>
                );
            case 'room':
                return (
                    <InRoom data={this.state}/>
                );
            case 'profile':
                return (
                  <Profile data={this.state}/>
                );
            default:
                return null;
        }
    }

    render() {
        return (
            <div className='dup-body-wrap'>
                <header className="default-header">
                    <Header data={this.state} onClick={this.onClickMenu}/>
                </header>

                <section className="section" style={{'padding': '70px 10px 20px'}}>
                    <div>
                        {this.switchView(this.state)}
                    </div>
                </section>

                <footer className="site-footer">
                </footer>
            </div>

        )
    }
}