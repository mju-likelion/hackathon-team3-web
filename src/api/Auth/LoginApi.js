import { Axios } from '../Axios';

export const LoginApi = (data, callbackFunctions) => {
  const { navigateSuccess, navigateError } = callbackFunctions;
  Axios.post(`/auth/login`, {
    email: data.email,
    password: data.pw,
  })
    .then((res) => {
      navigateSuccess();
    })
    .catch((error) => {
      navigateError(error);
    });
};
