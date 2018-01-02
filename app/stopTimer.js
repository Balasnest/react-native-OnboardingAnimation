import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';
import TimeFormatter from 'minutes-seconds-milliseconds';

export default class stopTimer extends React.Component {
  
  constructor() {
    super();
    this. state = {
      timeElapsed: "00:00:00",
      running: false,
      startTime: null,
      laps: []
    }
  }

  startStopButton = () => {
    var style = this.state.running ? styles.stopButton : styles.startButton;
    return(
      <TouchableHighlight
        underlayColor="gray"
        onPress={this.handleStartPress}
        style={[styles.button, style]}
      >
      <Text>{this.state.running ? "Stop" : "Start"}</Text>
      </TouchableHighlight>
    );
  }

  lapButton = () => {
    return(
      <TouchableHighlight
        underlayColor="gray"
        onPress={this.handleLapPress}
        style={[styles.button]}
      >
      <Text>Lap</Text>
      </TouchableHighlight>
    );
  }

  handleLapPress = () => {
    var lap = this.state.timeElapsed;


    this.setState({ 
      startTime: new Date() ,
      laps: this.state.laps.concat([TimeFormatter(lap)])
    })
  }


  handleStartPress = () => {
    if(this.state.running){
      clearInterval(this.interval);
      this.setState({
        running: false, 
        laps: []
      });
      return
    }

    this.setState({startTime: new Date()})

    this.interval = setInterval( () => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
      });
    }, 30)
  }

  renderRowList = ({item, index}) => {
    return(
      <View style={styles.row}>
        <Text> Lap {index} </Text>
        <Text>{item}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          
          <View style={styles.timerWrapper}>
            <Text style={styles.timer}>{TimeFormatter(this.state.timeElapsed)}</Text>
          </View>

          <View style={styles.ButtonWrapper}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
          
          
          <View style={{flex: 1}}>
            <FlatList 
              data={this.state.laps}
              renderItem = {this.renderRowList}
            />
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header:{
    flex: 2,
    backgroundColor: '#7fc3'
  },
  footer: {
    flex: 1
  },
  timerWrapper:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fc3'

  },
  ButtonWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#83fc'
  },
  timer:{
    fontSize: 60
  },
  button:{
    borderWidth: 2,
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton:{
    borderColor: '#00CC00'
  },
  stopButton:{
    borderColor: '#CC0000'
  },
  row: {
    flexDirection: 'row'
  }


});









