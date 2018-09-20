// __tests__/superagent.js
class request {
  get() {
    return new Promise((resolve, reject) => {
      resolve({ body: { name: 'Lando Kadrisian' } });
    });
  }
}

export default new request();
