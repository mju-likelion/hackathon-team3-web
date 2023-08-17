import { Axios } from '../Axios';

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
    })
    .catch((error) => {
    });
};
