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

        {/* {return ( */}
          <button onClick={() => setSat(satData)}>
            All Orbits
          </button>
        {/* )} */}

      {/* return (
        <div>
          <button>Placeholder Button</button>
          <button>All Orbits</button>
        </div>
      ); */}
      
      </div>
);
};

export default Buttons;