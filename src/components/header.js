import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Header = React.forwardRef((props, ref) => (
  <div className="sc-header panel-heading" ref={ref}>
    <span className="panel-title">{props.children}</span>
  </div>
));

export default Header;