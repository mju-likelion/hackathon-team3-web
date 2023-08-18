import { Axios } from '../Axios';

export const DeleteUser = (callbackFunction) => {
  Axios.delete(`/users`, {})
    .then(() => {
      callbackFunction();
    })
    .catch(() => {
    });
};
