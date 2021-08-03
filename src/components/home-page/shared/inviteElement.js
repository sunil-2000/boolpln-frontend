import { Component } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { addedGroupMember } from "../../../redux/actions/groupApiActions";
import { connect } from "react-redux";

class InviteElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: this.props.id,
      deleted: false,
    };
  }

  renderForm() {
    return (
      <FormControl
        disabled={this.state.disabled}
        placeholder='username'
        aria-label='Username'
        aria-describedby='basic-addon1'
        onChange={(event) =>
          this.props.addedGroupMember(event.target.value, this.state.id)
        }
      />
    );
  }

  render() {
    return (
      <>
        <InputGroup className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
          </InputGroup.Prepend>
          {this.renderForm()}
          <InputGroup.Append>
            <Button
              disabled={this.state.disabled}
              variant='outline-secondary'
              onClick={() => this.props.delete(this.props.id)}
            >
              Delete
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </>
    );
  }
}

export default connect(null, { addedGroupMember })(InviteElement);
