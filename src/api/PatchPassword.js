import { Axios } from './Axios';

export const PatchPassword = (oldPassword, password, callbackFunction) => {
  const { changedSuccess, changedError } = callbackFunction;
  Axios.patch(`/users/password`, { oldPassword, password }, {})
    .then((res) => {
      changedSuccess();
      console.log(res);
    })
    .catch((error) => {
      changedError(error);
      console.log(error);
    });
};
