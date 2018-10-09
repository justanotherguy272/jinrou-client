import React from 'react'

export default class CreateRoom extends React.Component {
    onCreateRoom() {
        console.log('Create Room Clicked');
    }

    render() {
        return(
            <div>
                <button onClick={this.onCreateRoom.bind(this)}>
                    Create Room
                </button>
            </div>
        )
    }
}