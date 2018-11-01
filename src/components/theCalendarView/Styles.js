import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    flex: 1,
    width: "96%",
    height: 92,
    marginTop: 10,
    backgroundColor: "#0078A8",
    alignSelf: "center"
  },
  imageView: { flex: 2, height: "100%", backgroundColor: "white" },
  image: {
    width: "100%",
    height: 60,
    borderRadius: 30,
    justifyContent: "center"
  },
  imageIcon: {
    fontSize: 30,
    color: "white",
    alignSelf: "center"
  },
  textView: {
    flex: 7,
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center"
  },
  bigText: {
    fontSize: 18,
    fontWeight: "400",
    margin: 1,
    color: "white",
    marginLeft: "3%",
    textAlign:"center",
    alignSelf: "center",
    maxHeight:60
  },
  time: {
    fontSize: 15,
    fontWeight: "300",
    margin: 1,
    color: "white",
    marginLeft: "3%",
    alignSelf: "center"
  },
  smallText: {
    fontSize: 11,
    fontWeight: "100",
    marginBottom: 5,
    color: "white",
    marginLeft: "3%",
    alignSelf: "center"
  },
  buttonView: {
    flex: 2,
    justifyContent: "center"
  },
  button: {
    width: "100%",
    alignSelf: "center",
    alignItems:"flex-end",
    justifyContent: "center",
  },
  icon: {
    fontSize: 30,
    color: "white",
  }
});
