import { Axios } from './Axios';

export const DeleteUser = (callbackFunction) => {
  Axios.delete(`/users`, {})
    .then((res) => {
      console.log(res);
      callbackFunction();
    })
    .catch((error) => {
      console.log(error);
    });
};
