import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const PersonalDetails = ({ next, data }) => {
  const formik = useFormik({
    initialValues: data,
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
    onSubmit: (values) => {
      next(values);
    },
  });

  return (
    <div className="grid w-full h-full grid-cols-2">
      <div className="overflow-hidden ">
        <img
          src="/images/personal-detail.jpg"
          alt=""
          className="object-contain object-cover w-full h-full"
        />
      </div>

      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 p-4">
        <h3 className="font-bold text-center">Personal Detail</h3>
        <div className="flex flex-col ">
          <label className="font-semibold text-gray-700 ">First Name</label>
          <input
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className="block w-full px-4 py-3 bg-gray-300 border-transparent rounded-lg peer focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
          />
          {formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div className="flex flex-col ">
          <label className="font-semibold text-gray-700 ">Last Name</label>
          <input
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className="block w-full px-4 py-3 text-sm bg-gray-300 border-transparent rounded-lg peer focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
          />
          {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
        </div>

        <div className="flex flex-col ">
          <label className="font-semibold text-gray-700 ">Email</label>
          <input
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="block w-full px-4 py-3 text-sm bg-gray-300 border-transparent rounded-lg peer focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none "
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default PersonalDetails;
