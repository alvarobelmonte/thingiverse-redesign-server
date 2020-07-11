const { RESTDataSource } = require('apollo-datasource-rest');

class ThingiverseAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.thingiverse.com/';
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }
  async getNewestThings() {  
    const res = await this.get('newest');
    return res;
  } 
  async getPopularThings() {  
    const res = await this.get('popular');
    return res;
  } 
  async getFeaturedThings() {  
    const res = await this.get('featured');
    return res;
  } 
  async getThing({id}) { 
    const res = await this.get('things/' + id);
    return res;
  } 
}

module.exports = ThingiverseAPI;