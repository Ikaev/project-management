import axios from 'axios';

export const getProjectListDataRequest = () => {
  return axios.get('/projects').then(response => response.data)
};

export const getProjectDescriptionDataRequest = (id) => {
  return axios.get(`/projects/${id}/description`).then(response => response.data)
};

export const saveProjectDataRequest = (project) => {
  return axios.post(`/projects/save`, project).then(response => response.data)
};

export const getContractListDataRequest = () => {
  return axios.get('/contractors').then(response => response.data)
}