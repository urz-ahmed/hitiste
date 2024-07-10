"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { FaUserPlus } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { navVariants } from "@/utils/motion";
// import useAuth from "@/context/useAuth";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/useUserContext";
import Link from "next/link";
const Navbar: React.FC = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const {isAuthenticated}=useUserContext();
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleNav = (): void => {
    setIsNavOpen(!isNavOpen);
  };

  const handleMenuClick = (
    path: string,
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    event.preventDefault(); // Prevent the default behavior
    router.push(path);
    setIsNavOpen(false); // Close the mobile menu after clicking a link
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`md:px-10" glassmorphism absolute z-50 flex w-full flex-wrap items-center justify-around gap-2 px-5 text-sm font-medium uppercase opacity-90 ${
        isNavOpen ? "rounded-b-lg" : "rounded-b-full"
      }`}
    >
      <div
        className={`2xl:max-w-[1280px] w-full flex items-center justify-around p-4`}
      >
        <div
          className={`flex items-center gap-2 font-extrabold text-xl tracking-[4px] text-white cursor-pointer ${
            isNavOpen ? "hidden" : "block"
          }`}
          onClick={() => router.push("/")}
        >
          ISTE HIT
        </div>
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleNav}
            className="h-10 w-10 items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isNavOpen}
          >
            {isNavOpen ? (
              <IoCloseOutline className="h-5 w-5 text-xl" />
            ) : (
              <GiHamburgerMenu className="h-5 w-5 text-xl" />
            )}
          </button>
        </div>
        <div
          className={`items-center md:order-1 md:flex md:w-auto ${
            isNavOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
            {[
              { path: "/", label: "HOME" },
              { path: "/events", label: "EVENTS" },
              { path: "/social", label: "SOCIAL" },
              // { path: "/memories", label: "MEMORIES" },
            ].map((item, index) => (
              <li key={index}>
                <div
                  onClick={(event) => handleMenuClick(item.path, event)}
                  className={`block rounded ${
                    pathname === item.path
                      ? "border-b-4 text-white"
                      : "text-white"
                  } cursor-pointer hover:font-extrabold`}
                >
                  {item.label}
                </div>
              </li>
            ))}
            <div className="m-4 flex gap-2 md:ml-12 ">
              <Link  href={isAuthenticated? "/logout" : "/login"} className="cursor-pointer text-white bg-purple-600 p-1 rounded-xl">
                {isAuthenticated ? (
                  "Logout"
                ) : (
                  <FaUserPlus className="text-[#DCFFB7] text-2xl cursor-pointer" />
                )}
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
