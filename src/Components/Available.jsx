const Available = () => {
    return (
        <div className="mt-10 flex justify-between items-center">
            <h3 className="ml-5 text-black text-xl font-bold">Available Players:</h3>
            <div className="mr-5">
                <button className="text-black bg-yellow-200 rounded-xl border-2 border-blue-100 p-3 font-bold">Available</button>
                <button className="text-black bg-white rounded-xl border-2 border-blue-100 p-3 opacity-70">Selected</button>
            </div>
        </div>
    );
};

export default Available;