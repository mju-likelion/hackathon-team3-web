import { Axios } from './Axios';

export const PatchPassword = (oldPassword, password, callbackFunction) => {
  Axios.patch(`/users/password`, { oldPassword, password }, {})
    .then((res) => {
      console.log(res);
      callbackFunction();
    })
    .catch((error) => {
      console.log(error);
    });
};
