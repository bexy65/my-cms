import React from "react";
import FormInput from "./FormInput";

interface LoginFormProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formData: {
    email: string;
    password: string;
  };
}

const LoginForm = ({ onChange, formData }: LoginFormProps) => {
  return (
    <>
      <h2 className="mb-4">Login</h2>
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
      <div className="flex flex-row justify-between">
        <button className="bg-blue-400 p-2 rounded-md text-white">Login</button>
        <button className="border border-blue-400 rounded-md p-2 hover:bg-blue-400 hover:text-white">
          Sign Up
        </button>
      </div>
    </>
  );
};

export default LoginForm;
