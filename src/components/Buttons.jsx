import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return(
    <div>
      
      {/* //first button */}

      {displaySats.map((sat, id) => {
        return (
        <button onClick={() => filterByType(sat)} key ={id}>
          {sat} Orbit
        </button>
      );
    })}

      {/* //second button: all orbits */}

          <button onClick={() => setSat(satData)}>
            All Orbits
          </button>

      </div>
);
};

export default Buttons;