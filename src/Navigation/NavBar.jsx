import logo from '../assets/logo.png';
import { BsCoin } from "react-icons/bs";

const NavBar = () => {


    return (
        <div className='flex justify-between ml-4 mr-4 items-center mt-8 mb-5'>
            <div className=''>
                <img src={logo} alt="Logo" />
            </div>
            <div className='flex items-center'>
                <ul className='flex gap-10 text-primary opacity-70 text-[16px]'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Fixture</a></li>
                    <li><a href="">Teams</a></li>
                    <li><a href="">Schedules</a></li>
                </ul>
                <div className='flex p-2 gap-3 ml-15 font-semibold text-primary text-[20px] border-2 rounded-xl'>
                    <span>0</span>
                    <button className='flex gap-3 items-center'>Coin <BsCoin /></button>
                   
                </div>
            </div>
        </div>
    );
};

export default NavBar;