import React, { Component } from 'react';

export class MessageListComponent extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return (
            <ul>
            {this.props.messages.map((message, index) =>
                <li key={index}>{message}</li>
            )}
            </ul>
        )
    }
};
