import React from 'react';
import { Redirect } from 'react-router-dom';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    fetch('/authen/sign_up', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: document.getElementById('sign_up_username').value,
        password: document.getElementById('sign_up_password').value
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.user);
        this.setState({redirect: data.redirect_to})
      })
      .catch(err => console.log('error ' + err));
  }

  render() {
    return (
      (this.state.redirect !== '') ?
        ( <Redirect to={this.state.redirect}/>) :
        (
          <div>
            <h2>Sign Up Page</h2>
            <div className='container'>
              <div className="row">
                <div className="col align-self-center">
                  <form method="post" id="signup-form" onSubmit={this.handleClick}>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="text" className="form-control" name="email" id='sign_up_username'/>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" name="password" id='sign_up_password'/>
                    </div>
                    <button type="submit" className="btn btn-warning btn-lg">Sign Up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
    )
  }
}