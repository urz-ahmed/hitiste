"use client"
import GridUserList from '@/components/shared/GridUserList';
import { useUserContext } from "@/context/useUserContext";
import { useGetUsers } from '@/lib/react-query/queriesAndMutations';
import { usePathname } from 'next/navigation';

const SocialMembers = () => {
  const { user } = useUserContext();
  const { data : users } = useGetUsers(10);
  console.log(users);
  const pathname = usePathname();
  return (
    <div className='explore-container gap-6 min-h-screen'>
      <div className="container">
        <h2 className="h3-bold md:h2-bold w-full">Our Members</h2>
      </div>
      <div className="container mt-20">
        <GridUserList allUsers={users} currentUser={user} />
      </div>
    </div>
  )
}

export default SocialMembers