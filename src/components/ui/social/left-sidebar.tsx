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
  const { user } = useUserContext();

  useEffect(() => {
    if (isSuccess) {
      window.location.reload(); // Refresh the current page
    }
  }, [isSuccess]);

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">

        <Link href={`/profile/${user.id}`} className="flex gap-3 items-center">
          <img
            src={user.imageUrl || "/assets/images/profile-placeholder.svg"}
            alt="profile"
            className="h-14 w-14 rounded-full"
          />
          <div className="flex flex-col">
            <h2 className="body-bold">{user?.name}</h2>
            <p className="small-regular">@{user?.username}</p>
          </div>
        </Link>

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;
            return (
              <li
                key={link.label}
                className={
                  isActive
                    ? "group leftsidebar-link"
                    : "group leftsidebar-link"
                }
              >
                <Link href={link.route} className="flex gap-4 items-center p-2 cursor-pointer">
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={isActive ? "invert-0" : "group-hover:invert-white invert-white"}
                  />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Button
        variant="ghost"
        className="my-2"
        onClick={() => signOut()}
      >
        <img src="/assets/icons/logout.svg" alt="logout" />
        <p className="small-medium lg:base-medium">Logout</p>
      </Button>
    </nav>
  );
};

export default LeftSidebar;
