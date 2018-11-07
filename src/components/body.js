import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Body = React.forwardRef((props, ref) => <div className={`sc-body panel-body ${props.className}`} ref={ref}>{props.children}</div>);

export default Body;