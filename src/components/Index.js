import React from 'react'
import RoomList from './RoomList'
// import {Route} from 'react-router-dom'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      logged_in: '',
      curr_view: ''
    }
  }

  componentWillMount() {
    if(this.props.location.state) {
      this.props.sessionCheck();
    }
  }

  renderView() {
    if(this.props.data.authenticated) {
      return (
        <div>
          <RoomList />
        </div>
      )
    } else {
      return (
        <div>
          Welcome
        </div>
      )
    }
  }

  render() {
    return(
      this.renderView()
    )
  }
}