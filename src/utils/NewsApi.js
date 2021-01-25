import { API_KEY, NEWS_URL } from './config';

let now = new Date();

const startDate = now.toISOString().slice(0, 10);
now.setDate(now.getDate() - 7);
const finishDate = now.toISOString().slice(0, 10)

export const getNewsArticle = (keyword) => {
  return fetch(`${NEWS_URL}q=${keyword}&from=${finishDate}&to=${startDate}&pageSize=100&apiKey=${API_KEY}`, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
    },
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
}
