import { HiOutlineHome } from "react-icons/hi";
import { GoVideo } from "react-icons/go";
import { MdDesktopMac } from "react-icons/md";
import { Link, useLocation } from "react-router-dom"; // Fix import

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    {
      title: "Home",
      icon: <HiOutlineHome />,
      href: "/",
    },
    {
      title: "Single",
      icon: <GoVideo />,
      href: "/single",
    },
    {
      title: "Multiple",
      icon: <MdDesktopMac />,
      href: "/multiple", // Keep a valid route for styling but prevent navigation
      openInNewWindow: true, // Custom flag to control behavior
    },
  ];

  return (
    <div className="rounded-se-xl bg-light-background text-light-text h-screen p-4">
      <div className="flex flex-col gap-5">
        {navItems.map((item, index) => {
          if (item.openInNewWindow) {
            return (
              <div
                key={index}
                className="flex items-center gap-2 cursor-pointer rounded-md p-2 hover:text-black hover:bg-slate-200"
                onClick={() =>
                  window.open(item.href, "_blank", "width=1400,height=800")
                }
              >
                <div>{item.icon}</div>
                <div className="hidden lg:flex">{item.title}</div>
              </div>
            );
          }

          return (
            <Link
              to={item.href}
              key={index}
              className={`${
                location.pathname === item.href
                  ? "bg-blue-500 text-white"
                  : "hover:text-black hover:bg-slate-200"
              } flex items-center gap-2 cursor-pointer rounded-md p-2`}
            >
              <div>{item.icon}</div>
              <div className="hidden lg:flex">{item.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
