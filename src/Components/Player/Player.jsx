import { HiUser } from "react-icons/hi";
import { FaFlag } from "react-icons/fa";

const Player = ({player, choosePlayer}) => {
    const { name, country, image, role, bowlingType, biddingPrice} = player;
    
    return (
        <div className="">
            <div className="card p-4 border-2 bg-slate-100 w-96 shadow-lg">
                <figure>
                    <img
                        src={image}
                        className="w-full h-64 object-cover rounded-lg"
                        alt={name} />
                </figure>
                <div className="card-body p-0 mt-3">
                    <div className="flex gap-2 items-center">
                        <HiUser className="text-2xl"></HiUser>
                        <h2 className="font-bold text-xl">{name}</h2>
                    </div>
                    <div className="flex justify-between items-center mt-2 pb-3">
                        <div className="flex items-center gap-2">
                            <FaFlag className="opacity-50"></FaFlag>
                            <span className="ml-2 opacity-45">{country}</span>
                        </div>
                        <span className="bg-slate-300 rounded-lg bg-opacity-50 p-2">{role}</span>
                    </div>
                    <hr />
                    <div>
                        <h5 className="font-semibold">Rating</h5>
                        <div className="flex justify-between items-center mt-2 pb-3">
                            <h4>Bowling Type</h4>
                            <span className="ml-2 font-semibold">{bowlingType}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2">
                            <span>Price-{biddingPrice}</span>
                            <button onClick={() => choosePlayer(biddingPrice, player)} className="bg-slate-100 border shadow-lg p-2 rounded-lg font-medium">Choose Player</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;