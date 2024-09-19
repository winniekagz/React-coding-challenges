import React, { forwardRef } from 'react';

const CustomInput = forwardRef(({ name, label, placeholder, inputStyles, error,textStyles, ...rest }, ref) => {
  console.log('error',error)
  return (
    <div className="items-start flex flex-col mb-6">
      <label htmlFor={`id_${name}`} className={`text-start mb-2 font-normal text-[18px] text-slate-800 ${textStyles}`}>
        {`${label} ${error?"*":""}`}
      </label>
      <input
        id={`id_${name}`}
        name={name}
        placeholder={placeholder}
        ref={ref} 
        className={`border ${error?'border-red-500':'border-slate-500 focus:border-slate-700'} w-full bg-gray-200 rounded-lg p-4 placeholder:text-gray-400  ${inputStyles}`}
        {...rest} 
      />
    </div>
  );
});

export default CustomInput;
