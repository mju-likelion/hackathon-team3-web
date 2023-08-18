import { Axios } from '../Axios';
export const JoinApi = (data, callbackFunctions) => {
  const { navigateSuccess, navigateError } = callbackFunctions;
  Axios.post(`/auth/join`, {
    nickname: data.nickname,
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
