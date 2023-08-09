import { Axios } from './Axios';

export const GetChapter = (id, accessToken, callbackFunction) => {
  Axios.get(`/chapters/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => {
      callbackFunction(res);
      console.log(res.data);
    })

    .catch((error) => {
      // error.response.data.message.map((message) => console.log(message));
      console.log(error);
    });
};
