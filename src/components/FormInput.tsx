import React from "react";

const FormInput = ({ inputType, placeholder, onChange, name, value }: any) => {
  return (
    <>
      <input
        className="border-b border-gray-500 outline-blue-200 p-2 w-full text-black mb-5"
        type={inputType}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default FormInput;
