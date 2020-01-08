import React from 'react';
import PropTypes from 'prop-types';
import Viewer from './Component.Viewer/Viewer';
import Sender from './Component.Sender/Sender';

const Tchat = props => (
  <div>
    <Viewer store={messageStore} />
    <Sender store={messageStore} />
  </div>
);

Tchat.propTypes = {};

export default Tchat;
