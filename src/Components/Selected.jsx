import { MdDelete } from "react-icons/md";

const Selected = ({player, deletePlayer}) => {
    const { name, image, bowlingType, playerId, biddingPrice } = player;

    return (
        <div>
            <div className="flex mx-auto justify-between max-w-[1200px] border items-center bg-slate-100 p-4 rounded-lg shadow-lg mb-2">
                <div className="flex ml-1 gap-3">
                    <img className="w-12 h-12 object-cover rounded-lg" src={image} alt="" />
                    <div>
                        <p className="font-bold">{name}</p>
                        <p>{bowlingType}</p>
                    </div>
                </div>
                <div>
                    <button onClick={() => deletePlayer(playerId, biddingPrice)} className="text-amber-700 text-3xl"><MdDelete /></button>
                </div>
            </div>
        </div>
    );
};

export default Selected;