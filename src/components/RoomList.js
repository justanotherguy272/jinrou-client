import React from 'react'
import {Redirect, Link} from 'react-router-dom'
// import Room from './Room'
import CreateRoom from './CreateRoom'

export default class RoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: '',
      rooms: []
    };
    this.getRoom();
  }

  getRoom () {
    fetch('/rooms/')
      .then(res => res.json())
      .then(data => this.setState({rooms: data}))
      .catch(err => console.log(err));
  }

  renderRoomList() {
    if(!this.state.rooms) {
      return(
        <p>No room created!</p>
      )
    } else {
      let rooms = this.state.rooms;
      let mapped_room = rooms.map((room) =>
        <Link to={'/rooms/'+ room.id} key={room.id}>
          <div className="genric-btn primary-border circle m-2">
            Room {room.id}
          </div>
        </Link>
      );
      return mapped_room;
    }
  }

  render() {
    return (
      (this.state.redirect !== '') ? (
          <div>
            <Redirect to={{
              pathname: this.state.redirect,
              state: {}
            }}/>
          </div>
        ) : (
          <div>
            {this.renderRoomList()}
            <CreateRoom />
          </div>
        )
    )
  }
}