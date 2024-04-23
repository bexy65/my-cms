import React, { useState } from "react";
import LoginForm from "./Login";
import RegisterForm from "./RegisterForm";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const [isRegister, setIsRegister] = useState(false);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <form className="flex flex-col p-4 rounded-xl shadow-lg">
      {isRegister ? (
        <RegisterForm onChange={handleInputChange} formData={formData} />
      ) : (
        <LoginForm onChange={handleInputChange} formData={formData} />
      )}
    </form>
  );
};

export default Form;
