import * as Yup from 'yup';

export const getInitialValues = () => ({userName: '', password: ''});

export const getValidationSchema = () =>
  Yup.object({
    userName: Yup.string().required('Username is requiered.'),
    password: Yup.string().required('Password is requiered.'),
  });
