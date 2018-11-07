import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const DefaultHeader = props => (
  <div className="sc-header">
    {props.children}
  </div>
);

const DefaultBody = props => {
  const Message = props.message || DefaultMessage;
  return (
    <div className="sc-body">
      {props.history.map((message, i) => <Message source={message.source} key={i}>{message.render}</Message>)}
    </div>
  );
};

const DefaultMessage = props => (
  <div className="sc-message">
    {props.children}
  </div>
);

const DefaultFooter = props => (
  <div className="sc-footer">

  </div>
);

class SkepticChat extends Component {
  constructor(props) {
    super(props);
    this.name = this.constructor.name;
  }
  handleEvent(event_name, event_data = {}) {
    switch (event_name) {
      default:
        return event => {
          console.warn(`${this.name}::Event`, `No event handler for, "${event_name}".`, { event, event_data });
        };
        break;
    }
  }
  render() {
    let { title, history, onSend, header, body, message, footer } = this.props;
    title = title || '';
    history = history || [];
    onSend = onSend || (() => {});
    const Header = header || DefaultHeader;
    const Body = body || DefaultBody;
    const Message = message || DefaultMessage;
    const Footer = footer || DefaultFooter;
    return (
      <div className={this.props.className || "sc-wrapper"}>
        <Header>{title}</Header>
        <Body message={Message} history={history} />
        <Footer onSend={onSend} />
      </div>
    );
  }
}

export default SkepticChat;
