import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./Style";
import { Tabs, Tab } from "native-base";
import ThePhoto from '../../components/the-photo/ThePhoto';

class NewsOverView extends Component {
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
  }

  render() {
    return (
      <View style={styles.main}>
        <Tabs
        tabBarUnderlineStyle={{
            backgroundColor:"white"
        }}
        >
          <Tab
            heading="Division"
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            textStyle={styles.tabTextStyle}
            activeTextStyle={styles.activeTextStyle}
          >
            <View>
            <ThePhoto
              bigText="Umwelt, Gesundheit, Arbeits.."
              selected={true}
              smallText="GESUNDHEIT"
              smallTime="Mo. 12.12.2017"
            />
            <ThePhoto
              bigText="Versuchen Sie bei Meetings immer zu stehen"
              smallTime="13.11.2017"
            />
            <ThePhoto
              bigText="Grillfest mit"
              smallText="Gesundheit"
              smallTime="13.11.2017"
            />
            </View>
          </Tab>
          <Tab
            heading="Organisation"
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            textStyle={styles.tabTextStyle}
            activeTextStyle={styles.activeTextStyle}
          >
            <View>
            <ThePhoto
              bigText="Umwelt, Gesundheit, Arbeits.."
              selected={true}
              smallText="GESUNDHEIT"
              smallTime="Mo. 12.12.2017"
              main={false}
            />
            <ThePhoto
              bigText="Versuchen Sie bei Meetings immer zu stehen"
              smallTime="13.11.2017"
              selected={true}
            />
            <ThePhoto
              bigText="Grillfest mit"
              smallText="Gesundheit"
              smallTime="13.11.2017"
              selected={true}
            />
             <ThePhoto
              bigText="Umwelt, Gesundheit, Arbeits.."
              selected={true}
              smallText="GESUNDHEIT"
              smallTime="Mo. 12.12.2017"
            />
            <ThePhoto
              bigText="Versuchen Sie bei Meetings immer zu stehen"
              smallTime="13.11.2017"
              selected={true}
            />
            <ThePhoto
              bigText="Grillfest mit"
              smallText="Gesundheit"
              smallTime="13.11.2017"
              selected={true}
            />
             <ThePhoto
              bigText="Umwelt, Gesundheit, Arbeits.."
              selected={true}
              smallText="GESUNDHEIT"
              smallTime="Mo. 12.12.2017"
            />
            <ThePhoto
              bigText="Versuchen Sie bei Meetings immer zu stehen"
              smallTime="13.11.2017"
            />
            <ThePhoto
              bigText="Grillfest mit"
              smallText="Gesundheit"
              smallTime="13.11.2017"
            />
            </View>
          </Tab>
        </Tabs>
        <Button title = "Go To Services" onPress={()=>this.props.navigation.navigate("Services")}/>
      </View>
    );
  }
}

export default NewsOverView;
