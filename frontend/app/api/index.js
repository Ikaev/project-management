import axios from 'axios';
// import { getAuthenticatedSuccess } from '../component/main/duck';
import store from '../store';

// axios.interceptors.response.use(null, function(error) {
//   console.log(error.response)
//   if (error.response.status === 401) {
//
//     store.dispatch(getAuthenticatedSuccess(false))
//   }
//   return Promise.reject(error);
// });

// Auth
export const getAuthUserRequest = () => {
  return axios.get('/v1/auth/auth_user')
};

export const authLoginRequest = data => {
  return axios.post('/v1/auth/login', data)
};

export const authLogoutRequest = () => {
  return axios.get('/v1/auth/logout')
};

export const registrationUserRequest = (data) => {
  return axios.post('/v1/auth/register', data)
}

// Projects
export const getProjectListDataRequest = () => {
  return axios.get('/v1/projects')
};

export const getProjectDescriptionDataRequest = id => axios.get(`/v1/projects/${id}/description`);


export const createProjectDataRequest = project => axios.post(`/v1/projects/save`, project);


export const deleteProjectRequest = id => axios.delete(`/v1/projects/${id}/delete`);

// Contractors
export const getContractListDataRequest = () => axios.get('/v1/contractors');


export const createContractorDataRequest = contractor => axios.post(`/v1/contractors/save`, contractor);


export const getContractorDescriptionDataRequest = id => axios.get(`/v1/contractors/${id}/description`);


export const deleteContractorRequest = id => axios.delete(`/v1/contractors/${id}/delete`);

