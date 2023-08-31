const PageLayout = ({
    children
})=>{
 return (
    <main className="w-screen h-screen overflow-x-hidden bg-black text-white">
        {children}
    </main>
 )

};

export default PageLayout;