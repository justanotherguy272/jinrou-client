import React from 'react'
import { Checkbox } from 'semantic-ui-react';

export default class Role extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  onClickCheckbox(event, data) {
    this.props.clickHandle(data.id, data.checked)
  }

  render() {
    return (
      <Checkbox id={this.props.data.id} label={this.props.data.name} onClick={(event, data) => this.onClickCheckbox(event, data)}/>
    )
  }
}