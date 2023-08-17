import { Axios } from './Axios';

export const LogoutApi = (data, callbackFunctions) => {
  const { navigateSuccess, navigateError } = callbackFunctions;
  Axios.post(`/auth/logout`, {
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
