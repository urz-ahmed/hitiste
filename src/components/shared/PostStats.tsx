import { Models } from "appwrite";
import { useState, useEffect } from "react";

import { checkIsLiked } from "@/lib/utils";
import {
  useLikePost,
  useSavePost,
  useDeleteSavedPost,
  useGetCurrentUser,
} from "@/lib/react-query/queriesAndMutations";

type PostStatsProps = {
  post: Models.Document;
  userId: string;
};

const PostStats = ({ post, userId }: PostStatsProps) => {
  const likesList = post.likes.map((user: Models.Document) => user.$id);

  const [likes, setLikes] = useState<string[]>(likesList);
  const [isSaved, setIsSaved] = useState(false);

  const { mutate: likePost } = useLikePost();
  const { mutate: savePost } = useSavePost();
  const { mutate: deleteSavePost } = useDeleteSavedPost();

  const { data: currentUser } = useGetCurrentUser();

  useEffect(() => {
    if (currentUser && currentUser.save) {
      const savedPostRecord = currentUser.save.find(
        (record: Models.Document) => record.post.$id === post.$id
      );
      setIsSaved(!!savedPostRecord);
    }
  }, [currentUser]);

  const handleLikePost = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    e.stopPropagation();
    let newLikes = [...likes];

    const hasLiked = newLikes.includes(userId);
    if (hasLiked) {
      newLikes = newLikes.filter((id) => id !== userId);
    } else {
      newLikes.push(userId);
    }

    setLikes(newLikes);
    likePost({ postId: post.$id, likeArray: newLikes });
  };

  const handleSavePost = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    e.stopPropagation();

    if (currentUser && currentUser.save) {
      const savedPostRecord = currentUser.save.find(
        (record: Models.Document) => record.post.$id === post.$id
      );

      if (savedPostRecord) {
        setIsSaved(false);
        deleteSavePost(savedPostRecord.$id);
      } else {
        savePost({ userId: userId, postId: post.$id });
        setIsSaved(true);
      }
    }
  };


  return (
    <div
      className={`flex justify-between items-center z-20`}
    >
      <div className="flex gap-2 mr-5">
        <img
          src={`${
            checkIsLiked(likes, userId)
              ? "/assets/icons/liked.svg"
              : "/assets/icons/like.svg"
          }`}
          alt="like"
          width={20}
          height={20}
          onClick={(e) => handleLikePost(e)}
          className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium">{likes.length}</p>
      </div>

      <div className="flex gap-2">
        <img
          src={isSaved ? "/assets/icons/saved.svg" : "/assets/icons/save.svg"}
          alt="share"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={(e) => handleSavePost(e)}
        />
      </div>
    </div>
  );
};

export default PostStats;
