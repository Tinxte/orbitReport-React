import satData from "./satData";




const Table = ({ sat }) => {

  function Status(props) {
    const isOperational = props.operational;
    if(isOperational === true){
      return ("Active")
    } else return ("Inactive")
  }

  const rows = sat.map((data, id) =>
  <tr key ={id}>
  <td key = {id}>{data.name}</td>
  <td key = {id}>{data.type}</td>
  <td key = {id}>{data.launchDate}</td>
  <td key = {id}>{Status(data)}</td>
  </tr>);

  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
    {rows}
     </tbody>
   </table>
  );
};


export default Table;