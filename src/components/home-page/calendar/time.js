import React from "react";
import { OverlayTrigger, Popover, PopoverContent } from "react-bootstrap";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.handleMemberList = this.handleMemberList.bind(this);
  }
  handleMemberList() {
    const members = this.props.data;
    let result = [];
    if (members !== null) {
      members.forEach((member) => {
        console.log(member);
        result.push(<div key={member}>{"@" + member}</div>);
      });
    }
    return result;
  }

  render() {
    let border = "";

    const backColor = {
      backgroundColor: this.props.fillColor,
    };
    return (
      <OverlayTrigger
        placement='right'
        trigger={["hover", "focus"]}
        overlay={
          <Popover>
            <Popover.Title as='h3'>
              <strong>Others available</strong>
            </Popover.Title>
            <PopoverContent>{this.handleMemberList()}</PopoverContent>
          </Popover>
        }
      >
        <button
          className={this.props.selected ? "selected" : "time"}
          onClick={this.props.onClick}
          style={backColor}
          key={null}
        ></button>
      </OverlayTrigger>
    );
  }
}

export default Time;
