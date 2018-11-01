import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  selectedCard: {
    flexDirection: "row",
    flex: 1,
    width: "96%",
    height: 61,
    marginTop: 10,
    alignSelf: "center"
  },
  nonSelectedCard: {
    flexDirection: "row",
    flex: 1,
    width: "96%",
    height: 55,
    marginTop: 10,
    alignSelf: "center",
    borderBottomColor: "#0078A8",
    borderBottomWidth: 3
  },
  imageView: { flex: 2, height: "100%" },
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
  textView: { flex: 7},
  bigText: {
    fontSize: 14,
    fontWeight: "500",
    margin: 1,
    color: "#4A4A4A",
    marginLeft: "3%"
  },
  smallText: {
    fontSize: 14,
    fontWeight: "100",
    marginBottom: 5,
    textAlignVertical: "bottom",
    color: "#A5A5A5",
    marginLeft: "3%"
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
    color: "grey",
  }
});
