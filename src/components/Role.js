import React from 'react'

export default class Role extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        {this.props.data.name}
      </div>
    )
  }
}