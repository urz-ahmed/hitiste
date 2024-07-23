import Bottombar from "@/components/ui/social/bottom-bar";
import LeftSidebar from "@/components/ui/social/left-sidebar";
import { Righteous } from "next/font/google";
const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});
const SocialLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className={`${inter.className} w-full md:flex mt-24 min-h-screen`}>
        <LeftSidebar/>
        <main className="flex flex-1 mx-8 md:mx-24 md:ml-[300px]">
            {children}
        </main>
        <Bottombar/>
    </div>
  );
};

export default SocialLayout;
