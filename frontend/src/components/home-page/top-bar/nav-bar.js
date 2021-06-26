import { Component } from "react";
import { Nav } from "react-bootstrap";
import Refresh from "../../../flow/security/refresh";

class NavBar extends Component {
  // call some api method to get list of notifications for particular user
  // when component mounts
  componentDidMount() {}

  // response when user clicks on notification icon
  handleNotificationClick() {}

  // response when user clicks on setting icon
  handleSettingClick() {}

  render() {
    const refresh = new Refresh();
    const alert = " 🔔 ";
    const setting = " ⚙️ ";

    return (
      <Nav
        variant='pills'
        defaultActiveKey='home'
        className='justify-content-end'
      >
        <Nav.Item>
          <Nav.Link eventKey='home' href='/'>
            My Calendars
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='alert'>{alert}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey='logout'
            href='/start'
            onSelect={() => refresh.logout()}
          >
            Logout
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='settings' title='Item'>
            {setting}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}
export default NavBar;
