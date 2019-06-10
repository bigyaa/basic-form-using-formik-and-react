import React from 'react';
import {ErrorMessage, Formik} from "formik";
import * as Yup from 'yup';

export default class Form extends React.Component {
    handleRadioChange = (e, setFieldValue) => {
        setFieldValue(e.target.name, e.target.value);
    };

    render() {
        return (
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    gender: '',
                    dob: '',
                    street: '',
                    city: '',
                    country: '',
                    permanentAddress: '',
                    streetPermanent: '',
                    cityPermanent: '',
                    countryPermanent: ''
                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                        .required("*Required")
                        .min(2, "*Too Short")
                        .max(30, "*Too Long"),

                    lastName: Yup.string()
                        .required("*Required")
                        .min(2, "*Too Short")
                        .max(30, "*Too Long"),

                    email: Yup.string()
                        .email("*Incorrect format")
                        .required("*Required"),
                    gender: Yup.string()
                        .required("*Required"),
                    dob: Yup.string()
                        .required("*Required"),
                    street: Yup.string()
                        .required("*Required"),
                    city: Yup.string()
                        .required("*Required"),
                    country: Yup.string()
                        .required("*Required"),
                    permanentAddress: Yup.boolean(),
                    streetPermanent: Yup.string()
                        .when('permanentAddress', {
                            is: true,
                            then: Yup.string().required("*Required")
                        }),
                    cityPermanent: Yup.string()
                        .when('permanentAddress', {
                            is: true,
                            then: Yup.string().required("*Required")
                        }),
                    countryPermanent: Yup.string()
                        .when('permanentAddress', {
                            is: true,
                            then: Yup.string().required("*Required")
                        })
                })}
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values);
                    setSubmitting(false);
                }}>
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        setFieldValue,
                        handleBlur,
                        handleSubmit,
                        handleReset,
                    } = props;
                    return (
                        <form className="container border p-4" onSubmit={handleSubmit}>
                            <h2 className="text-center pb-4">Employee Information</h2>
                            <div className="form-group row">
                                <label htmlFor="firstName" className="col-md-2">Name</label>
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="form-control mr-2"
                                        placeholder="First Name"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <ErrorMessage className="input-feedback" name="firstName" component="div"/>
                                </div>
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="form-control"
                                        placeholder="Last Name"
                                        value={values.lastName}
                                        onChange={handleChange}
                                    />
                                    <ErrorMessage className="input-feedback" name="lastName" component="div"/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="email" className="col-sm-2">Email</label>
                                <div className="col">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="example@abc.com"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    <ErrorMessage className="input-feedback" name="email" component="div"/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="gender" className="col-sm-2">Gender</label>
                                <div className="col">
                                    <div className="custom-control custom-radio col-sm-5">
                                        <input
                                            type="radio"
                                            id="male"
                                            name="gender"
                                            className="custom-control-input"
                                            value="male"
                                            onChange={(e) => this.handleRadioChange(e, setFieldValue)}
                                        />
                                        <label htmlFor="male" className="custom-control-label">Male</label>
                                    </div>
                                    <div className="custom-control custom-radio col-sm-5">
                                        <input
                                            type="radio"
                                            id="female"
                                            name="gender"
                                            className="custom-control-input"
                                            value="female"
                                            onChange={(e) => this.handleRadioChange(e, setFieldValue)}
                                        />
                                        <label htmlFor="female" className="custom-control-label">Female</label>
                                    </div>
                                </div>
                                <ErrorMessage className="input-feedback left-align" name="gender" component="div"/>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="dob" className="col-sm-2">Date of Birth</label>
                                <div className="col-sm-10">
                                    <input
                                        type="date"
                                        id="dob"
                                        name="dob"
                                        className="form-control"
                                        value={values.dob}
                                        onChange={handleChange}
                                    />
                                    <ErrorMessage className="input-feedback" name="dob" component="div"/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="streetPermanent" className="col-sm-2">Temporary Address</label>
                                <div className="col-sm-3">
                                    <input
                                        type="text"
                                        id="street"
                                        name="street"
                                        className="form-control"
                                        placeholder="Street"
                                        value={values.street}
                                        onChange={handleChange}
                                    />
                                    <ErrorMessage className="input-feedback" name="street" component="div"/>
                                </div>
                                <div className="col-sm-3 col-sm-offset-1">
                                    <select
                                        id="city"
                                        name="city"
                                        className="form-control"
                                        value={values.city}
                                        onChange={handleChange}
                                    >
                                        <option defaultValue="city" hidden>City</option>
                                        <option value="kathmandu">Kathmandu</option>
                                        <option value="lalitpur">Lalitpur</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <ErrorMessage className="input-feedback" name="city" component="div"/>
                                </div>
                                <div className="col-sm-3 col-sm-offset-1">
                                    <input
                                        type="text"
                                        id="country"
                                        name="country"
                                        className="form-control"
                                        placeholder="Country"
                                        value={values.country}
                                        onChange={handleChange}
                                    />
                                    <ErrorMessage className="input-feedback" name="country" component="div"/>
                                </div>
                            </div>

                            <br/>

                            <div className="form-group row custom-control custom-checkbox col-sm-2 text-center mx-auto">
                                <input
                                    type="checkbox"
                                    id="permanentAddress"
                                    name="permanentAddress"
                                    className="custom-control-input"
                                    value={values.permanentAddress}
                                    onChange={handleChange}
                                    data-toggle="collapse"
                                    data-target="#permanentAddressCollapse"
                                />
                                <label htmlFor="permanentAddress" className="custom-control-label">
                                    Permanent Address
                                </label>
                            </div>

                            <div className="collapse" id="permanentAddressCollapse">
                                <div className="form-group row">
                                    <div className="col mr-2">
                                        <input
                                            type="text"
                                            id="streetPermanent"
                                            name="streetPermanent"
                                            className="form-control"
                                            placeholder="Street"
                                            value={values.streetPermanent}
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage
                                            className="input-feedback"
                                            name="streetPermanent"
                                            component="div"
                                        />
                                    </div>
                                    <div className="col mr-2">
                                        <select
                                            id="cityPermanent"
                                            name="cityPermanent"
                                            className="form-control"
                                            value={values.cityPermanent}
                                            onChange={handleChange}
                                        >
                                            <option value="kathmandu">Kathmandu</option>
                                            <option value="lalitpur">Lalitpur</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <ErrorMessage className="input-feedback" name="cityPermanent" component="div"/>
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            id="countryPermanent"
                                            name="countryPermanent"
                                            className="form-control"
                                            placeholder="Country"
                                            value={values.countryPermanent}
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage
                                            className="input-feedback"
                                            name="countryPermanent"
                                            component="div"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg mt-5"
                                    disabled={isSubmitting}
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    )
                }}
            </Formik>
        );
    }
}