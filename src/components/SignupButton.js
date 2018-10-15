import React from 'react'

export default class SignupButton extends React.Component {
    render() {
        return (
            <button className='genric-btn primary-border circle m-1'
                onClick={this.props.handleClick}>
                Sign Up
            </button>
        )
    }
}