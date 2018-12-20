import axios from 'axios'

let base = 'http://127.0.0.1:8082';

export const role = params => {
  return axios.get(`${base}/role/findRole`, {params: params}).then(res => res.data);
};

export const requestLogin = params => {
  return axios.get(`${base}/user/login`, {params: params}).then(res => res.data);
};

export const getPersonList = params => {
  return axios.get(`${base}/user/list`, {params: params});
};

export const getPersonListPage = params => {
  return axios.get(`${base}/user/listpage`, {params: params});
};

export const removePerson = params => {
  return axios.get(`${base}/user/remove`, {params: params});
};

export const batchremovePerson = params => {
  return axios.get(`${base}/user/batchremove`, {params: params});
};

export const editPerson = params => {
  return axios.get(`${base}/user/edit`, {params: params});
};

export const addPerson = params => {
  return axios.get(`${base}/user/add`, {params: params});
};
