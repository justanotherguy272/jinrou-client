import React from 'react'

export default class Login extends React.Component {
    render() {
        return(
            <div>
                <p>Login page</p>
                <div className='container'>
                    <div className="row">
                        <div className="col align-self-center">
                            <form method="post" id="login-form" onSubmit={this.props.onLoginSubmit(this)}>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" className="form-control" name="email" id='login_username'/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" name="password" id='login_password'/>
                                </div>
                                <button type="submit" className="btn btn-warning btn-lg">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}