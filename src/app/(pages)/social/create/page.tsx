"use client";
import React from "react";
import CreatePost from "@/components/ui/social/create-post";
import { useUserContext } from "@/context/useUserContext";
type Props = {};

const SocialCreate = (props: Props) => {
  const { isAuthenticated } = useUserContext();
  return (
    <div className="w-full min-h-screen">
      {isAuthenticated ? (
        <CreatePost />
      ) : (
        <>
          <div className="">OOPS! You need to member of this organisation to create post</div>
        </>
      )}
    </div>
  );
};
export default SocialCreate;
