import { HiUser } from "react-icons/hi";
import { FaFlag } from "react-icons/fa";

const Player = ({player}) => {
    const { name, country, image} = player;
    console.log(player);
    return (
        <div className="">
            <div class="card p-4 border-2 bg-slate-100 w-96 shadow-lg">
                <figure>
                    <img
                        src={image}
                        className="w-full h-64 object-cover rounded-lg"
                        alt={name} />
                </figure>
                <div class="card-body p-0 mt-3">
                    <div className="flex gap-2 items-center">
                        <HiUser className="text-2xl"></HiUser>
                        <h2 className="font-bold">{name}</h2>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <div>
                <p>{name}</p>
            </div>
        </div>
    );
};

export default Player;