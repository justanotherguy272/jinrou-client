import React from 'react'
import {Input, Grid, Transition, Form, Button, Modal} from 'semantic-ui-react'
export default class CreateRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: '',
      unchecked: true,
      create_room_visible: false,
      create_room_button_loading: false
    }
  }

  onCreateRoom() {
    let room_name = document.getElementById('create_room_form_room_name').value;
    let checked = document.getElementById('create_room_form_has_password').checked;
    let room_password = null;
    if(checked) {
      room_password = document.getElementById('create_room_form_room_password').value;
    }
    this.setState({create_room_button_loading: true})
    fetch('/rooms/create', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: room_name,
        password: room_password
      })
    })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  onTriggerCreateRoom() {
    this.setState({create_room_visible: true});
  }

  onCloseModal() {
    this.setState({create_room_visible: false});
  }

  showPassword() {
    let checked = document.getElementById('create_room_form_has_password').checked;
    this.setState({unchecked: !checked})
  }

  render() {
    return (
      <div>
        <button onClick={() => this.onTriggerCreateRoom()}
              className='genric-btn primary-border circle'>
          Create Room
        </button>

        <Modal size='mini'
               open={this.state.create_room_visible}
               className='m-auto'
               style={{height: '200px'}}
               onClose={() => this.onCloseModal()}>
          <Modal.Header>Create Room Option</Modal.Header>
          <Modal.Content>
            <Form size='tiny'>
              <Form.Group widths='3' inline={false}>
                <Form.Field width={6}>
                  <label>Room name</label>
                  <Input
                    id='create_room_form_room_name'
                    placeholder='Input name'/>
                </Form.Field>
                <Form.Checkbox
                  onChange={() => this.showPassword()}
                  id='create_room_form_has_password'
                  label='Has Password'/>
                <Form.Field disabled={this.state.unchecked} width={4}>
                  <label>Password</label>
                  <Input
                    type='password'
                    id='create_room_form_room_password'/>
                </Form.Field>
              </Form.Group>
              <Button onClick={() => this.onCreateRoom()} loading={this.state.create_room_button_loading}>
                Create
              </Button>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}