import bannerImage from '../assets/bg-shadow.png';
import bannerImage2 from '../assets/banner-main.png';

const Banner = () => {
    return (
        <div
            className=''
            style={{
                backgroundImage: `linear-gradient(90deg, rgba(176, 169, 169, 1) 0%, rgba(13, 59, 53, 1) 22%, rgba(56, 47, 47, 1) 50%, rgba(3, 5, 1, 1) 84%, rgba(176, 171, 157, 1) 100%), url(${bannerImage})`,
                height: '450px',
                width: '1200px',
                margin: '0 auto',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: '#b0a9a9',
                borderRadius: '50px',
            }}>
            <div className='flex flex-col items-center justify-center h-full gap-4'>
                <img src={bannerImage2} alt="" />
                <h3 className='text-3xl text-white font text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
                <p className='text-xl text-white opacity-70'>Beyond Boundaries Beyond Limits</p>
                <button className='bg-amber-300 p-4 rounded-2xl font-bold'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;