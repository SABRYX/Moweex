import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    flex: 1,
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
    alignItems: "center"
  },
  blueView: {
    width: "70%",
    height: 16.5,
    backgroundColor: "#0078A8"
  },
  monthText: {
    color: "white",
    textAlign: "center",
    fontSize: 12.5
  },
  whiteView: {
    width: "70%",
    height: 55,
    flexDirection: "column"
  },
  dayNum: { fontSize: 25, textAlign: "center" },
  blueLine: {
    borderBottomColor: "#0078A8",
    borderBottomWidth: 2,
    width: "70%",
    alignSelf: "center"
  },
  day: { fontSize: 12, textAlign: "center" },
  textView: {
    flex: 7,
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    paddingLeft:10
  },
  bigText: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    alignSelf:"flex-start",
    maxHeight: 60
  },
  time: {
    fontSize: 15,
    fontWeight: "300",
    color: "white",
    alignSelf: "flex-start"
  },
  smallText: {
    fontSize: 11,
    fontWeight: "100",
    marginBottom: 5,
    color: "white",
    alignSelf: "flex-start"
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
