import { Axios } from './Axios';

export const PostScoring = (
  problemId,
  accessToken,
  answer,
  callbackFunction
) => {
  Axios.post(
    `/problems/${problemId}/submit`,
    {
      answer: answer, // body에 보낼 데이터를 여기에 추가
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )
    .then((res) => {
      callbackFunction(res);
    })

    .catch((error) => {
      // error.response.data.message.map((message) => console.log(message));
      console.log(error);
    });
};
