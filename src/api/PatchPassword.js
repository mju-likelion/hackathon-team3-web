import { Axios } from './Axios';

export const PatchPassword = (
  oldPassword,
  password,
  accessToken,
  callbackFunction
) => {
  Axios.patch(
    `/users/password`,
    { oldPassword, password },
    {
      // headers: {
      //   Authorization: `Bearer ${accessToken}`,
      // },
    }
  )
    .then((res) => {
      console.log(res);
      callbackFunction();
    })
    .catch((error) => {
      console.log(error);
    });
};
