import axios from 'axios';

export const getProjectListDataRequest = () => {
  return axios.get('/v1/projects').then(response => response.data)
};

export const getProjectDescriptionDataRequest = (id) => {
  return axios.get(`/v1/projects/${id}/description`).then(response => response.data)
};

export const saveProjectDataRequest = (project) => {
  return axios.post(`/v1/projects/save`, project).then(response => response.data)
};

export const getContractListDataRequest = () => {
  return axios.get('/v1/contractors').then(response => response.data)
}