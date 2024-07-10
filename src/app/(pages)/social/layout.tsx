import LeftSidebar from "@/components/ui/social/left-sidebar";

const SocialLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="w-full md:flex mt-24">
        <LeftSidebar/>
        <main className="flex flex-1 h-full">
            {children}
        </main>
    </div>
  );
};

export default SocialLayout;
