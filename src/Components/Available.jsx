const Available = ({showAvailablePlayers, showSelectedPlayers, view, selectedPlayer, tolalPlayers}) => {
    return (
        <div className="mt-10 flex justify-between items-center">
            {view === 'available' && <h3 className="ml-5 text-black text-xl font-bold">Available Players:</h3>}
            {view === 'selected' && <h3 className="ml-5 text-black text-xl font-bold">Selected Players: ({selectedPlayer} / {tolalPlayers})</h3>}
            <div className="mr-5">
                <button onClick={showAvailablePlayers} className={`text-black rounded-xl border-2 border-blue-100 p-3 ${view === 'available' ? 'bg-yellow-200 font-bold' : ''}`}>Available</button>
                <button onClick={() => showSelectedPlayers()} className={`text-black bg-white rounded-xl border-2 border-blue-100 p-3 ${view === 'selected' ? 'bg-yellow-200 font-bold' : ''}`}>Selected ({selectedPlayer})</button>
            </div>
        </div>
    );
};

export default Available;