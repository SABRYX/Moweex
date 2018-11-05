import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { Button, Icon, Card, Thumbnail } from "native-base";
import { styles } from "./Styles";

class ThePhoto extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={
          this.props.main
            ? styles.main
            : styles.notMain
        }
      >
        <View
          style={
            this.props.selected
              ? styles.selectedCardMain
              : styles.nonSelectedCardMain
          }
        >
          <View style={styles.imageView}>
            <ImageBackground
              source={require("../../styling-config/images/symbols-news-img-content-image.png")}
              style={styles.image}
            >
              {this.props.withIcon ? (
                <Icon
                  name="md-images"
                  type="Ionicons"
                  style={styles.imageIcon}
                />
              ) : null}
            </ImageBackground>
          </View>
          <View style={styles.textView}>
            <Text style={styles.bigText}>
              {this.props.bigText.toUpperCase()}
            </Text>
            <View style={styles.smallView}>
              <View>
                <Text style={styles.smallText}>{this.props.smallText}</Text>
              </View>
              <View>
                <Text style={styles.smallTime}>{this.props.smallTime}</Text>
              </View>
            </View>
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
      </View>
    );
  }
}

export default ThePhoto;
