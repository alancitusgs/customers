import React, { useState, useEffect } from "react";
import ModalAdd from "../../Organisms/Modal";
import { createCustomer } from "../../Utils/Requests/Admin";
import ModalContentCreate from "../Customers/ModalContentCreate";
import ListWithoutCustomers from "./ListWithoutCustomers";
import ListWithCustomers from "./ListWithCustomers";
import { get, header } from "../../Utils/Helpers";

const ListCustomers = ({ data, resetMainState }) => {
  const initialState = {
    loader: true,
    average: null,
    error: false,
  };

  const [scope, setScope] = useState(initialState);

  const resetListState = () => {
    setScope({ ...initialState });
    resetMainState();
  };

  useEffect(() => {
    if (!scope.loader) return;
    get(`/average`, header(), function (code, response) {
      if (code === 200) {
        setScope({
          ...scope,
          average: response.average,
          loader: false,
        });
      } else {
        setScope({
          ...scope,
          loader: false,
          error: true,
        });
      }
    });
  }, [scope]);

  return (
    <div className="row">
      <div className="col-md-12 d-flex justify-content-between align-items-center py-2">
        <h1>Lista de clientes</h1>
        <h2>Promedio de edades: {scope.average}</h2>

        <button
          className="btn btn-customer"
          data-toggle="modal"
          data-target="#modalAddCustomer"
        >
          <i className="fa fa-plus"></i> Crear Cliente
        </button>
      </div>
      <div className="col-md-12 ">
        {data.length === 0 ? (
          <ListWithoutCustomers />
        ) : (
          <ListWithCustomers customers={data} />
        )}
      </div>
      <ModalAdd
        idModal={"modalAddCustomer"}
        classWidth={"modal-md"}
        callback={(e) =>
          createCustomer(
            e,
            "modalAddCustomer",
            "btnCreateCustomer",
            resetListState
          )
        }
        title={"Crear nuevo cliente"}
        inputs={<ModalContentCreate />}
        submitId="btnCreateCustomer"
      />
    </div>
  );
};

export default ListCustomers;
