import * as yup from 'yup';

export const schema = yup.object().shape({
  newPassword: yup
    .string()
    .required(
      '변경할 비밀번호를 영문과 숫자, 특수기호를 조합하여 8~14자 사이로 입력해주세요.'
    )
    .max(14, '비밀번호는 최대 14자리로 입력해주세요.')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}[^\s]*$/,
      '영문과 숫자, 특수기호를 조합하여 8~14글자 사이로 입력해주세요.'
    ),
  checkPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호를 한번 더 입력해주세요.'),
});
