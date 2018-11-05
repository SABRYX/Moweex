import { createStackNavigator } from "react-navigation";

import DashBoardTopic from "./src/screens/dashboard-topic/DashboardTopic";
import NewsOverview from "./src/screens/news-overview/NewsOverview";
import Services from "./src/screens/services/Services";
const App = createStackNavigator({
  DashBoardTopic: {
    screen: DashBoardTopic
  },
  NewsOverview: { screen: NewsOverview },
  Services:{screen:Services}
});

export default App;
