import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  notMain: {
    height: 110,
    backgroundColor: "rgb(226, 252, 252)",
    alignSelf:"center",
    justifyContent:"center",
    paddingLeft:13,
    width:"100%",
    margin:0,
    borderBottomColor:"black",
    borderBottomWidth:0.25,
    flexDirection:"row"
  },
  card: {
    height: 110,
    backgroundColor: "rgb(226, 252, 252)",
    width:"96%",
    alignSelf:"center",
    justifyContent:"center",
    paddingLeft:13,
    marginTop:10.5
  },
  textMain:{
    flex:1,
    justifyContent:"center",
    alignItems:"flex-start"
  },
  textNotMain:{
    flex:8,
    justifyContent:"center",
    alignItems:"flex-start"
  },
  bigText: {
    fontSize: 25,
    color: "#4A4A4A",
    alignSelf:"flex-start",
    // fontFamily:"voestalpine Medium",

  },
  smallText: {
    fontSize: 13,
    marginBottom: 5,
    marginTop:  7.5,
    color: "#4A4A4A",
    alignSelf:"flex-start",
    // fontFamily:"voestalpine Light"
  },
  buttonView: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    width: "100%",
    alignSelf: "center",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  icon: {
    fontSize: 25,
    color: "grey"
  }
});
