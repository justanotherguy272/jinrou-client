import React from 'react'
import { Redirect } from 'react-router-dom'

export default class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.logout();
  }

  logout() {
    fetch('/authen/logout')
  }

  render() {
      return (
        (1 ? (
        <Redirect to={{
          pathname: '/',
          state: {sessionChecked: false}
        }} />
      ) : ('')))
  }
}