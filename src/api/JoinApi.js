import { Axios } from './Axios';

const JoinApi = (email, password) => {
  Axios.post(`/auto/join`),
    {
      email: email,
      password: password,
    }
      .then((res) => {
        callbackFunction(res);
      })
      .catch((error) => {
        console.log(error);
      });
};
