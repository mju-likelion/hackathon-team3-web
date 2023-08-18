import { Axios } from '../Axios';

export const DeleteUser = (callbackFunction) => {
  Axios.delete(`/users`, {})
    .then((res) => {
      callbackFunction();
    })
    .catch((error) => {
    });
};
