import React, { Component } from 'react';

export class MessageFormComponent extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
    }
    render(){
        return (
            <form id="message-form" onSubmit={this.onSubmitHandle}>
              <input type="text" ref="message"/>
              <input type="submit" value="send!"/>
            </form>
        )
    }
    onSubmitHandle(e){
        e.preventDefault();
        console.log(this);
        //console.log(reactInstance.refs.message.value);
        this.props.onSendMessage(this.refs.message.value);
    }
};
