import { createStackNavigator } from "react-navigation";

import DashBoardTopic from "./src/screens/dashboard-topic/DashboardTopic";

const App = createStackNavigator({
  DashBoardTopic: {
    screen: DashBoardTopic,
    navigationOptions: {
      header: null
    }
  }
});

export default App;
