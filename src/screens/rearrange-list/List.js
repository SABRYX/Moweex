import SortableListView from "react-native-sortable-listview";
import React from "react";
import BlueView from "../../components/blue-view/BlueView";
import { Spinner } from "native-base";
import { Services } from "../../models/Services";
import { customFetch } from "../../api/FetchFunction";
import api from "../../api/api-class/ApiController";
import { Routes } from "../../api/api-class/Routes";
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
  theCallBack = async response => {
    console.log(response);
    if (response.data.token) {
      this.setState({ token: response.data.token });
      this.handleGetBlueViewsData();
    } else {
      let data = response;
      theArray = [];
      for (let i = 0; i < data.data.length; i++) {
        theData = new Services(data.data[i]);
        theArray.push(theData);
      }
      var newdata = Object.assign({}, theArray);
      this.setState({ enteries: newdata });
    }
  };
  handleGetToken() {
    api.request(Routes.token, "", this.theCallBack);
  }
  handleGetBlueViewsData() {
    api.request(Routes.services, this.state.token, this.theCallBack);
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
