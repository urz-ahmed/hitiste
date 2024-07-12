// components/PostCard.tsx
import { Models } from "appwrite";
import Link from "next/link";
import DOMPurify from 'dompurify';
import { multiFormatDateString } from "@/lib/utils";
import { useUserContext } from "@/context/useUserContext";
import PostStats from "@/components/shared/PostStats";

type PostCardProps = {
  post: Models.Document;
};

const PostCard = ({ post }: PostCardProps) => {
  const { user } = useUserContext();

  if (!post.creator) return null;

  const sanitizedCaption = DOMPurify.sanitize(post.caption);

  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <Link href={`/social/profile/${post.creator.$id}`}>
            <img
              src={post.creator?.imageUrl || "/assets/icons/profile-placeholder.svg"}
              alt="creator"
              className="w-12 lg:h-12 rounded-full"
            />
          </Link>

          <div className="flex flex-col">
            <p className="base-medium lg:body-bold text-light-1">
              {post.creator.name}
            </p>
            <div className="flex-center gap-2 text-light-3">
              <p className="subtle-semibold lg:small-regular ">
                {multiFormatDateString(post.$createdAt)}
              </p>
              •
              <p className="subtle-semibold lg:small-regular">
                {post.location}
              </p>
            </div>
          </div>
        </div>

        <Link
          href={`/social/update-post/${post.$id}`}
          className={`${user.id !== post.creator.$id && "hidden"}`}>
          <img
            src={"/assets/icons/edit.svg"}
            alt="edit"
            width={20}
            height={20}
          />
        </Link>
      </div>

      <Link href={`/social/posts/${post.$id}`}>
        <div className="small-medium lg:base-medium py-5">
          <div dangerouslySetInnerHTML={{ __html: sanitizedCaption }} />
          <ul className="flex gap-1 mt-2">
            {post.tags.map((tag: string, index: number) => (
              <li key={`${tag}${index}`} className="text-light-3 small-regular">
                #{tag}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={post.imageUrl || "/assets/icons/profile-placeholder.svg"}
          alt="post image"
          className="post-card_img"
        />
      </Link>

      <PostStats post={post} userId={user.id} />
    </div>
  );
};

export default PostCard;
