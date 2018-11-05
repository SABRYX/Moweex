import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { Button, Icon, Card } from "native-base";
import { styles } from "./Styles";

class TheCalendar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.imageView}>
          <View style={styles.innerCalendar}>
            <View style={styles.blueView}>
              <Text style={styles.monthText}>{this.props.month}</Text>
            </View>
            <View style={styles.whiteView}>
              <Text style={styles.dayNum}>{this.props.dayNum}</Text>
              <View style={styles.blueLine}>
                <Text style={styles.day}>{this.props.day}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.textView}>
          <Text style={styles.bigText} numberOfLines={2}>
            {(this.props.bigText).toUpperCase()}
          </Text>
          <Text style={styles.time}>{this.props.time}</Text>
          <Text style={styles.smallText}>{(this.props.smallText).toUpperCase()}</Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} transparent>
            <Icon
              name="keyboard-arrow-right"
              type="MaterialIcons"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default TheCalendar;
