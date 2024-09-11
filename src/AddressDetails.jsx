import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddressDetails = ({ next, prev, data }) => {
  const formik = useFormik({
    initialValues: data,
    validationSchema: Yup.object({
      address: Yup.string().required("Address is required"),
      city: Yup.string().required("City is required"),
      zip: Yup.string().required("ZIP code is required"),
    }),
    onSubmit: (values) => {
      next(values);
    },
  });

  return (
    <div className="grid w-full h-full grid-cols-2">
      <div className="overflow-hidden ">
        <img
          src="/images/location.jpg"
          alt=""
          className="object-cover w-full h-full "
        />
      </div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 p-4">
        <h3 className="font-bold text-center">Address Detail</h3>
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 ">Address</label>
          <input
            name="address"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.address}
            className="block w-full px-4 py-3 bg-gray-300 border-transparent rounded-lg peer focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
          />
          {formik.errors.address ? <div>{formik.errors.address}</div> : null}
        </div>

        <div>
          <label className="font-semibold text-gray-700 ">City</label>
          <input
            name="city"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.city}
            className="block w-full px-4 py-3 bg-gray-300 border-transparent rounded-lg peer focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
          />
          {formik.errors.city ? <div>{formik.errors.city}</div> : null}
        </div>

        <div>
          <label className="font-semibold text-gray-700 ">ZIP Code</label>
          <input
            name="zip"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.zip}
            className="block w-full px-4 py-3 bg-gray-300 border-transparent rounded-lg peer focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
          />
          {formik.errors.zip ? <div>{formik.errors.zip}</div> : null}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={prev}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none "
          >
            Back
          </button>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none "
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressDetails;
