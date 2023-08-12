import { Axios } from './Axios';

export const GetChapter = (currentChapterId, callbackFunction) => {
  Axios.get(`/chapters/${currentChapterId}`, {})
    .then((res) => {
      callbackFunction(res);
      console.log(res.data);
    })

    .catch((error) => {
      // error.response.data.message.map((message) => console.log(message));
      console.log(error);
    });
};
