import React from 'react';

export default class InRoom extends React.Component {
    render () {
        return (
            <div>
                <p>You're in room {this.props.data.room}</p>
            </div>
        )
    }
}