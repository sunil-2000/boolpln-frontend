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
  getAddedMembers,
} from "../../../redux/reducers/groupApiReducer";
import { clearGroupMembers } from "../../../redux/actions/groupApiActions.js";

class GroupPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: 1,
      confirmName: false,
      name: "",
    };
    // binds this to function for use
    this.handleClose = this.handleClose.bind(this);
    this.send = this.send.bind(this);
  }

  handleClose() {
    this.setState({ inputs: 1, confirmName: false });
    this.props.handleClose();
    this.props.clearGroupMembers();
  }

  // async gurantees we do not proceed until store is updated
  // need this for sending invites after creating group
  async send() {
    await this.props.createGroup(this.state.name);
    await this.props.sendInvite(
      this.props.currentGroupID,
      this.props.addedMembers
    );
    this.setState({ inputs: 1, confirmName: false });
    this.handleClose();
  }

  // check if group pop up is appropriately completed, which is defined by
  // all input fields being filled and confirmed
  // if true this is used to allow user to to send invite and create the group
  checkComplete() {
    const check = !(
      this.state.inputs === this.props.addedMembers.length &&
      this.props.addedMembers.length > 0
    );
    return check;
  }

  renderInputs() {
    let result = [];
    for (let i = 0; i < this.state.inputs; i++) {
      // to gurantee id values are unique
      result.push(<Input delete={this.didDelete} key={i} />);
    }
    return result;
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
              onChange={(event) => this.setState({ name: event.target.value })}
            />
            <InputGroup.Append>
              <Button
                disabled={this.state.confirmName}
                variant='outline-secondary'
                onClick={() => this.setState({ confirmName: true })}
              >
                Confirm
              </Button>
            </InputGroup.Append>
          </InputGroup>
          {this.renderInputs()}
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() =>
              this.setState({ inputs: this.state.inputs + 1, completed: false })
            }
          >
            Add User
          </Button>
          <Button disabled={this.checkComplete()} onClick={this.send}>
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
    addedMembers: getAddedMembers(state),
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
