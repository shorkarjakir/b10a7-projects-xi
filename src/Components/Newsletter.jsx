

const Newsletter = () => {
    return ( 
        <div className="relative">
            <div className="flex z-10 absolute left-36 mt-36 mx-auto w-5xl flex-col items-center gap-3 justify-center p-12 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-black">Subscribe to our Newsletter</h2>
                <p className="text-black opacity-70">Get the latest updates and news right in your inbox!</p>
                <form className="flex gap-4 mt-3">
                    <input className="w-xs p-3 rounded-xl border-2" type="email" placeholder="Enter your email" required />
                    <button className="bg-gradient-to-r from-[#8F702C] via-[#C7C461] to-[#C7C461] bg-[length:200%_100%] text-black font-bold px-6 py-3 rounded-xl shadow transition-all duration-200" type="submit"> Subscribe
                    </button>
                </form>
            </div>
            <div className="flex bg-white opacity-40 absolute border-2 left-[127px] mt-[128px] mx-auto w-[1060px] gap-3 justify-center p-[135px] rounded-lg shadow-lg">

            </div>
        </div>
    );
};

export default Newsletter;