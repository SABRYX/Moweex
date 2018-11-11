import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    width: "96%",
    height: 92,
    marginTop: 11.5,
    backgroundColor: "#0078A8",
    alignSelf: "center"
  },
  imageView: { flex: 2, height: "100%", backgroundColor: "white" },
  innerCalendar: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    width:70,
    alignSelf:"center"
  },
  blueView: {
    width: "70%",
    height: 16.5,
    backgroundColor: "#0078A8"
  },
  monthText: {
    color: "white",
    textAlign: "center",
    fontSize: 12.5,
    fontFamily: "voestalpine-Medium"
  },
  whiteView: {
    width: "70%",
    height: 55,
    flexDirection: "column"
  },
  dayNum: {
    fontSize: 25,
    textAlign: "center",
    fontFamily: "voestalpine-Medium"
  },
  blueLine: {
    borderBottomColor: "#0078A8",
    borderBottomWidth: 2,
    width: "70%",
    alignSelf: "center"
  },
  day: { fontSize: 12, textAlign: "center", fontFamily: "voestalpine-Light" },
  textView: {
    flex: 7,
    alignItems: "center",
    alignContent: "space-between",
    alignSelf: "center",
    paddingLeft: 10,
  },
  bigText: {
    fontSize: 18,
    color: "white",
    alignSelf: "flex-start",
    maxHeight: 60,
    fontFamily: "voestalpine-Medium"
  },
  time: {
    fontSize: 15,
    color: "white",
    alignSelf: "flex-start",
    fontFamily: "voestalpine-Light",
    marginTop:6
  },
  smallText: {
    fontSize: 11,
    marginBottom: 5,
    color: "white",
    alignSelf: "flex-start",
    fontFamily: "voestalpine-Light",
    marginTop:3
  },
  buttonView: {
    flex: 2,
    justifyContent: "center"
  },
  button: {
    width: "100%",
    alignSelf: "center",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  icon: {
    fontSize: 30,
    color: "white"
  }
});
