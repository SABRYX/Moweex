import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  nonSelectedCard: {
    flexDirection: "row",
    flex: 1,
    width: "96%",
    height: 61,
    marginTop: 10,
    alignSelf: "center",
  },
  selectedCard: {
    flexDirection: "row",
    flex: 1,
    width: "96%",
    height: 61,
    marginTop: 10,
    alignSelf: "center",
    borderBottomColor: "#0078A8",
    borderBottomWidth: 3
  },
  imageView: { height: 61,width:60},
  image: {
    width:60 ,
    height: 63,
    justifyContent: "center"
  },
  imageIcon: {
    fontSize: 30,
    color: "white",
    alignSelf: "center"
  },
  textView: { flex: 5,justifyContent:"flex-end",alignContent:"flex-start",paddingLeft:8},
  bigText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#4A4A4A",
    marginTop:3,
  },
  smallText: {
    fontSize: 13,
    fontWeight: "100",
    marginBottom: 5,
    textAlignVertical: "bottom",
    color: "#A5A5A5",

  },
  buttonView: {
    flex: 0.5,
    alignContent: "center",
    justifyContent:"center",
  },
  button: {
    width: "100%",
    alignSelf: "center",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  icon: {
    fontSize: 30,
    color: "grey"
  }
});
