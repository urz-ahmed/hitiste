import { Models } from "appwrite";
// import { Link, useLocation } from "react-router-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import FollowButton from "./FollowButton";
import { IUser } from "@/types";

type AllUserProps = {
    allUsers : Models.DocumentList<Models.Document> | undefined;
    currentUser: Models.Document | IUser;
}

const GridUserList = ({ allUsers, currentUser } : AllUserProps) => {
    const pathname =usePathname();
    //console.log('posts:', posts);
    return (
      <ul className='flex flex-wrap justify-center gap-5 w-full'>
        {allUsers?.documents.map((user: Models.Document) => {
          
          return (
            <li key={user.$id} className=' w-44 h-44 flex flex-col justify-center items-center gap-3 p-5 border shadow rounded-xl border-dark-4'>
                <Link aria-disabled href={`/social/profile/${user.$id}`} className="flex flex-col gap-3 items-center"> 
                    <img 
                        src={user.imageUrl || 'assets/images/profile-placeholder.svg'}
                        alt="profile"
                        className="  h-20 w-20 rounded-full" 
                    />
                    <div className="flex flex-col items-center gap-3">
                        <h2 className="body-bold text-center">{user?.name}</h2>
                        <p className=" small-regular text-primary-500 text-center">
                          @{user?.username}
                        </p>
                    </div> 
                </Link>
                {/* <FollowButton targetUserId={user.$id} currentUserId={currentUser.id} /> */}
            </li>
          )
        })}
      </ul>
    )
  }
  

export default GridUserList