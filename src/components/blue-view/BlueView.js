import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { Button, Icon, Card } from "native-base";
import { styles } from "./Styles";

class BlueView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={this.props.main ? styles.card : styles.notMain} onPress={()=>this.props.showModal(this.props.url,this.props.bigText)}>
        <View style={this.props.main ? styles.textMain : styles.textNotMain}>
          <Text style={styles.bigText}>{this.props.bigText.toUpperCase()}</Text>
          <Text style={styles.smallText}>{this.props.smallText}</Text>
        </View>

        {this.props.withArrow ? (
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button} transparent>
              <Icon
                name="keyboard-arrow-right"
                type="MaterialIcons"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        ) : null}
      </TouchableOpacity>
    );
  }
}

export default BlueView;
