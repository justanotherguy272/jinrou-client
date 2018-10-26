import React from 'react'
import {Input, Grid, Transition, Form, Button, Modal} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'

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
    let room_capacity = document.getElementById('create_room_form_room_capacity').value;
    let room_password = null;
    if(checked) {
      room_password = document.getElementById('create_room_form_room_password').value;
    }
    if(!room_capacity) room_capacity = 5;

    this.setState({create_room_button_loading: true})
    fetch('/rooms/create', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: room_name,
        password: room_password,
        capacity: room_capacity
      })
    })
      .then(data => data.json())
      .then(data => this.setState({redirect: data.redirect}))
      .catch(err => console.log(err.json()));
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
      (this.state.redirect !== '') ? (<Redirect to={this.state.redirect} />) : (
      <div>
        <button onClick={() => this.onTriggerCreateRoom()}
                className='genric-btn primary-border circle'>
          Create Room
        </button>

        <Modal size='mini'
               open={this.state.create_room_visible}
               className='m-auto'
               style={{height: '40vh', minHeight: '250px'}}
               onClose={() => this.onCloseModal()}>
          <Modal.Header>Create Room Option</Modal.Header>
          <Modal.Content>
            <Form size='tiny'>
              <Form.Group inline={false}>
                <Form.Field width={8}>
                  <Form.Input
                    label='Room name'
                    id='create_room_form_room_name'
                    placeholder='Input name'/>
                </Form.Field>

                <Form.Field width={8}>
                  <Form.Input
                    label='Capacity'
                    id='create_room_form_room_capacity'
                    placeholder='Input capacity'
                    type='number'
                    min={3}
                  />
                </Form.Field>
              </Form.Group>

              <Form.Group>
                <Form.Checkbox
                  onChange={() => this.showPassword()}
                  id='create_room_form_has_password'
                  label='Has Password'/>
                <Form.Field disabled={this.state.unchecked} width={10}>
                  <Form.Input
                    type='password'
                    id='create_room_form_room_password'/>
                </Form.Field>
              </Form.Group>
              <Form.Button onClick={() => this.onCreateRoom()} loading={this.state.create_room_button_loading}
                           style={{width: '100%'}}>
                Create
              </Form.Button>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
      )
    )
  }
}