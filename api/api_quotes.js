const axios = require('axios')

class RandomAPI {
  getRandomJoke() {
    try {
      return axios.get('https://api.chucknorris.io/jokes/random');
    } catch (e) {
      throw Error('something went wrong');
    }
  }
}
module.exports = RandomAPI;
