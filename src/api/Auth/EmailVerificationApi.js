// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { Axios } from '../Axios';

export const EmailVerificationApi = (verifyToken, callbackFunctions) => {
  const { navigateSuccess, navigateError } = callbackFunctions;
  Axios.post(`/auth/email-verification?verifyToken=${verifyToken}`)
    .then((res) => {
      navigateSuccess(res);
      console.log(res.data);
    })
    .catch((error) => {
      navigateError(error);
    });
};

export default EmailVerificationApi;
