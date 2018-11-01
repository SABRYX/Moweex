import { createStackNavigator } from "react-navigation";

import DashBoardTopic from "./src/screens/dashboardtopic/DashBoardTopic";

const App = createStackNavigator({
  DashBoardTopic: {
    screen: DashBoardTopic,
    navigationOptions: {
      header: null
    }
  }
});

export default App;
