import React from 'react'

export default class Login extends React.Component {
    render() {
        return(
            <div>
                <p>Login page</p>
                <p>
                    {this.props.messages}
                </p>
            </div>
        )
    }
}