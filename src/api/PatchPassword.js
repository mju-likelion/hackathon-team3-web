import { Axios } from './Axios';

export const PatchPassword = (oldPassword, password, callbackFunction) => {
  Axios.patch(`/users/password`, { oldPassword, password }, {})
    .then((res) => {
      callbackFunction();
    })
    .catch((error) => {
    });
};
