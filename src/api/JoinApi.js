import { Axios } from './Axios';

export const JoinApi = (data, callbackFunctions) => {
  const { navigateSuccess } = callbackFunctions;
  Axios.post(`/auth/join`, {
    nickname: data.nickname,
    email: data.email,
    password: data.pw,
  })
    .then((res) => {
      console.log(res);
      navigateSuccess();
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        // 404 에러가 발생한 경우
        console.log('error404.');
      } else if (error.response && error.response.status === 409) {
        alert('이미 사용중인 이메일입니다. 다른 이메일을 입력해주세요.');
      } else alert('예상치 못한 오류가 발생했습니다.');
    });
};
