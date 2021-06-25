import React, { Component } from "react";
import { store } from "react-notifications-component";

class Notification extends Component {
  addNotification(title, msg, type, location) {
    store.addNotification({
      title: title,
      message: msg,
      type: type, // 'default', 'success', 'info', 'warning'
      container: location, // where to position the notifications
      animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
      animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
      dismiss: {
        duration: 3000,
      },
    });
  }
}
export default Notification;
