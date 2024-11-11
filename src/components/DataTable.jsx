// import React from 'react';
// import PropTypes from 'prop-types';
// import '../styles/Table.css';

// const DataTable = ({ data }) => {
//   return (
//     <div className="table-container">
//       <table className="data-table">
//         <thead>
//           <tr>
//             <th>Fish Name</th>
//             <th>Scientific Name</th>
//             <th>Date</th>
//             <th>Depth (m)</th>
//             <th>Longitude</th>
//             <th>Latitude</th>
//             <th>Catch Weight (kg)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.length > 0 ? (
//             data.map((record, index) => (
//               <tr key={index}>
//                 <td>{record.fish_name}</td>
//                 <td>{record.scientific_name}</td>
//                 <td>{new Date(record.date).toLocaleString()}</td>
//                 <td>{record.depth.toFixed(2)}</td>
//                 <td>{record.longitude.toFixed(4)}</td>
//                 <td>{record.latitude.toFixed(4)}</td>
//                 <td>{record.catch_weight.toFixed(2)}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7" className="no-data">No records found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// DataTable.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       fish_name: PropTypes.string,
//       scientific_name: PropTypes.string,
//       date: PropTypes.string,
//       depth: PropTypes.number,
//       longitude: PropTypes.number,
//       latitude: PropTypes.number,
//       catch_weight: PropTypes.number,
//     })
//   ).isRequired,
// };

// export default DataTable;
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Table.css';

const DataTable = ({ data }) => {
  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Fish Name</th>
            <th>Scientific Name</th>
            <th>Date</th>
            <th>Depth (m)</th>
            <th>Longitude</th>
            <th>Latitude</th>
            <th>Catch Weight (kg)</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((record, index) => (
              <tr key={index}>
                <td>{record.fish_name}</td>
                <td>{record.scientific_name}</td>
                <td>{new Date(record.date).toLocaleString()}</td>
                <td>{record.depth.toFixed(2)}</td>
                <td>{record.longitude.toFixed(4)}</td>
                <td>{record.latitude.toFixed(4)}</td>
                <td>{record.catch_weight.toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="no-data">
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      fish_name: PropTypes.string,
      scientific_name: PropTypes.string,
      date: PropTypes.string,
      depth: PropTypes.number,
      longitude: PropTypes.number,
      latitude: PropTypes.number,
      catch_weight: PropTypes.number,
    })
  ).isRequired,
};

export default DataTable;
