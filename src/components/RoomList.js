import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import Room from './Room'
import CreateRoom from './CreateRoom'

export default class RoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: ''
    }
  }

  render() {
    let rooms = [{id: 1}, {id: 2}, {id: 3}]
    let mapped_room = rooms.map((room) =>
      <Link to={'/rooms/'+ room.id} key={room.id}>
        <div className="genric-btn primary-border circle m-2">
          Room {room.id}
        </div>
      </Link>
    );

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
            {mapped_room}
            <CreateRoom/>
          </div>
        )
    )
  }
}