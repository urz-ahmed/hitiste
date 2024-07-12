"use client";
import React from "react";
import Loader from "@/components/shared/Loader";
import { useGetRecentPosts } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";
import Link from "next/link";
import PostCard from "@/components/ui/social/postcard";
type Props = {};

const SocialFeed = (props: Props) => {
  const { data: posts, isPending: isPostLoading } = useGetRecentPosts();
  return (
    <div className="flex flex-col w-full">
      <div className="mb-4">
        <h2 className="h3-bold md:h2-bold text-left w-full ">
          Social Feed
        </h2>
        <Link href="/social/rules" className="text-sm font-sans">
          To get started with us Visit our <span className="font-semibold text-rose-300 hover:underline hover:transition cursor-pointer">Rules Regulations</span>
        </Link>
      </div>

      {isPostLoading && !posts ? (
        <Loader />
      ) : (
        <ul className="flex flex-col flex-1 gap-9 w-full">
          {posts?.documents.map((post: Models.Document) => {
            return (
              <PostCard post={post}/>
              // <>
              // <li>{post.caption}</li>
              // <li>{post.imageUrl}</li>
              // <li>{post.$createdAt}</li>
              // </>
            );
          })}
        </ul>
      )}
      {/* <AllUsers/> */}
    </div>
  );
};
export default SocialFeed;
