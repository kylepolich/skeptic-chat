import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Chat = React.forwardRef((props, ref) => <div className={props.className || "sc-chat panel panel-default"} ref={ref}>{props.children}</div>);

export default Chat;
