import SortableListView from "react-native-sortable-listview";
import React from "react";
import BlueView from "../../components/blue-view/BlueView";
import { Spinner } from "native-base";
import { Services } from "../../models/Services";
import api from "../../api/api-class/ApiController";
import { unzip } from "react-native-zip-archive";
import RNFetchBlob from "rn-fetch-blob";
var SQLite = require("react-native-sqlite-storage");

class List extends React.Component {
  static navigationOptions = {
    title: "LIST".toUpperCase(),
    headerTitleStyle: {
      width: "80%",
      textAlign: "center"
    },
    headerStyle: {
      backgroundColor: "white"
    },
    headerTintColor: "#0078A8"
  };
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      enteries: {}
    };
  }
  componentWillMount() {
    this.handleGetToken();
  }
  componentDidMount() {
  RNFetchBlob.fs
      .ls(RNFetchBlob.fs.dirs.DocumentDir+"/unzipped")
      // files will an array contains filenames
      .then(files => {
        console.log(files);
      });

    RNFetchBlob.config({
      // add this option that makes response data to be stored as a file,
      // this is much more performant.
      fileCache: true,
      path: RNFetchBlob.fs.dirs.DocumentDir
    })
      .fetch(
        "GET",
        "http://www.sqlitetutorial.net/wp-content/uploads/2018/03/chinook.zip",
        {
          //some headers ..
        }
      )
      .then(res => {
        const sourcePath = `${RNFetchBlob.fs.dirs.DocumentDir}/chinook.zip`;
        const targetPath = `${RNFetchBlob.fs.dirs.DocumentDir}/unzipped`;
        unzip(sourcePath, targetPath)
          .then(path => {
            console.log(`unzip completed at ${RNFetchBlob.fs.dirs.DocumentDir}`);
            let errorCB = err => {
              console.log("SQL Error: " + err);
            };
            let successCB = () => {
              console.log("SQL executed fine");
            };
            let openCB = () => {
              console.log("Database OPENED");
            };
            console.log("HEEEEEEY",`${RNFetchBlob.fs.dirs.DocumentDir}`)
            var db = SQLite.openDatabase(
             { name:"chinook.db",createFromLocation :"/unzipped/chinook.db",readOnly:true,location:"Library"},
              openCB,
              errorCB
            );
            // db.transaction(tx=>{
            //     tx.executeSql("CREATE TABLE Employees (Id Int, name Varchar);")
            // })
            // db.transaction(tx => {
            //   tx.executeSql("INSERT INTO Employees (name) VALUES ('Sandy')", [], (tx, results) => {
            //   });
            // });
            console.log(db)
            db.transaction(tx => {
                console.log("tx",tx)
              tx.executeSql("SELECT * FROM  employees;",[], (tx, results) => {
                console.log("Query completed");
                console.log(results)
                // // Get rows with Web SQL Database spec compliance.
                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                  let row = results.rows.item(i);
                  console.log(`Employee name: ${row.FirstName}`);
                }
                // // Alternatively, you can use the non-standard raw method.
                // let rows = results.rows.raw(); // shallow copy of rows Array
                // rows.map(row =>
                //   console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`)
                // );
              });
            });
          })
          .catch(error => {
            console.log(error);
          });
        console.log(res);
        // the temp file path
        console.log("The file saved to ", res.path());
      });
  }
  getTokenCallBack = async (response, err) => {
    if (response.data.token) {
      this.handleGetBlueViewsData();
    } else if (err) {
      console.log(err);
    }
  };

  getBlueViewsDataCallBack = async (response, err) => {
    if (response) {
      let data = response;
      theArray = [];
      for (let i = 0; i < data.data.length; i++) {
        theData = new Services(data.data[i]);
        theArray.push(theData);
      }
      var newdata = Object.assign({}, theArray);
      this.setState({ enteries: newdata });
    } else if (err) {
      console.log(err);
    }
  };

  handleGetToken() {
    api.request("token", this.getTokenCallBack);
  }
  handleGetBlueViewsData() {
    api.request("services", this.getBlueViewsDataCallBack);
  }
  render() {
    let order = Object.keys(this.state.enteries);
    return this.state.enteries == {} ? (
      <Spinner />
    ) : (
      <SortableListView
        style={{ flex: 1 }}
        data={this.state.enteries}
        order={order}
        onRowMoved={e => {
          order.splice(e.to, 0, order.splice(e.from, 1)[0]);
          this.forceUpdate();
          console.log(e);
        }}
        renderRow={row => (
          <BlueView bigText={`${row.name}`} withArrow smallText={`${row.id}`} />
        )}
      />
    );
  }
}
// ios{
  // RNFetchBlob.fs
    //   .ls(RNFetchBlob.fs.dirs.DocumentDir+"/unzipped")
    //   // files will an array contains filenames
    //   .then(files => {
    //     console.log(files);
    //   });

//     RNFetchBlob.config({
//       // add this option that makes response data to be stored as a file,
//       // this is much more performant.
//       fileCache: true,
//       path: RNFetchBlob.fs.dirs.DocumentDir
//     })
//       .fetch(
//         "GET",
//         "http://www.sqlitetutorial.net/wp-content/uploads/2018/03/chinook.zip",
//         {
//           //some headers ..
//         }
//       )
//       .then(res => {
//         const sourcePath = `${RNFetchBlob.fs.dirs.DocumentDir}/chinook.zip`;
//         const targetPath = `${RNFetchBlob.fs.dirs.DocumentDir}/unzipped`;
//         unzip(sourcePath, targetPath)
//           .then(path => {
//             console.log(`unzip completed at ${RNFetchBlob.fs.dirs.DocumentDir}`);
//             let errorCB = err => {
//               console.log("SQL Error: " + err);
//             };
//             let successCB = () => {
//               console.log("SQL executed fine");
//             };
//             let openCB = () => {
//               console.log("Database OPENED");
//             };
//             console.log("HEEEEEEY",`${RNFetchBlob.fs.dirs.DocumentDir}`)
//             var db = SQLite.openDatabase(
//              { name:"chinook.db",createFromLocation :"/unzipped/chinook.db",readOnly:true,location:"Library"},
//               openCB,
//               errorCB
//             );
//             // db.transaction(tx=>{
//             //     tx.executeSql("CREATE TABLE Employees (Id Int, name Varchar);")
//             // })
//             // db.transaction(tx => {
//             //   tx.executeSql("INSERT INTO Employees (name) VALUES ('Sandy')", [], (tx, results) => {
//             //   });
//             // });
//             console.log(db)
//             db.transaction(tx => {
//                 console.log("tx",tx)
//               tx.executeSql("SELECT * FROM  employees;",[], (tx, results) => {
//                 console.log("Query completed");
//                 console.log(results)
//                 // // Get rows with Web SQL Database spec compliance.
//                 var len = results.rows.length;
//                 for (let i = 0; i < len; i++) {
//                   let row = results.rows.item(i);
//                   console.log(`Employee name: ${row.FirstName}`);
//                 }
//                 // // Alternatively, you can use the non-standard raw method.
//                 // let rows = results.rows.raw(); // shallow copy of rows Array
//                 // rows.map(row =>
//                 //   console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`)
//                 // );
//               });
//             });
//           })
//           .catch(error => {
//             console.log(error);
//           });
//         console.log(res);
//         // the temp file path
//         console.log("The file saved to ", res.path());
//       });
// }

export default List;
