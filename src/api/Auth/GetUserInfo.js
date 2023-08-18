import { Axios } from '../Axios';

export const GetUserInfo = (callbackFunction) => {
  Axios.get(`/users`)
    .then((res) => {
      callbackFunction(res);
    })
    .catch((error) => {
    });
};
