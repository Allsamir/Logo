import { MdKeyboardArrowDown } from "react-icons/md";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const handleLogout = () => {
    logOutUser();
  };
  console.log(user);
  return (
    <div className="bg-[#fff] border border-solid border-[#E7E7E7] py-[1.27rem] px-[1.88rem] flex justify-between items-center">
      <div className="user flex gap-3">
        {/* Ellipse 102.svg will work as a default image */}
        <img
          src={`${user?.photoURL || "Ellipse 102.svg"}`}
          alt={`${user?.displayName}`}
        />
        <div className="relative">
          <p className="text-heading font-medium text-[15px]">
            {user?.displayName}
          </p>
          <p className="text-[#5C635A] text-sm">{user?.email}</p>
          <MdKeyboardArrowDown className="absolute top-0 right-0 text-xl" />
        </div>
      </div>
      <div className="logout-container flex items-center gap-4">
        <img src="Notification.png" alt="" />
        <button
          onClick={handleLogout}
          className="logout-btn flex items-center gap-3"
        >
          <p className="text-[#F15E4A] text-[15px] font-medium">Log Out</p>
          <img src="Logout.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
