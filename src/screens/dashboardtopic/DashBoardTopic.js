import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView
} from "react-native";
import { Header, Left, Button, Icon, Body } from "native-base";
import { styles } from "./Styles";
import ThePhoto from "../../components/thephoto/thePhotoView";
import BlueView from "../../components/theBlueView/BlueView";
import TheCalendar from "../../components/theCalendarView/theCalendar";

class DashBoardTopic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.Main}>
        <Header noShadow={true}>
          <Left style={styles.headerLeft}>
            <Button transparent style={styles.backButton}>
              <Icon
                name="ios-arrow-round-back"
                type="Ionicons"
                style={styles.backButtonIcon}
              />
            </Button>
          </Left>
          <Body style={styles.headerBody}>
            <Text style={styles.headerBodyText}>{"Schwerpunkt".toUpperCase()}</Text>
          </Body>
        </Header>
        <ScrollView style={styles.body}>
          <View style={styles.firstSection}>
            <ImageBackground
              source={require("../../../src/styling-config/Images/symbols-img-banner-image.png")}
              style={styles.fsImageBackground}
            >
              <View style={styles.fsOpacityView}>
                <View style={styles.fsView}>
                  <Text style={styles.fsBigText}>
                    AUSGLEICH AM ARBEITSPLATZ
                  </Text>
                  <Text style={styles.fsSmallText}>
                    Schwerpunkthema November
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.secondSection}>
            <Text style={styles.ssText}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </Text>
          </View>
          <View style={{marginTop:25}}>
            <ThePhoto
              bigText="Gesünder durch den Tag mit Sport und gesundem Essen"
              smallText="GESUNDHEIT"
            />
            <ThePhoto
              bigText="Versuchen Sie bei Meetings immer zu stehen"
              smallText="Arbeitsplatz"
              selected={true}
            />
            <ThePhoto
              bigText="Ein Apfel am Tag hält sie gesund"
              smallText="Gesundheit"
            />
          </View>
          <BlueView bigText="Anmeldung zum Check" smallText="Anmeldeformular für Arbeitsplatzcheck"/>
          <TheCalendar bigText="Grillfest mit Hermann Maier und Hansi Hinterseer Grillfest mit Hermann Maier und Hansi Hinterseer Grillfest mit Hermann Maier und Hansi Hinterseer Grillfest mit Hermann Maier und Hansi Hinterseer v v Grillfest mit Hermann Maier und Hansi Hinterseer" time="11.11.2017  | 05:30 Uhr" smallText="Werkseinfahrt Süd"/>
        </ScrollView>
      </View>
    );
  }
}

export default DashBoardTopic;
