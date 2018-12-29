import React, { Component } from 'react';
import ReactDropzone from 'react-dropzone';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Footer = React.forwardRef((props, ref) => {
  if (!props.onChange) throw new Error('SkepticChat.Footer: onChange cannot be undefined.');
  if (props.value === undefined) throw new Error('SkepticChat.Footer: value cannot be undefined.');
  return (
    <div className="sc-footer panel-footer" ref={ref}>
      <div className="input-group">
        <input className="sc-input form-control" onChange={props.onChange} onKeyDown={props.onKeyDown} placeholder={props.placeholder} value={props.value} />
        {props.onAttach && 
          <ReactDropzone className="sc-attach input-group-addon btn-default"
            multiple={false}
            onDrop={props.onAttach}
            style={{}}
          >
            {props.uploading && <i className="fa fa-spinner fa-spin" /> || <i className="fa fa-paperclip" />}
          </ReactDropzone>}
        <span className="sc-send input-group-addon btn-primary" onClick={props.onSend}>{props.sendButton || <i className="fa fa-paper-plane" />}</span>
      </div>
    </div>
  );
});

export default Footer;