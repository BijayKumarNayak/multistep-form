import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";
import PaymentDetails from "./PaymentDetails";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const nextStep = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = (data) => {
    setFormData({ ...formData, ...data });
    alert(
      "Form Submitted! Here are the details:\n" +
        JSON.stringify(formData, null, 2)
    );
  };

  switch (step) {
    case 1:
      return <PersonalDetails next={nextStep} data={formData} />;
    case 2:
      return <AddressDetails next={nextStep} prev={prevStep} data={formData} />;
    case 3:
      return (
        <PaymentDetails next={handleSubmit} prev={prevStep} data={formData} />
      );
    default:
      return <div className="font-semibold text-green-400">Form Submitted Successfully!</div>;
  }
};

export default MultiStepForm;
