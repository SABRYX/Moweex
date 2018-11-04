import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import { Button, Icon, Card } from "native-base";
import { styles } from "./Styles";

class BlueView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={styles.card}>
        <Text style={styles.bigText}>{(this.props.bigText).toUpperCase()}</Text>
        <Text style={styles.smallText}>{this.props.smallText}</Text>
      </Card>
    );
  }
}

export default BlueView;
