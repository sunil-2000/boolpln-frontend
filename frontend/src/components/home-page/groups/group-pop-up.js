import { Component } from "react";
import { Modal, Button, FormControl, InputGroup } from "react-bootstrap";
import Input from "./input.js";

// redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import createGroup from "../../../redux/middleware/groups/createGroup";
import sendInvite from "../../../redux/middleware/groups/sendInvite";
import {
  getCurrentGroup,
  getPendingStatus,
} from "../../../redux/reducers/groupApiReducer";
import { clearGroupMembers } from "../../../redux/actions/groupApiActions.js";

class GroupPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: 1,
      usernames: {},
      completed: false,
      confirmName: false,
      name: "",
      groupID: null,
      pending: this.props.pending,
    };
    // binds this to function for use
    this.handleClose = this.handleClose.bind(this);
    this.addUser = this.addUser.bind(this);
    this.send = this.send.bind(this);
    this.userCallBack = this.userCallBack.bind(this);
    this.groupConfirm = this.groupConfirm.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleClose() {
    this.setState({ usernames: {}, inputs: 1 });
    this.props.handleClose();
    console.log(this.props);
    this.props.clearGroupMembers();
  }

  renderInputs() {
    let result = [];
    for (let i = 0; i < this.state.inputs; i++) {
      // to gurantee id values are unique
      result.push(
        <Input
          delete={this.didDelete}
          send={this.userCallBack}
          key={i}
          id={i}
        />
      );
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
    if (
      Object.keys(this.state.usernames).length === this.state.inputs &&
      this.state.inputs > 0 &&
      this.state.confirmName
    ) {
      this.setState({ completed: true });
    }
  }

  async onChange(event) {
    await this.setState({ name: event.target.value });
  }
  async send() {
    this.props.created(this.state.usernames, this.state.name);
    // async gurantees we do not proceed until store is updated
    // need this for sending invites after creating group
    await this.props.createGroup(this.state.name);
    console.log(this.state.usernames);
    this.props.sendInvite(this.props.currentGroupID, this.state.usernames);
    this.setState({
      usernames: {},
      inputs: 1,
      completed: false,
      confirmName: false,
    });
    this.handleClose();
  }

  groupConfirm() {
    this.setState({ confirmName: true });
    if (
      Object.keys(this.state.usernames).length === this.state.inputs &&
      this.state.inputs > 0
    ) {
      this.setState({ completed: true });
    }
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Make a group with friends
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Group Name'
              aria-label='Group Name'
              aria-describedby='basic-addon1'
              disabled={this.state.confirmName}
              onChange={this.onChange}
            />
            <InputGroup.Append>
              <Button
                disabled={this.state.confirmName}
                variant='outline-secondary'
                onClick={this.groupConfirm}
              >
                Confirm
              </Button>
            </InputGroup.Append>
          </InputGroup>

          {this.renderInputs()}
        </Modal.Body>
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

const mapStateToProps = (state) => {
  const currentGroup = getCurrentGroup(state);
  return {
    currentGroupID: currentGroup !== null ? currentGroup.groupID : null,
    pending: getPendingStatus(state),
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      createGroup: createGroup,
      sendInvite: sendInvite,
      clearGroupMembers: clearGroupMembers,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(GroupPopUp);
