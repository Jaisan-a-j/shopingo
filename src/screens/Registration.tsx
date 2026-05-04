import { useState, type ChangeEvent, type FC, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { type RegistrationFormData } from "../types";
import { ROUTES } from "../constants/routes";

const initialRegistrationFormData: RegistrationFormData = {
  name: "",
  mobile: "",
  password: "",
  acceptedTerms: false,
};

const Registration: FC = () => {
  const [formData, setFormData] = useState<RegistrationFormData>(
    initialRegistrationFormData,
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleTermsChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData((currentData) => ({
      ...currentData,
      acceptedTerms: event.target.checked,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setFormData((currentData) => ({
      ...currentData,
      name: currentData.name.trim(),
      mobile: currentData.mobile.trim(),
    }));
  };

  return (
    <div className="min-h-screen bg-gray-200 p-4 font-sans">
      <div className="mx-auto max-w-md bg-white p-3">
        <form
          onSubmit={handleSubmit}
          className="border border-gray-200 px-5 py-6"
        >
          <label className="mt-5 block text-sm text-gray-500">
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-2 w-full border border-gray-300 px-3 py-3 text-sm text-gray-900 outline-none focus:border-gray-500"
            />
          </label>

          <label className="mt-4 block text-sm text-gray-500">
            Mobile
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="mt-2 w-full border border-gray-300 px-3 py-3 text-sm text-gray-900 outline-none focus:border-gray-500"
            />
          </label>

          <label className="mt-4 block text-sm text-gray-500">
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-2 w-full border border-gray-300 px-3 py-3 text-sm text-gray-900 outline-none focus:border-gray-500"
            />
          </label>

          <label className="mt-5 flex items-center gap-2 text-sm text-gray-500">
            <input
              type="checkbox"
              checked={formData.acceptedTerms}
              onChange={handleTermsChange}
              className="h-4 w-4 border-gray-300 accent-[#212529]"
            />
            I agree to Terms and Conditions
          </label>

          <button
            type="submit"
            className="mt-8 w-full bg-[#212529] py-3 text-xs font-bold uppercase text-white"
          >
            Sign Up
          </button>

          <p className="mt-5 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to={ROUTES.LOGIN} className="font-medium text-red-600">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
