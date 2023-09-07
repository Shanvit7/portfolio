
const Contact = ()=>{
    console.log(import.meta.env.PROVIDED_EMAIL);
    return(
        <section className="w-screen p-10">
                <div className="border-2 border-white h-64 flex flex-col gap-12 justify-center items-center">
                    <h1 className="lg:text-5xl text-2xl font-sans font-bold tracking-normal text-inherit antialiased">
                        Like what you see ?
                    </h1>
                    <div className="text-center">
                    <p className="font-sans font-semibold tracking-normal text-inherit antialiased">
                        Connect with me: 
                    </p>
                    <a 
                    href={`mailto:${import.meta.env.VITE_PROVIDED_EMAIL}`}
                    className="font-sans font-bold tracking-normal text-inherit antialiased"
                    >
                       {import.meta.env.VITE_PROVIDED_EMAIL}
                    </a>
                    </div>
                </div>
        </section>
    );
};

export default Contact;