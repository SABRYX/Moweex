import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    Main: {
      flex: 1,
    },
    backButton: {
      alignSelf: "center",
      marginBottom: "5%"
    },
    backButtonIcon: {
      fontSize: 35
    },
    headerBody: {
      flex: 4,
      alignContent: "flex-start"
    },
    headerLeft: {
      flex: 1
    },
    headerBodyText: {
      alignSelf: "flex-start",
      marginLeft: "20%",
      fontSize: 17,
      color: "#0078A8"
    },
    body: {
      flex: 1,
      backgroundColor: "white",
      
    },
    firstSection: {
      height: 120,
      width: "100%"
    },
    fsView: {
      width: "50%",
      margin: "4%"
    },
    fsImageBackground: {
      width: "100%",
      height: "100%"
    },
    fsOpacityView: {
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(1,1,1,0.5)"
    },
    fsBigText: {
      fontSize: 25,
      color: "white",
      fontWeight: "600"
    },
    fsSmallText: {
      fontSize: 13,
      color: "white",
      fontWeight: "200"
    },
    secondSection: {
      height: 170,
      width: "100%",
    //   borderStyle:"dashed",
      borderRadius:1,
      borderBottomWidth: StyleSheet.hairlineWidth,
    },ssText:{
        margin:"2%",
        fontSize:14,
        marginTop:"5%",
        color:"#4A4A4A",
        fontWeight:"100"
    }
  });