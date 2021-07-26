import { Component } from "react";
import { Modal, FormControl, Button, InputGroup } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import renameGroup from "../../../redux/middleware/groups/renameGroup";
import { getCurrentGroup } from "../../../redux/reducers/groupApiReducer";
class RenameGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      confirmed: false,
    };
    this.send = this.send.bind(this);
  }

  send() {
    const groupID = this.props.currentGroupID;
    if (groupID && this.state.confirmed) {
      this.props.renameGroup(groupID, this.state.name);
    }
    this.setState({ confirmed: false, name: "" });
    this.props.handleClose();
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Make a group with friends
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='New Group Name'
              aria-label='Group Name'
              aria-describedby='basic-addon1'
              disabled={false}
              onChange={(event) => this.setState({ name: event.target.value })}
            />
            <InputGroup.Append>
              <Button
                disabled={this.state.confirmed}
                variant='outline-secondary'
                onClick={() => this.setState({ confirmed: true })}
              >
                Confirm
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={!this.state.confirmed} onClick={this.send}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      renameGroup: renameGroup,
    },
    dispatch
  );

const mapStateToProps = (state) => {
  const currentGroup = getCurrentGroup(state);
  return {
    currentGroupID: currentGroup ? currentGroup.groupID : null,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RenameGroup);
