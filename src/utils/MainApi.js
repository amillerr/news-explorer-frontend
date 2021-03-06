import { setToken } from './token';
import { MAIN_URL} from "./config";

function getResponseData(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
}
export const register = (email, password, name) => {
  return fetch(`${MAIN_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
      name
    })
  })
    .then(getResponseData)
}
export const authorize = (email, password) => {
  return fetch(`${MAIN_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then(getResponseData)
    .then((data) => {
      if (data) {
        setToken(data);
        return data;
      } else {
        return;
      }
    })

}
export const checkToken = (token) => {
  return fetch(`${MAIN_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
    .then(getResponseData)
}
export const getMyArticles = (token) => {
  return fetch(`${MAIN_URL}/articles`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
    .then(getResponseData);
}
export const saveArticle = ( { keyword, title, text, date, source, link, image }, token) => {
  const article = { keyword, title, text, date, source, link, image };
  return fetch(`${MAIN_URL}/articles`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(article)
  })
    .then(getResponseData);
}


export const deleteArticle = (articleId, token ) => {
  return fetch(`${MAIN_URL}/articles/${articleId}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
    .then(getResponseData);
}
