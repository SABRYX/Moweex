import { createStackNavigator } from "react-navigation";

import DashBoardTopic from "./src/screens/dashboard-topic/DashboardTopic";
import NewsOverview from "./src/screens/news-overview/NewsOverview";
import Services from "./src/screens/services/Services";
import CalendarPicker from "./src/screens/calendar/CalendarPicker";
import List from "./src/screens/rearrange-list/List";
const App = createStackNavigator({
  CalendarPicker:{screen:CalendarPicker},
  DashBoardTopic: {
    screen: DashBoardTopic
  },
  NewsOverview: { screen: NewsOverview },
  Services:{screen:Services},
  List:{screen:List}
});

export default App;
