import React from 'react'
import RoomList from './RoomList'
import LoginButton from './LoginButton'
import Login from './Login'

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.onClickRoom = this.onClickRoom.bind(this)
        this.onClickLogin = this.onClickLogin.bind(this)
        this.state = {
            curr_view: 'home',
            room: '',
            user: '',
            logged_in: false,
            messages: ''}
    }

    onClickRoom(e) {

    }

    onClickLogin(e) {
        console.log('aa');
        function getMessage() {
            fetch('/authen/login')
                .then(res => res.json())
                .then(data => data.messages)
        }
        this.setState({curr_view: 'login', messages: getMessage()})
    }

    render() {
        return (

            <div>
                {this.state.curr_view === 'home' ? (
                    <LoginButton handleClick={this.onClickLogin()} />) : (
                        <Login data={this.state}/>
                )}
                {this.state.curr_view === 'home' &&
                    <RoomList data={this.state}/>
                }
            </div>

        )
    }
}