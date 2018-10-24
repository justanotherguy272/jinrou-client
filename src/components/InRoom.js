import React from 'react';
import Role from './Role';

export default class InRoom extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: '',
      roles: []
    };
    this.getRole()
  }

  getRole() {
    fetch('/roles')
      .then(res => res.json())
      .then(data => this.setState({roles: data}))
      .catch(err => console.log(err));
  }

  renderRole() {
    if(!this.state.roles) {
      return(<p>No role</p>)
    } else {
      let roles = this.state.roles;
      return roles.map((role) =>
        <Role key={role.id} data={role}/>
      );
    }
  }

  render() {
    let a = this.props.location.pathname;
    let b = this.props.match.path;
    let s = a.replace(b, '')
    return (
      (this.state.redirect !== '') ? (
        <div>
        </div>
      ) : (
        <div>
          <p>You're in room {s}</p>
          {this.renderRole()}
        </div>
      )
    )
  }
}