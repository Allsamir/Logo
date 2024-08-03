import NavLinks from "./NavLinks";

const SideNavbar = () => {
  return (
    <div className="bg-[#fff] border border-solid border-[#E7E7E7] min-h-screen">
      <div className="logo mt-14 mb-10">
        <img src="LOGO.png" alt="" className="mx-auto" />
      </div>
      <NavLinks />
    </div>
  );
};

export default SideNavbar;
