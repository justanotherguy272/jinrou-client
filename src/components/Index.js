import React from 'react'

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
    // fetch('/')
    //     .then(res => this.setState({}))
  }

  render() {
    return (
      <div style={{background: '#befff7', height: '100px', width: '100%'}}>
        Hello, world
      </div>
    )
  }
}