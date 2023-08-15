import { Axios } from './Axios';

export const PostScoring = (
  problemId,
  answer,
  currentTab,
  callbackFunction
) => {
  return Axios.post(`/problems/${problemId}/submit`, {
    answer: answer,
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
