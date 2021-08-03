import { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addedGroupMember } from "../../../redux/actions/groupApiActions";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      disabled: false,
      fill: "Username",
    };
    this.confirm = this.confirm.bind(this);
  }

  confirm() {
    this.setState({ disabled: true, fill: this.state.userName });
    this.props.addedGroupMember({ groupMember: this.state.userName });
  }
  renderForm() {
    return (
      <FormControl
        disabled={this.state.disabled}
        placeholder={this.state.fill}
        aria-label='Username'
        aria-describedby='basic-addon1'
        onChange={(event) => this.setState({ userName: event.target.value })}
      />
    );
  }

  // need to implement onDelte (probably should be inherited from GroupPopUp)
  render() {
    if (!this.state.deleted) {
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
                onClick={this.confirm}
              >
                Confirm
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </>
      );
    } else {
      return null;
    }
  }
}
export default connect(null, { addedGroupMember })(Input);