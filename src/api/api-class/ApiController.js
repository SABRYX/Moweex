import { Routes } from "./Routes";
import { AsyncStorage } from "react-native";
const MAIN_SERVER_URL = "https://t-employmentinfo-steel.voestalpine.com/api/";
class Api {
  static sharedInstance;
  token;
  route = {
    url: MAIN_SERVER_URL,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: ``
    }
  };
  constructor() {}
  static getSharedInstance() {
    if (!this.sharedInstance) {
      this.sharedInstance = new Api();
    }
    return this.sharedInstance;
  }

  request(Route, callback) {
    //create url
    let route = this.getRoute(Route);
	if (route.auth && this.route.headers.Authorization === "") {
        //get token and set token
        this.getToken().then(token => {
			// console.log("token",token)
          this.route.headers.Authorization = `bearer ${token}`;
          this.request(Route, callback);
        });
      } else {
        this.route.url = MAIN_SERVER_URL + route.url;
        //setting method
        this.route.method = route.method;
        //making the call
        fetch(this.route.url, {
          method: this.route.method,
          headers: this.route.headers
        })
          .then(async response => {
            callback(JSON.parse(response._bodyText),null);
            let responseParsed = JSON.parse(response._bodyText);
            if (responseParsed.data.token) {
              try {
                await AsyncStorage.setItem("token", responseParsed.data.token);
              } catch (error) {
                // Error saving data
                callback(null,error);
              }
            }
          })
          .catch(error => {
            console.error("ERROR: ", error);
            callback(null,error);
          });
      }
  }
  getRoute(route) {
    return Routes[route];
  };

  getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      // console.log(value);
      if (value !== null) {
        return value;
      }
    } catch (error) {
      // Error retrieving data
    }
  };
}
const api = Api.getSharedInstance();

export default api;
