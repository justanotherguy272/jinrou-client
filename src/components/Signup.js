import React from 'react'

export default class Signup extends React.Component {
    render() {
        return(
            <div>
                <p>Sign Up Page</p>
                <div className='container'>
                    <div className="row">
                        <div className="col align-self-center">
                            <form method="post" id="signup-form" onSubmit={this.props.onSignupSubmit(this)}>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" className="form-control" name="email" id='signup_username'/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" name="password" id='signup_password'/>
                                </div>
                                <button type="submit" className="btn btn-warning btn-lg">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}