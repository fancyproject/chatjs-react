import React, { Component } from 'react';
import { MessageFormComponent } from './messageForm';
import { MessageListComponent } from './messageList';

export class ChatComponent extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        messages: ['test1','test2']
      };
      this.sendMessage = this.sendMessage.bind(this);
    }
    render(){
        return (
            <div>
              <MessageListComponent messages={this.state.messages}/>
              <MessageFormComponent onSendMessage={this.sendMessage}/>
            </div>
        )
    }
    sendMessage(message){
      console.log(message);
        var updateMessages = this.state.messages;
        this.state.messages.push(message);
        updateMessages.push(message);
        console.log(updateMessages);
        this.state = {
            messages: updateMessages
        }
    }
};
