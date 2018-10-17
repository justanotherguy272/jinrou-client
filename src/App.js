import React, {Component} from 'react';
import './App.css';
// import Home from './components/Home'
import Index from './components/Index'
import Login from './components/Login'
import SignUp from './components/SignUp'
import {Route, Link} from "react-router-dom";
import Header from './components/Header'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      user: ''
    };
  }

  componentDidMount() {
    console.log('checked!')
    this.checkSession()
  }

  checkSession() {
    fetch('/authen/session')
      .then(res => res.json())
      .then(data => {
        if(data.authenticated !== this.state.authenticated) {
          console.log('authen!' + data.authenticated);
          this.setState({authenticated: data.authenticated, user: data.user})
        }
      })
      .catch(err => console.log('err: ' + err));
  }

  // handleClick(e) {
  //   console.log(e.target);
  // }

  render() {
    return (
      <div className="App">
        <div className=''>
          <Header data={this.state}/>
          <Route exact={true} path='/' component={Index}/>
          <Route path='/login' component={Login}/>
          <Route path='/sign_up' component={SignUp}/>
        </div>
      </div>
    );
  }
}

export default App;
