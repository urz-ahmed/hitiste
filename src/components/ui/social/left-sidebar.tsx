"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useEffect } from "react";
import { useUserContext } from "@/context/useUserContext";
import { sidebarLinks } from "@/consts";
import { INavLink } from "@/types";

const LeftSidebar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const pathname = usePathname();
  const { user, isAuthenticated } = useUserContext();

  useEffect(() => {
    if (isSuccess) {
      window.location.reload(); // Refresh the current page
    }
  }, [isSuccess]);

  return (
    <nav className="leftsidebar fixed left-0">
      <div className="flex flex-col gap-11">

        {isAuthenticated?(<Link href={`/social/profile/${user.id}`} className="flex gap-3 items-center cursor-pointer hover:font-extrabold">
          <img
            src={user.imageUrl || "/assets/images/profile-placeholder.svg"}
            alt="profile"
            className="h-14 w-14 rounded-full"
          />
          <div className="flex flex-col">
            <h2 className="body-bold">{user?.name}</h2>
            <p className="small-regular">@{user?.username}</p>
          </div>
        </Link>):(<Link href="/login">
                <button className="w-full group relative overflow-hidden rounded-md border border-b-4 border-gray-400 bg-gray-950 px-4 py-2 font-medium text-[#FFF8E3] outline-none duration-300 hover:border-b hover:border-t-4 hover:brightness-150 active:opacity-75">
                  <span className="absolute -top-[150%] left-0 inline-flex h-[5px] w-80 rounded-md bg-gray-400 opacity-50 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] shadow-gray-400 duration-500 group-hover:top-[150%]"></span>
                  Login
                </button>
              </Link>)}

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;
            return (
              <li
                key={link.label}
                className={
                  isActive
                    ? "group leftsidebar-link bg-dark-1"
                    : "group leftsidebar-link"
                }
              >
                <Link href={link.route} className="flex gap-4 items-center p-2 cursor-pointer">
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className="invert-white"
                  />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <Button
        variant="ghost"
        className="my-2 hover:bg-rose-300"
        onClick={() => signOut()}
      >
        <img src="/assets/icons/logout.svg" className="invert-white" alt="logout" />
        <p className="small-medium lg:base-medium">Logout</p>
      </Button> */}
    </nav>
  );
};

export default LeftSidebar;
