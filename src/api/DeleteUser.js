import { Axios } from './Axios';

export const DeleteUser = (accessToken, callbackFunction) => {
  Axios.delete(`/users`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => {
      console.log(res);
      callbackFunction();
    })
    .catch((error) => {
      console.log(error);
    });
};
