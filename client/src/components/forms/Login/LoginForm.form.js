import * as Yup from 'yup';

export const getInitialValues = () => ({email: '', password: ''});

export const getValidationSchema = () =>
  Yup.object({
    email: Yup.string().required('email is requiered.').email('Invalid email'),
    password: Yup.string().required('Password is requiered.'),
  });
