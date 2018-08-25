// neworking.js
export const makeGetRequest = url => {
  return fetch(url).then(response => response.json());
};
