export const Routes = {
  token: { url: "guest/login", method: "POST" },
  services: {
    url: "services",
    method: "GET",
    auth: true,
    headers: {
      "Content-Type": "application/json"
    }
  }
};
