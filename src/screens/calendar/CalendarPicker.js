import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  ImageBackground
} from "react-native";
import { Calendar } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import { Icon } from "native-base";
import { styles } from "./Style";
import Carousel from "react-native-snap-carousel";
import TheCalendar from "../../components/the-calendar/TheCalendar";
import Swiper from "react-native-swiper";
var moment = require("moment");
LocaleConfig.locales["de"] = {
  monthNames: [
    "Januar",
    "Februar",
    "Marz",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ],
  dayNamesShort: ["S", "M", "D", "M", "D", "F", "S"]
};

LocaleConfig.defaultLocale = "de";
class CalendarPicker extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Ereignisse".toUpperCase(),
      headerTitleStyle: {
        width: "90%",
        textAlign: "center"
      },
      headerStyle: {
        backgroundColor: "white"
      },
      headerRight: (
        <TouchableOpacity
          onPress={() => console.log(this)}
          title="Info"
          color="black"
          style={{ marginRight: 16 }}
        >
          <Icon
            name="settings"
            type="Octicons"
            style={{
              transform: [{ rotate: "90deg" }],
              fontSize: 22.5,
              color: "#0078A8"
            }}
          />
        </TouchableOpacity>
      ),
      headerTintColor: "#0078A8",
      headerLeft: (
        <TouchableOpacity
          onPress={navigation.getParam("toggleCalendar")}
          title="Info"
          color="black"
          style={{ marginLeft: 16 }}
        >
          <Icon
            name="calendar-check-o"
            type="FontAwesome"
            style={{ fontSize: 22.5, color: "#0078A8" }}
          />
        </TouchableOpacity>
      )
    };
  };
  constructor(props) {
    super(props);
    this._carousel = React.createRef();
    this.swiperRef = React.createRef();
    this.state = {
      date: moment().format("L"),
      month: moment().format("MMMM"),
      calendarVisable: false,
      entries: [
        {
          title:
            "https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
          month: "Marz 2011"
        },
        {
          title:
            "https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg",
          month: "November 2011"
        }
      ]
    };
    this.calenderRef = React.createRef();
  }
  componentDidMount() {
    this.props.navigation.setParams({ toggleCalendar: this._toggleCalendar });
  }
  _toggleCalendar = () => {
    this.setState({ calendarVisable: !this.state.calendarVisable });
    console.log("hello");
  };
  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <ImageBackground
          style={{
            flex: 1,
            alignSelf: "center",
            flexDirection: "row",
            paddingLeft: 20,
            paddingTop: 40
          }}
          source={{ uri: item.title }}
        >
          <TouchableOpacity
            onPress={() => {
              this._carousel.current.snapToPrev(true, false);
            }}
            style={styles.carouselButton}
          >
            <Icon
              name="md-arrow-dropleft"
              type="Ionicons"
              style={styles.carouselIcon}
            />
          </TouchableOpacity>
          <Text style={styles.carouselText}>{item.month}</Text>

          <TouchableOpacity
            onPress={() => {
              this._carousel.current.snapToNext(true, false);
            }}
            style={styles.carouselButton}
          >
            <Icon
              name="md-arrow-dropright"
              type="Ionicons"
              style={styles.carouselIcon}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  };
  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        {this.state.calendarVisable ? (
          <View style={{ flex: 0.6, backgroundColor: "green", zIndex: 100 }}>
            <Calendar
              ref={this.calenderRef}
              minDate={moment().format("L")}
              onDayPress={day => {
                this.setState({ date: day.dateString });
                console.log(this.state.date, day);
                this.setState({ month: moment.months(day.month - 1) });
              }}
              onDayLongPress={day => {
                this.setState({ date: day.dateString });
                this.setState({ month: moment.months(day.month - 1) });
              }}
              monthFormat={"MMMM"}
              onMonthChange={month => {
                console.log("month changed", month);
              }}
              hideArrows={true}
              hideExtraDays={false}
              disableMonthChange={false}
              firstDay={1}
              hideDayNames={false}
              showWeekNumbers={false}
              onPressArrowLeft={substractMonth => substractMonth()}
              onPressArrowRight={addMonth => addMonth()}
              markingType={"custom"}
              markedDates={{
                [this.state.date]: {
                  customStyles: {
                    container: {
                      backgroundColor: "#0078A8",
                      borderRadius: 0,
                      height: 36.5,
                      width: 45
                    },
                    text: {
                      color: "white",
                      fontSize: 16.5
                    }
                  }
                }
              }}
              style={{
                alignSelf: "center",
                justifyContent: "flex-start",
                borderBottomColor: "grey",
                borderBottomWidth: 0.25
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                paddingTop: 12.5,
                backgroundColor: "white"
              }}
            >
              <Text style={styles.calenderFooterTextMain}>Farbschema:</Text>
              <View style={styles.footerInnerContainer}>
                <View style={styles.calendarFooterView1} />
                <Text style={styles.calenderFooterText}>Früh</Text>
              </View>
              <View style={styles.footerInnerContainer}>
                <View style={styles.calendarFooterView2} />
                <Text style={styles.calenderFooterText}>Mittag</Text>
              </View>
              <View style={styles.footerInnerContainer}>
                <View style={styles.calendarFooterView3} />
                <Text style={styles.calenderFooterText}>Nacht</Text>
              </View>
            </View>
          </View>
        ) : null}
        <View
          style={{
            height: 147,
            backgroundColor:"red"
          }}
        >
          {/* <Carousel
            ref={this._carousel}
            data={this.state.entries}
            renderItem={this._renderItem}
            sliderWidth={200}
            itemWidth={200}
            containerStyle={{flex:1}}
          /> */}
          <Swiper
            style={styles.wrapper}
            ref={this.swiperRef}
            showsButtons={false}
            showsPagination={false}
            buttonWrapperStyle={{
              backgroundColor: "transparent",
              flexDirection: "row",
              position: "absolute",
              top: 1,
              left: 0,
              flex: 1,
              paddingHorizontal: 0,
              paddingVertical: 0,
              justifyContent: "center",
              alignItems: "flex-start"
            }}
          >
            {this.state.entries.map((item, index) => {
              return (
                <ImageBackground
                  source={{ uri: item.title }}
                  style={{ flex: 1, flexDirection: "row",paddingLeft:15,paddingTop:25 }}
                  key={index}
                >
                  <TouchableOpacity
                    title="growning"
                    onPress={() => {
                      this.swiperRef.current.scrollBy(1);
                    }}
                  >
                    <Icon name="md-arrow-dropleft" type="Ionicons" style={styles.carouselIcon} />
                  </TouchableOpacity>
                  <Text style={styles.carouselText}>{item.month}</Text>

                  <TouchableOpacity
                    title="all my life"
                    onPress={() => {
                      this.swiperRef.current.scrollBy(-1);
                    }}
                  >
                    <Icon name="md-arrow-dropright" type="Ionicons" style={styles.carouselIcon}  />
                  </TouchableOpacity>
                </ImageBackground>
              );
            })}
          </Swiper>
        </View>

        <View style={styles.calendarView}>
          <TheCalendar
            bigText="Grillfest mit Hermann Maier und Hansi Hinterseer Grillfest mit Hermann Maier und Hansi Hinterseer Grillfest mit Hermann Maier und Hansi Hinterseer Grillfest mit Hermann Maier und Hansi Hinterseer v v Grillfest mit Hermann Maier und Hansi Hinterseer"
            time="11.11.2017  | 05:30 Uhr"
            smallText="Werkseinfahrt Süd"
            month="Nov"
            dayNum="11"
            day="Mo."
          />
          <TheCalendar
            bigText="Grillfest mit Hermann Maier und Hansi Hinterseer Grillfest mit Hermann Maier und Hansi Hinterseer Grillfest mit Hermann Maier und Hansi Hinterseer Grillfest mit Hermann Maier und Hansi Hinterseer v v Grillfest mit Hermann Maier und Hansi Hinterseer"
            time="11.11.2017  | 05:30 Uhr"
            smallText="Werkseinfahrt Süd"
            month="Nov"
            dayNum="11"
            day="Mo."
          />
        <Button title="move to rearrange list" onPress={()=>{this.props.navigation.navigate("List")}}/>
        </View>
        
      </View>
    );
  }
}

export default CalendarPicker;
