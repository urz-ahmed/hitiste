import Bottombar from "@/components/ui/social/bottom-bar";
import LeftSidebar from "@/components/ui/social/left-sidebar";

const SocialLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="w-full md:flex mt-24">
        <LeftSidebar/>
        <main className="flex flex-1 h-full mx-8 md:mx-24 md:ml-[300px]">
            {children}
        </main>
        <Bottombar/>
    </div>
  );
};

export default SocialLayout;
