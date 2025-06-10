import { useEffect, useState } from "react";
import Player from "./Player";


const Players = () => {
    const [players, setPlayers] = useState([]);

   useEffect(() => {
        const fetchPlayers = async () => {
            const res = await fetch('/public/Players.json');
            const data = await res.json();
            setPlayers(data.players);
        }
        fetchPlayers();
   } ,[])
   
    return (
        <div className="grid lg:grid-cols-3 gap-4 p-4">
            {
                players.map((player) => <Player key={player.playerId} player={player}></Player>)
            }
        </div>
    );
};

export default Players;