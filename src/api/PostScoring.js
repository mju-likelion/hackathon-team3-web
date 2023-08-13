import { Axios } from './Axios';

export const PostScoring = (
  problemId,
  answer,
  currentTab,
  callbackFunction
) => {
  Axios.post(`/problems/${problemId}/submit`, {
    answer: answer, // body에 보낼 데이터를 여기에 추가
    currentTab: currentTab,
  })
    .then((res) => {
      callbackFunction(res);
      console.log(res);
      console.log(currentTab);
    })
    .catch((error) => {
      console.log(error);
    });
};
