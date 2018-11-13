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
      enteries: {},
      newData:[],
      images:[],
      done:false
    };
  }
  componentWillMount() {
    this.handleGetToken();
  }
  componentDidMount() {
    RNFetchBlob.config({
      path: RNFetchBlob.fs.dirs.DocumentDir+"/Countries.db"
    })
      .fetch("GET", "http://52.174.144.135/mob-poc/Countries.db", {
        //some headers ..
      })
      .progress(async (received, total) => {
        await console.log("progress", received / total);
      })
      .then(res => {
        RNFetchBlob.fs
          .ls(RNFetchBlob.fs.dirs.DocumentDir)
          // files will an array contains filenames
          .then(files => {
            console.log(files);
          });
        let errorCB = err => {
          console.log("SQL Error: " + err);
        };
        let successCB = () => {
          console.log("SQL executed fine");
        };
        let openCB = () => {
          console.log("Database OPENED");
        };
        var db = SQLite.openDatabase(
          {
            name: "Countries.db",
            createFromLocation: "/Countries.db"
          },
          openCB,
          errorCB
        );
        console.log(db);
        db.transaction(tx => {
          console.log("tx", tx);
          tx.executeSql(
            "SELECT * FROM  countries;",
            [],
            (tx, results) => {
              console.log("Query completed");
              console.log(results);
              // // Get rows with Web SQL Database spec compliance.
              var len = results.rows.length;
              for (let i = 0; i < len; i++) {
                let row = results.rows.item(i);
                let newArray = this.state.newData
                newArray.push(row)
                this.setState({newData:newArray})

                console.log(`Employee name: ${row.Name}`);
              }
              console.log(this.state.newData)
            },
            err => {
              console.log(err);
            }
          );
        });
        RNFetchBlob.config({
          path: RNFetchBlob.fs.dirs.DocumentDir+"/flags.zip"
        })
          .fetch("GET", "http://52.174.144.135/mob-poc/flags.zip", {
            //some headers ..
          })
          .progress((received, total) => {
            console.log("progress", received / total);
          })
          .then(res => {
            const sourcePath = `${RNFetchBlob.fs.dirs.DocumentDir}/flags.zip`;
            const targetPath = `${RNFetchBlob.fs.dirs.DocumentDir}/flags`;
            unzip(sourcePath, targetPath)
              .then(path => {
                console.log(`unzip completed at ${path}`);
                RNFetchBlob.fs
                .ls(path)
                // files will an array contains filenames
                .then(files => {
                  console.log(files);
                });
              })
              .catch(error => {
                console.log(error);
              });
            console.log("The file saved to ", res.path());
          });
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

export default List;
