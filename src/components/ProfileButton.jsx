import { useState } from "react";
import Dropdown from "./ui/Dropdown";
import useOutsideClick from "src/hooks/useOutsideClick";
import { data } from "src/data";

const ProfileButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const profileRef = useOutsideClick(() => setIsOpen(false));

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="size-[44px] md:size-[52px] rounded-full overflow-hidden"
      >
        <img
          src={data.loggedInUser.avatar}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </button>

      <Dropdown ref={profileRef} isOpen={isOpen} width="240px">
        <div className="px-4 py-2 border-b border-n-1">
          <p className="font-semibold text-secondary-500">
            {data.loggedInUser.name}
          </p>
          <p className="text-sm text-secondary-300">
            {data.loggedInUser.email}
          </p>
        </div>
        <div className="py-2">
          <button className="w-full px-4 py-2 text-left text-sm text-secondary-500 hover:bg-n-1">
            <i className="fa fa-user-o mr-3"></i>Profile
          </button>
          <button className="w-full px-4 py-2 text-left text-sm text-secondary-500 hover:bg-n-1">
            <i className="fa fa-cog mr-3"></i>Settings
          </button>
          <button className="w-full px-4 py-2 text-left text-sm text-secondary-500 hover:bg-n-1">
            <i className="fa fa-question-circle-o mr-3"></i>Help
          </button>
        </div>
        <div className="pt-2 border-t border-n-1">
          <button className="w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-n-1">
            <i className="fa fa-sign-out mr-3"></i>Sign out
          </button>
        </div>
      </Dropdown>
    </div>
  );
};

export default ProfileButton;
