import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Message = React.forwardRef((props, ref) => <div className={`${props.className || 'sc-message'} ${props.type || 'unknown'}`} ref={ref}>{props.children}</div>);

export default Message;