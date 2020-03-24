import axios from 'axios';

// Projects
export const getProjectListDataRequest = () => {
  return axios.get('/v1/projects').then(response => response.data)
};

export const getProjectDescriptionDataRequest = (id) => {
  return axios.get(`/v1/projects/${id}/description`).then(response => response.data)
};

export const createProjectDataRequest = (project) => {
  return axios.post(`/v1/projects/save`, project).then(response => response.data)
};

export const deleteProjectRequest = (id) => {
  return axios.delete(`/v1/projects/${id}/delete`).then(response => response.data)
};

// Contractors
export const getContractListDataRequest = () => {
  return axios.get('/v1/contractors').then(response => response.data)
};

export const createContractorDataRequest = (contractor) => {
  return axios.post(`/v1/contractors/save`, contractor).then(response => response.data)
};

export const getContractorDescriptionDataRequest = (id) => {
  return axios.get(`/v1/contractors/${id}/description`).then(response => response.data)
};

export const deleteContractorRequest = (id) => {
  return axios.delete(`/v1/contractors/${id}/delete`).then(response => response.data)
};
