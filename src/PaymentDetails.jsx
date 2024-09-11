import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const PaymentDetails = ({ next, prev, data }) => {
  const formik = useFormik({
    initialValues: data,
    validationSchema: Yup.object({
      cardNumber: Yup.string().required("Card Number is required"),
      expiryDate: Yup.string().required("Expiry Date is required"),
      cvv: Yup.string().required("CVV is required"),
    }),
    onSubmit: (values) => {
      next(values);
    },
  });

  return (
    <div className="grid w-full h-full grid-cols-2">
      <div className="overflow-hidden ">
        <img
          src="../public/images/location.jpg"
          alt=""
          className="object-cover w-full h-full "
        />
      </div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 p-4">
        <h3 className="font-bold text-center">Payment Detail</h3>
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 ">Card Number</label>
          <input
            name="cardNumber"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.cardNumber}
            className="block w-full px-4 py-3 bg-gray-300 border-transparent rounded-lg peer focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
          />
          {formik.errors.cardNumber ? (
            <div>{formik.errors.cardNumber}</div>
          ) : null}
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 ">Expiry Date</label>
          <input
            name="expiryDate"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.expiryDate}
            className="block w-full px-4 py-3 bg-gray-300 border-transparent rounded-lg peer focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
          />
          {formik.errors.expiryDate ? (
            <div>{formik.errors.expiryDate}</div>
          ) : null}
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 ">CVV</label>
          <input
            name="cvv"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.cvv}
            className="block w-full px-4 py-3 bg-gray-300 border-transparent rounded-lg peer focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
          />
          {formik.errors.cvv ? <div>{formik.errors.cvv}</div> : null}
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
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentDetails;
