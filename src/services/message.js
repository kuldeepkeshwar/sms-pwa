import axios from 'axios';


export const getList = (filter) => {
  return axios.get('/api/v1/messages', {
    params: filter,
  }).then(res => res.data);
};
export const getMessageThread = (senderId) => {
  return axios.get('/api/v1/messages/thread', {
    params: {senderId},
  }).then(res => res.data);
};
