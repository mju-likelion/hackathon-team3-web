import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup
    .string()
    .required('사용하실 이메일을 입력해주세요.')
    .email('이메일형식에 맞지 않습니다.'),
  pw: yup
    .string()
    .required(
      '비밀번호를 영문과 숫자, 특수기호를 조합하여 8~14 글자 이하로 입력해주세요.'
    )
    .max(14, '비밀번호는 최대 14자리로 입력해주세요.')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}[^\s]*$/,
      '영문과 숫자, 특수기호를 조합하여 8~14 글자 이하로 입력해주세요.'
    ),
  checkPw: yup
    .string()
    .oneOf([yup.ref('pw'), null], '비밀번호가 일치하지 않습니다.')
    .required('입력하신 비밀번호를 한번 더 입력해주세요.'),
});
