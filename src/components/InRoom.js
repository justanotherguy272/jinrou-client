import React from 'react';

export default class InRoom extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: ''
    }
  }

  render() {
    console.log(this.props)
    return (
      (this.state.redirect !== '') ? (
        <div>

        </div>
      ) : (
        <div>
          <p>You're in room </p>
        </div>
      )
    )
  }
}