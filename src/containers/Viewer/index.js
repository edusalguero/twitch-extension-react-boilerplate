import React, { Component } from 'react';

import './viewer.sass';

class Viewer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

    };
  }

  componentDidMount() {
    window.Twitch.ext.onAuthorized(auth => {
      console.log(auth)
    });
  }

  componentWillUnmount() {}

  render() {
    return <section className='Viewer'>Viewer</section>;
  }
}

export default Viewer;