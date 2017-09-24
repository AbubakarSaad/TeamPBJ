import React from 'react';

const candidatePage = () => {
  return(
    <div>
    <h3>Candidate Follow Up</h3>
    <table className="responsive-table">
        <thead>
          <tr>
              <th>Full Name</th>
              <th>Position</th>
              <th>Team</th>
              <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>$0.87</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default candidatePage;
