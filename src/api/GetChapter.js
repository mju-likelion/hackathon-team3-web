import { Axios } from './Axios';

export const GetChapter = (currentChapterId, callbackFunction) => {
  Axios.get(`/chapters/${currentChapterId}`, {})
    .then((res) => {
      callbackFunction(res);
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
