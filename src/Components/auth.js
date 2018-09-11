import rp from "request-promise";

export default {
  getHubId() {
    return 1;
  },
  getHost() {
    return "http://10.25.35.112:3001";
  },
  getData(query) {
    return rp({
      method: "GET",
      uri: `${this.getHost()}/graphql`,
      qs: { query },
      json: true
    });
  }
};
