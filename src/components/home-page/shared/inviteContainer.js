import { Component } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
// Redux
import {
  getCurrentGroup,
  getAddedGroupName,
  getAddedMembers,
} from "../../../redux/reducers/groupApiReducer";
import sendInvite from "../../../redux/middleware/groups/sendInvite";
import createGroup from "../../../redux/middleware/groups/createGroup";
import {
  clearAddedGroupName,
  addedGroupName,
  deleteAddedGroupMember,
  clearGroupMembers,
} from "../../../redux/actions/groupApiActions";
import { connect } from "react-redux";
import InviteElement from "./inviteElement";

class InviteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invites: [],
      id: 0,
    };
    this.delete = this.delete.bind(this);
    this.add = this.add.bind(this);
    this.send = this.send.bind(this);
    this.close = this.close.bind(this);
  }
  delete(id) {
    const updated = this.state.invites.filter(
      (invite) => parseInt(invite.key) !== id
    );
    this.props.deleteAddedGroupMember(id);
    this.setState({ invites: updated });
  }
  add() {
    let copy = this.state.invites.slice();
    copy.push(
      <InviteElement
        id={this.state.id}
        key={this.state.id}
        delete={this.delete}
      ></InviteElement>
    );
    this.setState({ id: this.state.id + 1, invites: copy });
  }

  close() {
    this.setState({ id: 0, invites: [] });
    this.props.clearAddedGroupName();
    this.props.clearGroupMembers();
    this.props.handleClose();
  }

  async send() {
    if (this.props.isCreate) {
      await this.props.createGroup(this.props.groupName);
      if (this.props.addedMembers.length > 0) {
        await this.props.sendInvite(
          this.props.currentGroupID,
          this.props.addedMembers
        );
      }
    } else {
      this.props.sendInvite(this.props.currentGroupID, this.props.addedMembers);
    }
    this.close();
  }

  renderGroupCreate() {
    if (this.props.isCreate) {
      return (
        <Modal show={this.props.show} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>
              Create a group!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className='mb-3'>
              <FormControl
                placeholder='Group Name'
                aria-label='Group Name'
                aria-describedby='basic-addon1'
                onChange={(event) =>
                  this.props.addedGroupName(event.target.value)
                }
              />
            </InputGroup>

            {this.state.invites}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.add}>Add User</Button>
            <Button onClick={this.send}>Create</Button>
          </Modal.Footer>
        </Modal>
      );
    } else {
      return (
        <Modal show={this.props.show} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>
              Invite friends!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className='mb-3'></InputGroup>
            {this.state.invites}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.add}>Add User</Button>
            <Button onClick={this.send}>Invite</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }

  render() {
    return this.renderGroupCreate();
  }
}

const mapStateToProps = (state) => {
  const currentGroup = getCurrentGroup(state);
  return {
    groupName: getAddedGroupName(state),
    addedMembers: getAddedMembers(state),
    currentGroupID:
      currentGroup !== null && currentGroup !== undefined
        ? currentGroup.groupID
        : null,
  };
};

export default connect(mapStateToProps, {
  sendInvite,
  deleteAddedGroupMember,
  addedGroupName,
  clearAddedGroupName,
  createGroup,
  clearGroupMembers,
})(InviteContainer);
