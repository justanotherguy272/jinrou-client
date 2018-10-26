import React, {Component} from 'react';
import './App.css';
// import Home from './components/Home'
import Index from './components/Index'
import Login from './components/Login'
import SignUp from './components/SignUp'
import {Route} from "react-router-dom";
import Header from './components/Header'
import Logout from './components/Logout'
import InRoom from "./components/InRoom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      user: '',
      sessionChecked: false
    };
    this.checkSession = this.checkSession.bind(this);
  }

  componentWillMount() {
    this.checkSession()
  }

  checkSession() {
    fetch('/authen/session')
      .then(res => res.json())
      .then(data => {
        if(data.authenticated !== this.state.authenticated) {
          this.setState({authenticated: data.authenticated, user: data.user, sessionChecked: true});
        } else {
          this.setState({sessionChecked: true})
        }
      })
      .catch(err => console.log('err: ' + err));
  }

  render() {
    if(this.state.sessionChecked) {
      return (
        <div className="App">
          <div className=''>
            <Header data={this.state} />
            <Route exact={true} path='/' render={(props) => <Index {...props}
              data={this.state} sessionCheck={() => this.checkSession()}/>} />
            <Route path='/login' component={Login}/>
            <Route path='/sign_up' component={SignUp}/>
            <Route path='/logout' component={Logout}/>
            <Route path='/room/' component={InRoom}/>
          </div>
        </div>
      );
    } else {
      return (
        <p>loading</p>
      )
    }
  }
}

export default App;
