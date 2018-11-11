const MAIN_SERVER_URL = "https://t-employmentinfo-steel.voestalpine.com/api/";
const SERVICE_URL = 'services';
class Api {
	static sharedInstance;
	token;
    route = {
		url: MAIN_SERVER_URL,
		method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: ``
        }
    };
    constructor(){}
	static getSharedInstance(){
		if(!this.sharedInstance){
			this.sharedInstance = new Api();
		}
		return this.sharedInstance;
	}

	
	request(Route,token ,callback){
		console.log(this.token)
		//create url
		this.route.url =MAIN_SERVER_URL+ Route.url ;
		// Object.entries(params).forEach((key)=>{
		// 	this.route.url += key+'='+params[key]+'&'
		// })
		//setting token
		if(Route.auth){
			this.route.headers.Authorization = `bearer ${token}`	
		}
		//setting method
		this.route.method = Route.method;
		console.log('this.route: ', this.route);
		//making the call
		let CallBack = callback
		fetch(this.route.url, { method:Route.method, headers: this.route.headers})
			.then(response => {
				console.log(response)
				CallBack(JSON.parse(response._bodyText));
			})
			.catch(error => {
				console.error("ERROR: ", error);
				CallBack(error, null)
			});
	}
    getRoute(route) {
        return MainApi[route];
    }

    setToken(token) {
        this.token = token;
	}
}
const api = Api.getSharedInstance();

export default api;
