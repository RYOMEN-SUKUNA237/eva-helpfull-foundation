"use client";

import { useState } from "react";
import PhoneInput, { type Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface PhoneFieldProps {
  name?: string;
  label?: string;
  required?: boolean;
  defaultCountry?: string;
  inputId?: string;
  placeholder?: string;
}

export function PhoneField({
  name = "phone",
  label = "Phone number",
  required = true,
  defaultCountry = "CM",
  inputId,
  placeholder,
}: PhoneFieldProps) {
  const [value, setValue] = useState<Value>();

  return (
    <div className="space-y-1">
      <label className="block text-xs font-medium text-slate-100/80 mb-1">
        {label}
      </label>
      <div className="w-full">
        <PhoneInput
          id={inputId}
          international
          countryCallingCodeEditable={false}
          defaultCountry={defaultCountry as any}
          value={value}
          onChange={setValue}
          placeholder={placeholder}
          className="phone-input text-sm text-slate-100"
        />
      </div>
      <input type="hidden" name={name} value={value || ""} required={required} />
    </div>
  );
}
