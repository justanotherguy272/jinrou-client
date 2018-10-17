import React from 'react'
import {Route, Link} from 'react-router-dom'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.homeMenu = this.homeMenu.bind(this);
  }

  // onClickProfile = () => {
  //   // this.props.onClick('profile');
  // };
  homeMenu() {
    console.log('in header' + this.state.authenticated);
    switch(this.state.authenticated) {
      case true:
        console.log('in logged');
        return (
          <div>
            <Link to='/profile'>
              <span>Profile</span>
            </Link>

            <Link to='/logout'>
              <span>Logout</span>
            </Link>
          </div>
        )
      case false:
        return (
          <div>
            <Link to='/login'>
              <span>Login</span>
            </Link>

            <Link to='/sign_up'>
              <span>Sign Up</span>
            </Link>
          </div>
        )
      default:
    }
  }

  render() {
    return (
      <div className="header-wrap">
        <div className="header-top d-flex justify-content-between align-items-center m-2">
          <div className="logo ml-2">
            <span style={{fontSize: '2em', color: 'black'}}>Jinrou</span>
          </div>
          <div className="main-menubar d-flex align-items-center">
            <nav>
              <Route exact={true} path='/' render={this.homeMenu}/>

              <Route exact={true} path='/login' render={() => (
                <div>
                  <Link to='/'><span>Home</span></Link>
                  <Link to='/sign_up'><span>Sign Up</span></Link>
                </div>
              )}/>

              <Route exact={true} path='/sign_up' render={() => (
                <div>
                  <Link to='/'><span>Home</span></Link>
                  <Link to='/login'><span>Login</span></Link>
                </div>
              )}/>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}