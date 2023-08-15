import { Axios } from './Axios';

export const LoginApi = (data, callbackFunctions) => {
  const { navigateSuccess, navigateError } = callbackFunctions;
  Axios.post(`/auth/login`, {
    email: data.email,
    password: data.pw,
  })
    .then((res) => {
      navigateSuccess();
      console.log(res);
    })
    .catch((error) => {
      navigateError(error);
      console.log(error);
    });
};
