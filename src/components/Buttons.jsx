import satData from "./satData";
import styling from "./styling.css"

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return(
    <div className = "flex-container">
      
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