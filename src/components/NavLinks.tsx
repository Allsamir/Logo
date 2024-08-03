import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const navLinks = [
    { icon: "Category.svg", text: "Home" },
    { icon: "2 User.svg", text: "New Listing" },
    { icon: "Search.svg", text: "Search" },
    { icon: "Paper.svg", text: "About" },
    { icon: "fi_heart.svg", text: "Favorites" },
    { icon: "Info Circle.svg", text: "Help" },
    { icon: "Setting.svg", text: "Settings" },
  ];
  return (
    <div className="flex flex-col navlinks">
      {navLinks.map(({ icon, text }, index) => {
        const link = text[0].toLocaleLowerCase() + text.slice(1);
        return (
          <NavLink
            to={`${index === 0 ? "/" : link}`}
            key={index}
            className="flex items-center gap-3 py-4 pl-6"
          >
            <img src={icon} alt={text} className="w-5 h-5" />
            <p>{text}</p>
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
