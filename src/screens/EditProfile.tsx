import {
  useState,
  type ChangeEvent,
  type FC,
  type FormEvent,
} from "react";
import { Calendar, User } from "lucide-react";
import {
  type ProfileDetails,
  type ProfileGender,
} from "../types";

const initialProfileDetails: ProfileDetails = {
  fullName: "jhon Deo",
  phone: "+99-85XXXXXXXX",
  email: "name@example.com",
  gender: "Male",
  dob: "",
  location: "United Kingdom",
};

const EditProfile: FC = () => {
  const [formData, setFormData] =
    useState<ProfileDetails>(initialProfileDetails);

  const updateField = (field: keyof ProfileDetails, value: string): void => {
    setFormData((currentData) => ({
      ...currentData,
      [field]: value,
    }));
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = event.target;
    updateField(name as keyof ProfileDetails, value);
  };

  const handleGenderChange = (gender: ProfileGender): void => {
    updateField("gender", gender);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white p-4 font-sans max-w-md mx-auto pb-20 relative">
      <div className="border border-gray-200 p-4 mb-6">
        <h1 className="text-xl font-medium text-gray-900">
          Account - Edit Profile
        </h1>
      </div>

      <section className="relative border border-gray-200 p-4">
        <h2 className="text-xl font-semibold text-gray-900">Edit Details</h2>
        <div className="mt-3 h-px bg-gray-200" />

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <label className="block border border-gray-300 px-3 py-2">
            <span className="block text-xs text-gray-400">Name</span>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full bg-transparent text-sm text-gray-900 outline-none"
            />
          </label>

          <label className="block border border-gray-300 px-3 py-2">
            <span className="block text-xs text-gray-400">Mobile Number</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full bg-transparent text-sm text-gray-900 outline-none"
            />
          </label>

          <label className="block border border-gray-300 px-3 py-2">
            <span className="block text-xs text-gray-400">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-transparent text-sm text-gray-900 outline-none"
            />
          </label>

          <div className="flex items-center gap-5 text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={() => handleGenderChange("Male")}
                className="h-4 w-4 accent-blue-500"
              />
              Male
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={() => handleGenderChange("Female")}
                className="h-4 w-4 accent-blue-500"
              />
              Female
            </label>
          </div>

          <label className="flex items-center border border-gray-300 px-3 py-2">
            <span className="flex-1">
              <span className="block text-xs text-gray-400">Date of Birth</span>
              <input
                type="text"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                placeholder="dd-mm-yyyy"
                className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-900"
              />
            </span>
            <Calendar size={16} className="text-gray-900" />
          </label>

          <label className="block border border-gray-300 px-3 py-2">
            <span className="block text-xs text-gray-400">Location</span>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full bg-transparent text-sm text-gray-900 outline-none"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-[#212529] py-4 text-xs font-bold uppercase text-white"
          >
            Save Details
          </button>

          <button
            type="button"
            className="w-full border border-gray-800 bg-white py-4 text-xs font-medium uppercase text-gray-900"
          >
            Change Password
          </button>
        </form>
      </section>

      <div className="fixed left-[max(0px,calc((100vw-28rem)/2))] top-1/2 z-50 flex -translate-y-1/2 items-center gap-2 bg-[#212529] px-6 py-3 text-[10px] font-bold uppercase text-white shadow-md">
        <User size={12} />
        Account
      </div>
    </div>
  );
};

export default EditProfile;
