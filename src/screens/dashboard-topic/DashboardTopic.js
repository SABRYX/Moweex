import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Button
} from "react-native";
import { styles } from "./Styles";
import ThePhoto from "../../components/the-photo/ThePhoto";
import BlueView from "../../components/blue-view/BlueView";
import TheCalendar from "../../components/the-calendar/TheCalendar";

class DashBoardTopic extends Component {
  static navigationOptions = {
    title: "Schwerpunkt".toUpperCase(),
    headerTitleStyle: {
      width: "90%",
      textAlign: "center"
    },
    headerStyle: {
      backgroundColor: "white"
    },
    headerTintColor: "#0078A8"
  };

  /* render function, etc */
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.Main}>
        <ScrollView style={styles.body}>
          <View style={styles.firstSection}>
            <ImageBackground
              source={require("../../../src/styling-config/images/symbols-img-banner-image.png")}
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
          <View style={{ marginTop: 21.5,padding:4 }}>
            <ThePhoto
              bigText="Gesünder durch den Tag mit Sport und gesundem Essen"
              smallText="GESUNDHEIT"
              withIcon
              main
            />
            <ThePhoto
              bigText="Versuchen Sie bei Meetings immer zu stehen"
              smallText="Arbeitsplatz"
              selected={true}
              withIcon
              main
            />
            <ThePhoto
              bigText="Ein Apfel am Tag hält sie gesund"
              smallText="Gesundheit"
              withIcon
              main
            />
          </View>
          <BlueView
            bigText="Anmeldung zum Check"
            smallText="Anmeldeformular für Arbeitsplatzcheck"
            main
          />
          <TheCalendar
            bigText="Grillfest mit Hermann Maier und Hansi Hinterseer Grillfest mit Hermann Maier und Hansi Hinterseer Grillfest mit Hermann Maier und Hansi Hinterseer Grillfest mit Hermann Maier und Hansi Hinterseer v v Grillfest mit Hermann Maier und Hansi Hinterseer"
            time="11.11.2017  | 05:30 Uhr"
            smallText="Werkseinfahrt Süd"
            month="Nov"
            dayNum="11"
            day="Mo."
          />
          <Button
            onPress={() => this.props.navigation.navigate("NewsOverview")}
            title="GO"
          />
        </ScrollView>
      </View>
    );
  }
}

export default DashBoardTopic;
