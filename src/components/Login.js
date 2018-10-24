import React from 'react'
import {Redirect} from 'react-router-dom'
import {Grid} from 'semantic-ui-react'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    fetch('/authen/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: document.getElementById('login_username').value,
        password: document.getElementById('login_password').value
      })
    })
      // .then(res => this.setState({redirect: res.json().redirect_to}))
      .then(res => res.json())
      .then(data => {
        this.setState({redirect: data.redirect_to});
      })
      .catch(err => console.log('error ' + err));

  }

  render() {
    return (
      (this.state.redirect !== '') ? (<Redirect to={{
          pathname: this.state.redirect,
          state: { sessionChecked: false },
        }} />) :
        (
          <Grid centered columns={2}>
            <Grid.Column>
              <div onClick={this.handleClick}>
                <h2 className='text-center'>Login Page</h2>
                <div className="row">
                  <div className="col align-items-center">
                    <form method="post" id="login-form" onSubmit={this.handleClick}>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email" id='login_username'/>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" id='login_password'/>
                      </div>
                      <button type="submit" className="btn btn-warning btn-lg w-100">Login</button>
                    </form>
                  </div>
                </div>
              </div>
            </Grid.Column>
          </Grid>
        )
    )
  }
}