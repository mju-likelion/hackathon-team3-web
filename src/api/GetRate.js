import { Axios } from './Axios';

export const GetRate = (type, accessToken, callbackFunction) => {
    Axios.get(`/learnings/progress`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
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
