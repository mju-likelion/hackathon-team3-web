import { Axios } from './Axios';

export const JoinApi = (data, callbackFunctions) => {
  const { navigateSuccess } = callbackFunctions;
  Axios.post(`/auto/join`, {
    nickname: data.nickname,
    email: data.email,
    password: data.password,
  })
    .then((res) => {
      console.log(res);
      navigateSuccess();
    })
    .catch((error) => {
      console.log(error);
    });
};
