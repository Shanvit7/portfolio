import { useState } from "react";
import SideBar from "../components/SideBar";
import StickyNavbar from "../components/NavBar";
const PageLayout = ({
    children
})=>{
 const [isSidebarOpen,setSidebar] = useState(false);
 const handleCloseSideBar = ()=>{
    setSidebar(false);
 };
 const handleOpenSideBar = ()=>{
    setSidebar(true);
 };
 return (
    <main className="w-screen h-screen overflow-x-hidden bg-black text-white">
        <StickyNavbar 
        handleOpenSidebar={handleOpenSideBar}
        />
        <SideBar
        open={isSidebarOpen}
        handleCloseSideBar={handleCloseSideBar}
        />
        {children}
    </main>
 )

};

export default PageLayout;