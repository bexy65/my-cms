import React from "react";
import FormInput from "./FormInput";

interface RegisterFormProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formData: {
    name: string;
    email: string;
    password: string;
  };
}

const RegisterForm = ({ onChange, formData }: RegisterFormProps) => {
  return (
    <>
      <h2 className="mb-4">Register</h2>
      <FormInput
        inputType="text"
        placeholder="Name"
        onChange={onChange}
        name="name"
        value={formData.name}
      />
      <FormInput
        inputType="text"
        placeholder="John.Doe@gmail.com"
        onChange={onChange}
        name="email"
        required
        value={formData.email}
      />
      <FormInput
        inputType="password"
        placeholder="Password"
        onChange={onChange}
        name="password"
        value={formData.password}
      />
      <button>Register</button>
    </>
  );
};

export default RegisterForm;
