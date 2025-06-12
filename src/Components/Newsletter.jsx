import { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('email', email);
        setMessage(`Thank you for subscribing with ${email}!`);
        const modal = document.getElementById('my_modal_5');
        modal.showModal();
        setEmail('');
    };

    console.log(email);

    return ( 
        <div className="relative">
            <div className="flex z-10 absolute left-36 mt-36 mx-auto w-5xl flex-col items-center gap-3 justify-center p-12 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-black">Subscribe to our Newsletter</h2>
                <p className="text-black opacity-70">Get the latest updates and news right in your inbox!</p>
                <form onSubmit={handleSubmit} className="flex gap-4 mt-3">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-xs p-3 rounded-xl border-2" type="email" placeholder="Enter your email" required />
                    <button className="bg-gradient-to-r from-[#8F702C] via-[#C7C461] to-[#C7C461] bg-[length:200%_100%] text-black font-bold px-6 py-3 rounded-xl shadow transition-all duration-200" type="submit"> Subscribe
                    </button>
                </form>
            </div>
            {message && (
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        {message}
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default Newsletter;