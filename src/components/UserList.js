import React from 'react';
import {Link} from "react-router-dom";

export default class UserList extends React.Component {
  constructor(props) {
    super(props);

  }

  renderUserList() {
    if(!this.props.user) {
      return(
        <p>No room created!</p>
      )
    } else {
      let users = this.props.user;
      return users.map((user) =>
        <div key={user.id}>{user.name}</div>
      );
    }
  }

  render() {
    return (
      <div>
        Users list:
        {this.renderUserList()}
      </div>
    )
  }
}