import { useState } from 'react'
import './App.css'
import Available from './Components/Available'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Newsletter from './Components/Newsletter'
import Players from './Components/Player/Players'
import Navigation from './Navigation/NavBar'
import Selected from './Components/Selected'

function App() {
  
  const [claim, setClaim] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [view, setView] = useState('available');
  const [tolalPlayers, setTotalPlayers] = useState(0);

  const claimCredit = () => {
    setClaim(Math.floor(Math.random() * 10000000) + claim );
    alert(`Congratulations! You have claimed ${claim} credits.`);
  }

  const choosePlayer = (biddingPrice, player) => {

    if (biddingPrice > claim) {
      alert("You don't have enough credits to choose this player.");
      return;
    }
    if (selectedPlayer.includes(player)) {
      alert("You have already chosen this player.");
      return;
    }
    const selectedPlayers = [...selectedPlayer, player];
    setSelectedPlayer(selectedPlayers);
    setClaim(claim - biddingPrice);
    console.log(selectedPlayers);
  }

  const chossenPlayer = () => {
  
    if (selectedPlayer.length === 0) {
      return <p className="text-orange-400 flex justify-center text-center">No player selected yet.</p>;
    }
    return (
      <div className="mt-4">
        {selectedPlayer.map((player) => (
          <Selected key={player.playerId} player={player} deletePlayer={deletePlayer}></Selected>
        ))}
      </div>
    );
  }

  const showAvailablePlayers = () => setView('available');
  const showSelectedPlayers = () => setView('selected');

  const deletePlayer = (playerId) => {
    const updatedPlayers = selectedPlayer.filter(player => player.playerId !== playerId);
    setSelectedPlayer(updatedPlayers);
  }

  return (
    <>
      <div>
          <Navigation claim={claim}></Navigation>
          <Banner claimCredit={claimCredit}></Banner>
          <Available 
          showAvailablePlayers={showAvailablePlayers}
          showSelectedPlayers={showSelectedPlayers}
          view={view}
          selectedPlayer={selectedPlayer.length}
          tolalPlayers={tolalPlayers}
          ></Available>
           {view === 'available' && <Players choosePlayer={choosePlayer} setTotalPlayers={setTotalPlayers}></Players>}
           {view === 'selected' && chossenPlayer()}
          <div className=''>
            <Newsletter></Newsletter>
          </div>
          <Footer></Footer>
      </div>
    </>
  )
}

export default App
