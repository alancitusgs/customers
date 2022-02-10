import React from "react";
import { datemoment } from "../../Utils/Helpers";

const ListWithCustomers = ({ customers }) => {
  return (
    <>
      <table
        id="listCustomers"
        className="table align-items-center table-flush"
      >
        <thead className="thead-light">
          <tr>
            <th scope="col" className="sort" data-sort="name">
              Nombre
            </th>
            <th scope="col" className="sort" data-sort="budget">
              Apellido
            </th>
            <th scope="col" className="sort" data-sort="status">
              Fecha de nacimiento
            </th>
          </tr>
        </thead>

        <tbody className="list">
          {customers.map((row, index) => (
            <tr key={index}>
              <td className="" style={{ paddingLeft: "1.5rem" }}>
                {row.name}
              </td>
              <td>{row.lastname}</td>
              <td>{datemoment(row.birthdate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListWithCustomers;
