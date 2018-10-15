import React from 'react'

export default class Profile extends React.Component {
    render () {
        return (
            <div>
                Profile
                <p>User: </p>
                <p>View: {this.props.data.curr_view}</p>
            </div>

        )
    }
}