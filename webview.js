"use strict";

module.exports = Franz => {

  function getMessages() {
    let counter = 0;

    /* TODO
    Implement counter from Notifications.
    */
    Franz.setBadge(counter);
  };

  Franz.loop(getMessages);
}
