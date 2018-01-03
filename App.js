import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import BubbleAnimation from './app/bubbleAnimation'
import Home from './app/home'
import Inbox from './app/inbox'


export default class App extends React.Component {
    
    render(){
      return(
        <Inbox />
      );
    }
}