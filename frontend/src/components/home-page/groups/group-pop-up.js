import { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import Input from "./input.js";

class GroupPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: 1,
      usernames: {},
      completed: false,
    };
    // binds this to function for use
    this.handleClose = this.handleClose.bind(this);
    this.addUser = this.addUser.bind(this);
    this.send = this.send.bind(this);
    this.userCallBack = this.userCallBack.bind(this);
  }

  handleClose() {
    this.setState({ usernames: {}, inputs: 1 });
    this.props.handleClose();
  }

  renderInputs() {
    let result = [];
    for (let i = 0; i < this.state.inputs; i++) {
      // to gurantee id values are unique
      result.push(<Input send={this.userCallBack} key={i} id={i} />);
    }
    return result;
  }

  async addUser() {
    await this.setState({ inputs: this.state.inputs + 1, completed: false });
  }

  async userCallBack(childData, key) {
    let users = { ...this.state.usernames };
    users[key] = childData;
    await this.setState({ usernames: users });
    console.log("in usercallback" + this.state.inputs);
    if (Object.keys(this.state.usernames).length === this.state.inputs) {
      this.setState({ completed: true });
    }
  }

  send() {
    this.userCallBack();
    this.handleClose();
    this.props.created(this.state.usernames);
    this.setState({ usernames: {}, inputs: 1 });
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Make a group with friends
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.renderInputs()}</Modal.Body>
        <Modal.Footer>
          <Button onClick={this.addUser}>Add User</Button>
          <Button disabled={!this.state.completed} onClick={this.send}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default GroupPopUp;
