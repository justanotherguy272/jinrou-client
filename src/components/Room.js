import React from 'react'

export default class Room extends React.Component {
    // constructor(props){
    //     super(props)
    //     // this.onClickRoom = this.onClickRoom.bind(this)
    // }

    // onClickRoom(id) {
    //     // let url = new URL("http://localhost:3000/users"),
    //     //     params = {id: 1}
    //     // Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    //     fetch('/rooms/' + id)
    //         .then(res => res.json())
    //         .then(data => console.log(data.messages))
    // }

    onClickRoom = () => {
        this.props.handleClick(this.props.room.id);
    }

    render() {
        return(
            <div>
                <button className="genric-btn primary-border circle m-2"
                    onClick={this.onClickRoom}>
                    Room {this.props.room.id}
                </button>
            </div>
        )
    }
}