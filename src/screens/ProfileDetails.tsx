import { type FC } from "react";
import { Edit2, User } from "lucide-react";
import { Link } from "react-router-dom";
import { type ProfileDetails as ProfileDetailsType } from "../types";

const profileDetails: ProfileDetailsType = {
  fullName: "Jhon Deo",
  phone: "+99-85XXXXXXXX",
  email: "name@example.com",
  gender: "Male",
  dob: "10/03/1993",
  location: "United Kingdom",
};

const ProfileDetails: FC = () => {
  return (
    <div className="min-h-screen bg-white p-4 font-sans max-w-md mx-auto pb-20 relative">
      <div className="border border-gray-200 p-4 mb-6">
        <h1 className="text-xl font-medium text-gray-900">Account - Profile</h1>
      </div>

      <section className="relative border border-gray-200 p-4">
        <h2 className="text-xl font-semibold text-gray-900">Profile Details</h2>
        <div className="mt-3 h-px bg-gray-200" />

        <div className="mt-4 text-sm text-gray-900">
          <div className="grid grid-cols-[8rem_1fr] bg-gray-100 px-2 py-3">
            <span>Full Name</span>
            <span>{profileDetails.fullName}</span>
          </div>

          <div className="grid grid-cols-[8rem_1fr] px-2 py-3">
            <span />
            <span>{profileDetails.phone}</span>
          </div>

          <div className="grid grid-cols-[8rem_1fr] bg-gray-100 px-2 py-3">
            <span>Email ID</span>
            <span>{profileDetails.email}</span>
          </div>

          <div className="grid grid-cols-[8rem_1fr] px-2 py-3">
            <span>Gender</span>
            <span>{profileDetails.gender}</span>
          </div>

          <div className="grid grid-cols-[8rem_1fr] bg-gray-100 px-2 py-3">
            <span>DOB</span>
            <span>{profileDetails.dob}</span>
          </div>

          <div className="grid grid-cols-[8rem_1fr] border-b border-gray-200 px-2 py-3">
            <span>Location</span>
            <span>{profileDetails.location}</span>
          </div>
        </div>

        <Link
          to="/profile/edit"
          className="mt-3 flex w-36 items-center justify-center gap-2 border-4 border-gray-200 bg-[#212529] py-3 text-xs font-bold uppercase text-white"
        >
          <Edit2 size={14} />
          Edit
        </Link>
      </section>

      <div className="fixed left-[max(0px,calc((100vw-28rem)/2))] top-1/2 z-50 flex -translate-y-1/2 items-center gap-2 bg-[#212529] px-6 py-3 text-[10px] font-bold uppercase text-white shadow-md">
        <User size={12} />
        Account
      </div>
    </div>
  );
};

export default ProfileDetails;
