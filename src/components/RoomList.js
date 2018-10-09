import React from 'react'
import Room from './Room'
import CreateRoom from './CreateRoom'

export default class RoomList extends React.Component {
    render() {
        let rooms = [{id: 1}, {id: 2}, {id: 3}]
        let mapped_room = rooms.map((room) =>
            <Room key={room.id} from={'room-list'}room={room} />
        );

        return (
            <div>
                {mapped_room}
                <CreateRoom />
            </div>
        )
    }
}