import { post, header, notify, getMessage422 } from "../Helpers";
import $ from "jquery";
import { DEFAULT_ERROR_MESSAGE } from "../Constants";

export const createCustomer = (e, modalId, submitId, handleFunction) => {
  e.preventDefault();
  const form = e.target;
  if (form.name.value !== "") {
    const body = {
      name: form.name.value.trim(),
      lastname: form.lastname.value.trim(),
      birthdate: form.birthdate.value.trim(),
    };

    document.getElementById(submitId).disabled = true;
    post("/add", body, header(), function (code, response) {
      if (code === 200) {
        $("#" + modalId).modal("hide");
        notify("Cliente creado satisfactoriamente.", "success");
        handleFunction();
        return;
      } else if (code === 422) {
        notify(getMessage422(response), "error");
      } else {
        notify(DEFAULT_ERROR_MESSAGE, "error");
      }
      document.getElementById(submitId).disabled = false;
    });
  } else {
    notify("Complete los campos obligatorios: Nombre", "error");
  }
  return;
};
