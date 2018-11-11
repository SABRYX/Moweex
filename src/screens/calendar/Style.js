import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white"
  },
  calenderFooterText: {
    marginLeft: 17.5,
    fontFamily: "voestalpine-Light",
    color: "#4A4A4A",
    fontSize: 14
  },
  calendarFooterView3: { height: 15, width: 15, backgroundColor: "#E2CF30" },
  calendarFooterView2: { height: 15, width: 15, backgroundColor: "#A5A5A5" },
  calendarFooterView1: { height: 15, width: 15, backgroundColor: "#87D25A" },
  calenderFooterTextMain: {
    fontFamily: "voestalpine-Light",
    color: "#4A4A4A",
    fontSize: 14
  },
  footerInnerContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  wrapper:{
      height:147
  },
  slide: {
    justifyContent: "flex-start",
    alignItems: "center",
    height:147
  },
  
  carouselText:{paddingTop:8,paddingLeft:12,paddingRight:12,color:"white",fontSize:16},
  carouselButton: {
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent:"flex-start"
  },
  carouselIcon: {
    color: "white",
    fontSize: 30,
  }
});
