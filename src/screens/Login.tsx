import { useState, type ChangeEvent, type FC, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { type LoginFormData } from "../types";

const initialLoginFormData: LoginFormData = {
  identifier: "",
};

const Login: FC = () => {
  const [formData, setFormData] = useState<LoginFormData>(initialLoginFormData);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      identifier: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setFormData((currentData) => ({
      identifier: currentData.identifier.trim(),
    }));
  };

  return (
    <div className="min-h-screen bg-gray-200 p-4 font-sans">
      <div className="mx-auto max-w-md bg-white p-3">
        <form
          onSubmit={handleSubmit}
          className="border border-gray-200 px-5 py-6"
        >
          <h1 className="text-center text-xl font-medium text-gray-900">
            User Login
          </h1>

          <div className="mt-5 h-px bg-gray-200" />

          <h2 className="mt-5 text-base font-medium text-gray-900">
            Join / Sign In using
          </h2>

          <button
            type="button"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-sm bg-blue-800 py-3 text-xs font-bold uppercase text-white"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-xs font-bold lowercase text-blue-800">
              f
            </span>
            Facebook
          </button>

          <button
            type="button"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-sm bg-red-700 py-3 text-xs font-bold uppercase text-white"
          >
            <span className="text-base font-bold">G</span>
            Google
          </button>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-sm text-gray-500">Or</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <label className="block">
            <span className="text-sm font-normal text-gray-500">
              Enter mobile number or email
            </span>
            <input
              type="text"
              name="identifier"
              value={formData.identifier}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-sm border border-gray-300 px-3 py-3 text-sm text-gray-900 outline-none focus:border-gray-500"
            />
          </label>

          <button
            type="submit"
            className="mt-8 w-full rounded-sm bg-[#212529] py-3 text-xs font-bold uppercase text-white"
          >
            Continue
          </button>

          <p className="mt-5 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/registration" className="font-medium text-red-600">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
