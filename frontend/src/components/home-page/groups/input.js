import { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      id: this.props.id,
      disabled: false,
      fill: "Username",
    };
    this.onChange = this.onChange.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  async onChange(event) {
    await this.setState({ userName: event.target.value });
    console.log(this.state.userName);
  }

  async confirm() {
    await this.setState({ disabled: true, fill: this.state.userName });
    this.props.send(this.state.userName, this.state.id);
  }
  renderForm() {
    return (
      <FormControl
        disabled={this.state.disabled}
        placeholder={this.state.fill}
        aria-label='Username'
        aria-describedby='basic-addon1'
        onChange={this.onChange}
      />
    );
  }
  // need to implement onDelte (probably should be inherited from GroupPopUp)
  render() {
    return (
      <>
        <InputGroup className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
          </InputGroup.Prepend>
          {this.renderForm()}
          <InputGroup.Append>
            <Button variant='outline-secondary' onClick={this.onDelete}>
              Delete
            </Button>
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
  }
}
export default Input;
