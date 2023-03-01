import * as Yup from 'yup';

export const getInitialValues = (user) => ({
  first: user?.name.first || '',
  last: user?.name.last || '',
  email: user?.email || '',
  phone: user?.phone || '',
  age: user?.age || '',
  eyesColor: user?.eyeColor || '',
  address: user?.address || '',
});

export const getValidationSchema = () =>
  Yup.object({
    first: Yup.string().required('First Name is requiered.'),
    last: Yup.string().required('Last Name is requiered.'),
    email: Yup.string().email().required('Email is requiered.'),
    eyesColor: Yup.string().required('Eyes Color is requiered.'),
    address: Yup.string().required('Address is requiered.'),
  });
