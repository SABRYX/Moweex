import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main:{
    flexDirection: "row",
    height: 61,
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 0.25,
    borderRadius:5,
    marginTop:10
  },
  notMain:{
    flexDirection: "row",
    height: 61,
    alignSelf: "center",
    borderBottomColor: "black",
    borderBottomWidth: 0.25,
  },
  nonSelectedCardMain: {
    flexDirection: "row",
    height: "100%",
    width:"100%",
    alignSelf: "center",
    borderColor: "black",
  },
  selectedCardMain: {
    flexDirection: "row",
    width:"100%",
    height: "100%",
    alignSelf: "center",
    borderBottomColor: "#0078A8",
    borderBottomWidth: 3,
  },
  imageView: { height: 62,width:60},
  image: {
    width:"100%" ,
    height: "100%",
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
    color: "#4A4A4A",
    marginTop:3,
    fontFamily:"voestalpine-Medium",
  },
  smallView:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  smallText: {
    fontSize: 13,
    marginBottom: 5,
    textAlignVertical: "bottom",
    color: "#A5A5A5",
    fontFamily:"voestalpine-Light"

  },
  smallTime:{
    fontSize: 13,
    marginBottom: 5,
    color: "#A5A5A5",
    fontFamily:"voestalpine-Light",
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
