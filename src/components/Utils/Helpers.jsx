import React from "react"; // eslint-disable-line no-unused-vars
import Axios from "axios";
import { STATUS422_FAIL_ERROR_MESSAGE } from "./Constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import "moment/locale/es";

const API_URL = process.env.REACT_APP_API_URL;

export const momentSimple = (shortDate) => {
  return moment(shortDate);
};

// Se le resta 5 horas al dato de Servidor

export const datemoment = (timestamp) => {
  if (timestamp === null) return null;
  return moment(timestamp).calendar();
  // return moment(timestamp).subtract(5, 'hours').calendar()
};

// 1. Fecha intacta, para fechas seleccionadas por un datepicker desde UI
// 2. Fecha actual del cliente web
export const datemomentReal = (timestamp) => {
  if (timestamp === null) return null;
  // return moment(timestamp).format('D MMMM YYYY, h:mm:ss a')
  return moment(timestamp).format("D MMMM YYYY, h:mm a");
};

export function header() {
  return {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
}

export const headerPUT = {
  Authorization: "Bearer " + localStorage.getItem("token"),
  // 'Content-Type': 'application/x-www-form-urlencoded'
  // 'Content-Type': 'multipart/form-data'
};

export function get(endpoint = null, headers, fn) {
  if (endpoint === null) return;

  Axios.get(`${API_URL + endpoint}`, {
    headers: headers,
  })
    .then((r) => fn(r.status, r.data))
    .catch((er) => {
      if (typeof er.response === "undefined")
        return fn(500, { error: "Error de conexión" });
      return fn(er.response.status, er.response);
    });
}

export function post(endpoint = null, body = null, headers = null, fn) {
  if (endpoint === null) return;

  Axios.post(`${API_URL + endpoint}`, body, {
    headers: headers,
  })
    .then((r) => fn(r.status, r.data))
    .catch((er) => {
      if (typeof er.response === "undefined")
        return fn(500, { error: "Error de conexión" });
      return fn(er.response.status, er.response);
    });
}

export const user = () =>
  localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
export function notify(message = "", type = null) {
  switch (type) {
    case "success":
      return toast.success(message, {
        className: "customer-toast",
      });
    case "warn":
      return toast.warn(message, {
        className: "customer-toast",
      });
    case "error":
      return toast.error(message, {
        className: "customer-toast",
      });
    case "info":
      return toast.info(message, {
        className: "customer-toast",
      });
    default:
      return toast(message, {
        className: "customer-toast",
      });
  }
}

export function formatearFecha(fecha) {
  if (fecha === null) return null;
  var d = new Date(fecha),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("-");
}

export const getLang = () => localStorage.getItem("lang");

export const getMessage422 = (response) => {
  const messages = response.data.errorMessages;
  let message;

  if (Object.keys(messages).length === 0) {
    message = STATUS422_FAIL_ERROR_MESSAGE;
  } else {
    message = messages[Object.keys(messages)[0]][0];
  }

  return message;
};
