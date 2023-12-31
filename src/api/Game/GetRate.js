import { Axios } from '../Axios';

export const GetRate = (type, callbackFunction) => {
  Axios.get(`/learnings/progress`, {
    params: {
      type: type,
    },
  })
    .then((res) => {
      callbackFunction(res);
    })
    .catch((error) => {
    });
};
