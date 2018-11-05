import { createStackNavigator } from "react-navigation";

import DashBoardTopic from "./src/screens/dashboard-topic/DashboardTopic";
import NewsOverview from "./src/screens/news-overview/NewsOverview";
import Services from "./src/screens/services/Services";
import CalendarPicker from "./src/screens/calendar/CalendarPicker";
const App = createStackNavigator({
  DashBoardTopic: {
    screen: DashBoardTopic
  },
  NewsOverview: { screen: NewsOverview },
  Services:{screen:Services},
  CalendarPicker:{screen:CalendarPicker}
});

export default App;
