import React from 'react';
import Role from './Role';
import io from 'socket.io-client';
import UserList from './UserList';

export default class InRoom extends React.Component {
  constructor(props){
    super(props);
    let a = this.props.location.pathname;
    let b = this.props.match.path;
    let id = a.replace(b, '');
    this.state = {
      redirect: '',
      roles: [],
      selected_roles: [],
      capacity: '',
      leader_id: '',
      users: [],
      state: '',
      id: id,
      socket_id: null,
      current_user: this.props.user,
      noti: null
    };

    this.socket = null;
    this.getRoomData();
    this.getRole();
    this.toggleRole = this.toggleRole.bind(this);
  }

  componentWillMount() {
    this.socket = io('localhost:4000');
    this.socket.on('id', (res) => {
      this.setState({socket_id: res});
      this.socket.emit('welcome', "hello i'm" + this.state.current_user.name)
    });

    this.socket.on('noti', res => {
      this.setState({noti: res})
    })
  }

  getRoomData() {
    fetch('/rooms/' + this.state.id)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          leader_id: data.room[0].leader_id,
          capacity: data.room[0].capacity,
          state: data.room[0].is_active,
          users: data.users
        })
      })
      .catch(err => console.log(err));
  }

  getRole() {
    fetch('/roles')
      .then(res => res.json())
      .then(data => this.setState({roles: data}))
      .catch(err => console.log(err));
  }

  toggleRole(id, checked) {
    let new_roles  = this.state.selected_roles;
    if(checked) {
      new_roles.push(id)
    } else {
      new_roles.splice( new_roles.indexOf(id), 1 );
    }
    this.setState({selected_roles: new_roles});
  }

  renderRole() {
    if(!this.state.roles) {
      return(<p>No role</p>)
    } else {
      let roles = this.state.roles;
      return roles.map((role) =>
        <Role key={role.id} data={role} clickHandle={(id, checked) => this.toggleRole(id, checked)}/>
      );
    }
  }

  startGame() {
    fetch('game_create', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        room_id: this.state.id,
        roles: this.state.selected_roles,
      })
    })
  }

  render() {
    return (
      (this.state.redirect !== '') ? (
        <div>
        </div>
      ) : (
        <div>
          <div onClick={this.startGame.bind(this)} className="btn btn-primary">Start</div>
          <p>You're in room {this.state.id}</p>
          <p>Capacity: {this.state.room_data}</p>
          {this.renderRole()}
          <UserList user={this.state.users} />
          Log:
          <p>{this.state.noti}</p>
        </div>
      )
    )
  }
}