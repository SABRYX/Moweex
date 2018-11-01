import React, { Component } from "react";
import { View, Text, ImageBackground,TouchableOpacity } from "react-native";
import { Button, Icon, Card } from "native-base";
import { styles } from "./Styles";

class TheCalendar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={styles.card}>
        <View style={styles.imageView}>
          {/* <ImageBackground
            source={require("../../styling-config/Images/symbols-news-img-content-image.png")}
            style={styles.image}
          >
            <Icon name="md-images" type="Ionicons" style={styles.imageIcon} />
          </ImageBackground> */}
        </View>
        <View style={styles.textView}>
          <Text style={styles.bigText} numberOfLines={2} >{this.props.bigText}</Text>
          <Text style={styles.time}>{this.props.time}</Text>
          <Text style={styles.smallText}>{this.props.smallText}</Text>
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
      </Card>
    );
  }
}

export default TheCalendar;
