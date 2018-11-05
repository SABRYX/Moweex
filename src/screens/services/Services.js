import React, { Component } from "react";
import {
  View,
  Modal,
  TouchableHighlight,
  Text,
  TouchableOpacity,
  WebView,
  Linking
} from "react-native";
import { styles } from "./Style";
import BlueView from "../../components/blue-view/BlueView";
import { Header, Left, Body, Right, Icon } from "native-base";
import Share from "react-native-share";

class Services extends Component {
  static navigationOptions = {
    title: "Information".toUpperCase(),
    headerTitleStyle: {
      width: "90%",
      textAlign: "center"
    },
    headerStyle: {
      backgroundColor: "white"
    },
    headerTintColor: "#0078A8"
  };
  constructor(props) {
    super(props);
    this.state = {
      visableModale: false,
      url: "",
      name:""
    };
    this.webviewRef = React.createRef();
  }
  showModal = (url,name) => {
    this.setState({ url: url });
    this.setState({ visableModale: !this.state.visableModale });
    this.setState({name:name})
  };
  render() {
    const shareOptions = {
      title: "Share via",
      url: this.state.url,
    };

    return (
      <View style={styles.main}>
        {this.state.visableModale ? (
          <View style={{ marginTop: 22 }}>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.visableModale}
            >
              <View style={styles.modal}>
                <View>
                  <Header>
                    <Left>
                      <TouchableOpacity
                        onPress={() => {
                          this.showModal(!this.state.visableModale);
                        }}
                      >
                        <Icon
                          name="close"
                          type="MaterialIcons"
                          style={styles.Icon}
                        />
                      </TouchableOpacity>
                    </Left>
                    <Body style={styles.headerBody}>
                      <Text>{this.state.name}</Text>
                    </Body>
                    <Right>
                      <TouchableOpacity
                        onPress={() => this.webviewRef.current.reload()}
                      >
                        <Icon
                          name="reload"
                          type="SimpleLineIcons"
                          style={styles.Icon}
                        />
                      </TouchableOpacity>
                    </Right>
                  </Header>
                </View>
                <WebView
                  source={{ uri: "https://" + this.state.url }}
                  style={{ marginTop: 0, flex: 2 }}
                  ref={this.webviewRef}
                  startInLoadingState={true}
                />
              </View>
              <View style={styles.footer}>
                <View style={styles.iconView}>
                  <TouchableOpacity onPress={() => Share.open(shareOptions)}>
                    <Icon
                      name="share-apple"
                      type="EvilIcons"
                      style={styles.Icon}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.iconView}>
                  <TouchableOpacity
                    onPress={() => Linking.openURL("https://" + this.state.url)}
                  >
                    <Icon
                      name="compass"
                      type="MaterialCommunityIcons"
                      style={styles.Icon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        ) : null}
        <BlueView
          bigText="Anmeldung zum Check"
          smallText="Anmeldeformular für Arbeitsplatzcheck"
          withArrow
          showModal={this.showModal}
          url="google.com"
        />
        <BlueView
          bigText="zum Check zum Check"
          smallText="Anmeldeformular für Arbeitsplatzcheck"
          withArrow
          showModal={this.showModal}
          url="mowesolutions.com"
        />
        <BlueView
          bigText="Anmeldung zum Check Check"
          smallText="Anmeldeformular für Arbeitsplatzcheck"
          withArrow
          showModal={this.showModal}
          url="facebook.com"
        />
        <BlueView
          bigText="zum Check zum Check Check"
          smallText="Anmeldeformular für Arbeitsplatzcheck"
          withArrow
          showModal={this.showModal}
          url="twitter.com"
        />
      </View>
    );
  }
}

export default Services;
