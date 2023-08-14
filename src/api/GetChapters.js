import { Axios } from './Axios';

export const GetChapters = (type, callbackFunction) => {
  Axios.get(`/learnings/chapters`, {
    params: {
      type: type,
    },
  })
    .then((res) => {
      callbackFunction(res);
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
