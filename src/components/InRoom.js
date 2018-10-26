import React from 'react';
import Role from './Role';

export default class InRoom extends React.Component {
  constructor(props){
    super(props);
    let a = this.props.location.pathname;
    let b = this.props.match.path;
    let id = a.replace(b, '');
    this.state = {
      redirect: '',
      roles: [],
      capacity: '',
      leader_id: '',
      users: [],
      state: '',
      id: id
    };

    this.getRoomData();
    this.getRole();
  }

  getRoomData() {
    fetch('/rooms/' + this.state.id)
      .then(res => res.json())
      .then(data => this.setState({
        leader_id: data.room[0].leader_id,
        capacity: data.room[0].capacity,
        state: data.room[0]
      }))
      .catch(err => console.log(err));
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
    return (
      (this.state.redirect !== '') ? (
        <div>
        </div>
      ) : (
        <div>
          <p>You're in room {this.state.id}</p>
          <p>Capacity: {this.state.room_data}</p>
          {this.renderRole()}
        </div>
      )
    )
  }
}