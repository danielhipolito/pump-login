import React from 'react';
import PropTypes from 'prop-types';
import {useFormik} from 'formik';
import {PrimaryButton} from '../../Buttons/PrimaryButton';
import {PumpInput, PumpText} from '../../styledComponents.styled';
import secondBg from '../../../assets/images/backgrounds/bg-2.png';
import mainLogo from '../../../assets/images/logos/main-logo.png';
import {ContainerWithImage} from '../../common/ContainerWithImage';
import ClipLoader from 'react-spinners/ClipLoader';
import {getInitialValues, getValidationSchema} from './LoginForm.form';
import {InputError} from '../../common/InputError';
import {loginApi, setAccessToken, setRefreshToken} from '../../../api/auth';
import {useAuth} from '../../../hooks/useAuth';
import {BRAND_COLORS} from '../../../utlis/constants';

export const LoginForm = ({onForgot}) => {
  const {login} = useAuth();
  const bgProperties = {
    src: secondBg,
    alt: 'login white background',
    style: {
      borderTopRightRadius: '32px',
      borderBottomRightRadius: '32px',
      borderRight: '1px solid gray',
    },
  };

  const logIn = async (userCredentials) => {
    try {
      const response = await loginApi(userCredentials);
      const accessToken = response.data.access;
      login(accessToken);
      setAccessToken(accessToken);
      setRefreshToken(response.data.refresh);
      window.location.replace('/');
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),
    validateOnChange: false,
    onSubmit: logIn,
  });

  return (
    <ContainerWithImage image={bgProperties}>
      <div className="col-lg-6 text-center d-flex justify-content-center align-items-lg-start align-items-center">
        <div>
          <img
            src={mainLogo}
            alt="main logo"
            className="px-5 my-md-5 my-4 pointer"
            style={{
              maxWidth: '210px',
            }}
          />
          <form onSubmit={formik.handleSubmit}>
            <InputError error={formik.errors.email} />
            <PumpInput
              type="text"
              placeholder="Enter email ..."
              className="form-control mb-4 mt-2"
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
            />
            <InputError error={formik.errors.password} />
            <PumpInput
              type="password"
              placeholder="Enter Password  ..."
              className="form-control mb-4"
              name="password"
              onChange={formik.handleChange}
            />
            {formik.isSubmitting ? (
              <ClipLoader
                color={BRAND_COLORS.primary}
                loading={true}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
                className="mt-5"
              />
            ) : (
              <PrimaryButton
                text="LOG IN"
                customClass="mt-xl-5 mt-3 mb-4"
                type="submit"
              />
            )}
          </form>
          <a href="#" className="py-3 d-lg-none d-block" onClick={onForgot}>
            <PumpText fontWeight="700" textAlign="center">
              need help ?
            </PumpText>
          </a>
        </div>
      </div>
    </ContainerWithImage>
  );
};

LoginForm.propTypes = {
  onForgot: PropTypes.func,
};
