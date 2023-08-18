import { Axios } from '../Axios';

export const PatchPassword = (oldPassword, password, callbackFunction) => {
  const { changedSuccess, changedError } = callbackFunction;
  Axios.patch(`/users/password`, { oldPassword, password }, {})
    .then((res) => {
      callbackFunction();
    })
    .catch((error) => {
      changedSuccess();
    })
    .catch((error) => {
      changedError(error);
    });
};
