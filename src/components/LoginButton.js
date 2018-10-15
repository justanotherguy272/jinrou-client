import React from 'react'

export default class LoginButton extends React.Component {
    render() {
        return (
            <button className='genric-btn primary-border circle m-1'
                onClick={this.props.handleClick}>
                Login
            </button>
        )
    }
}