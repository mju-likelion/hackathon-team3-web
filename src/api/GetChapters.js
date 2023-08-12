import { Axios } from './Axios';

export const GetChapters = (type, accessToken, callbackFunction) => {
  Axios.get(`/learnings/chapters`, {
    // headers: {
    //   Authorization: `Bearer ${accessToken}`,
    // },
    params: {
      type: type,
    },
  })
    .then((res) => {
      callbackFunction(res);
    })

    .catch((error) => {
      // error.response.data.message.map((message) => console.log(message));
      console.log(error);
    });
};
