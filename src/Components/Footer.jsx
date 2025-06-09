import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div className='bg-[#06091A] max-w-9xl mt-64'>
            <div className="flex justify-center py-4">
                <img className='pt-45' src={logo} alt="" />
            </div>
            <div className='flex justify-between p-4 max-w-5xl mx-auto text-white'>
                <div>
                    <h3 className="">About Us</h3>
                    <p className='opacity-60 mt-3 text-xs'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                </div>
                <div>
                    <h3 className="">Quick Links</h3>
                    <div className='text-xs mt-3 footer-section opacity-60'> 
                        <ul className="list-disc list-inside"> 
                            <li><a href="">Home</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className="">Subscribe</h3>
                    <p className='text-xs mt-3 mb-3 opacity-60'>Subscribe to our newsletter for the <br /> latest updates.</p>
                    <form>
                        <input type="email" placeholder="Enter your email" required className="text-xs text-black w-48 text-opacity-40 bg-white p-2 rounded-l-md" />
                        <button type="submit" className="bg-gradient-to-r from-[#8F702C] via-[#C7C461] to-[#C7C461] bg-[length:200%_100%] rounded-r-md font-bold text-black px-4 py-1">Subscribe</button>
                    </form>
                </div>
            </div>
            <hr className='border-[1px] opacity-35 border-white mt-8' />
            <div className='text-center text-xs text-white opacity-60 py-4'>
                <p>&copy; 2025 B10a7. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;