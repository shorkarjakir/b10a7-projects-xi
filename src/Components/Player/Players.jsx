import { useEffect, useState } from "react";
import Player from "./Player";


const Players = ({choosePlayer, setTotalPlayers}) => {
    const [players, setPlayers] = useState([]);

   useEffect(() => {
        const fetchPlayers = async () => {
            const res = await fetch('/Players.json');
            const data = await res.json();
            setPlayers(data.players);
            setTotalPlayers(data.players.length);
            // console.log(data);
        }
        fetchPlayers();
   } ,[])
   
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-4">
            {
                players.map((player) => <Player 

                key={player.playerId}
                 player={player} 
                 choosePlayer={choosePlayer}>
                 </Player>)

            }
            
        </div>
    );
};

export default Players;