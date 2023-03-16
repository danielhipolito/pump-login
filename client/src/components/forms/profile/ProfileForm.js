import React, {useState} from 'react';
import {useFormik} from 'formik';
import PropTypes from 'prop-types';
import {PrimaryButton} from '../../Buttons/PrimaryButton';
import {PumpInput, PumpText} from '../../styledComponents.styled';
import {getInitialValues, getValidationSchema} from './ProfileForm.form';
import {InputError} from '../../common/InputError';
import PhoneInput from 'react-phone-input-2';
import DatePicker from 'react-datepicker';
import {getAccessToken} from '../../../api/auth';
import moment from 'moment/moment';
import {updateProfileFromApi} from '../../../api/profile';
import 'react-phone-input-2/lib/style.css';
import 'react-datepicker/dist/react-datepicker.css';
import {BRAND_COLORS, DEFAULT_ERROR} from '../../../utlis/constants';
import ClipLoader from 'react-spinners/ClipLoader';

export const ProfileForm = ({initialData}) => {
  const {phone, age} = initialData;
  const accessToken = getAccessToken();
  let initialAge = moment().diff(60, 'years');

  if (age) {
    initialAge = moment().subtract(parseInt(age), 'years').toDate();
  }
  const [startDate, setStartDate] = useState(initialAge);
  const [customInputs, setCustomInputs] = useState({
    phone: phone,
    age: initialAge,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneNumber = (value) => {
    setCustomInputs({...customInputs, ['phone']: value});
  };

  const handleAge = (value) => {
    setStartDate(value);
    setCustomInputs({
      ...customInputs,
      ['age']: moment().diff(moment(value), 'years'),
    });
  };

  const updateProfile = async (formikData) => {
    const fullData = {...formikData, ...customInputs};
    fullData.name = {first: fullData.first, last: fullData.last};
    setIsLoading(true);

    let response;
    try {
      response = await updateProfileFromApi(fullData, accessToken);
      console.log(response);
    } catch (err) {
      alert(DEFAULT_ERROR);
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: getInitialValues(initialData),
    validationSchema: getValidationSchema(initialData),
    validateOnChange: false,
    onSubmit: updateProfile,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row m-0 d-flex justify-content-center align-items-baseline">
        <PumpText color="black" fontWeight="700" className="ps-3 mb-2">
          Profile Information
        </PumpText>
        <div className="col-md-6">
          <InputError error={formik.errors.first} />
          <PumpInput
            type="text"
            placeholder="First Name ..."
            className="form-control mb-4 mt-2"
            onChange={formik.handleChange}
            value={formik.values.first}
            name="first"
          />
        </div>
        <div className="col-md-6">
          <InputError error={formik.errors.last} />
          <PumpInput
            type="text"
            placeholder="Last Name  ..."
            className="form-control mb-4 mt-2"
            name="last"
            value={formik.values.last}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-md-6">
          <InputError error={formik.errors.email} />
          <PumpInput
            type="email"
            placeholder="Email ..."
            className="form-control mb-4"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-md-6">
          {!customInputs.phone ? (
            <InputError error="Phone Number is requiered" />
          ) : null}
          <PhoneInput
            country={'us'}
            // inputProps={{
            //   name: 'phone',
            // }}
            className="pump-input"
            value={customInputs.phone}
            onChange={handlePhoneNumber}
          />
        </div>
        <div className="col-md-6">
          {!customInputs.age ? (
            <InputError error="BirthDate is requiered" />
          ) : null}
          <DatePicker
            selected={startDate}
            onChange={handleAge}
            peekNextMonth
            maxDate={new Date()}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            popperPlacement="top"
            className="form-control"
            name="age"
          />
        </div>
        <div className="col-md-6">
          <InputError error={formik.errors.eyesColor} />
          <PumpInput
            type="text"
            placeholder="Eyes Color ..."
            className="form-control mb-md-4 mt-2"
            onChange={formik.handleChange}
            value={formik.values.eyesColor}
            name="eyesColor"
          />
        </div>
        <div className="col-md-11">
          <InputError error={formik.errors.address} />
          <PumpInput
            type="text"
            placeholder="Address ..."
            className="form-control mb-md-4 mb-2 mt-2"
            onChange={formik.handleChange}
            value={formik.values.address}
            name="address"
            style={{minHeight: '60px'}}
          />
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          {isLoading ? (
            <ClipLoader
              color={BRAND_COLORS.primary}
              loading={true}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
              className="my-3"
            />
          ) : (
            <PrimaryButton
              text="SAVE CHANGES"
              customClass="mt-xl-5 mt-3 mb-md-4 mb-2"
              type="submit"
            />
          )}
        </div>
      </div>
    </form>
  );
};

ProfileForm.propTypes = {
  initialData: PropTypes.object,
};
