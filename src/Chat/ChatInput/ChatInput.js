import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      messageText: e.target.value,
    });
  };

  addMessage = () => {
    this.props.addMessage({ text: this.state.messageText, role: 'CUSTOMER' });
    this.setState({
      messageText: '',
    });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" id="messageText" name="messageText" onChange={this.handleChange} />
        <button type="button" onClick={this.addMessage}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
