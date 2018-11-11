export class Services {
  id;
  name;
  url;
  smallText;
  constructor(data) {
    if (data.name) {
      this.name = data.name;
    }else{
        this.name = ""
    }
    if (data.id) {
      this.id = data.id;
    }else{
        this.id = null
    }
    if (data.url) {
      this.url = data.url;
    }else{
        this.url = ""
    }
    if (data.smallText) {
      this.smallText = data.smallText;
    }else{
        this.smallText = ""
    }
  }
}
