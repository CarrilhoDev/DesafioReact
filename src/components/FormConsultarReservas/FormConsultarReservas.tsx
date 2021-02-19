import React, { useState } from "react";
import FormComponent from "./components/FormComponent";
import * as CR from "./styledComponents/index";

function FormConsultarReservas() {
  return (
    <CR.FormContainer>
      <h1>Consultar Reservas</h1>
      <CR.FormColumn>
        <FormComponent type="text" label="C.P.F" />
        <FormComponent type="text" label="Código da Reserva" />
      </CR.FormColumn>
    </CR.FormContainer>
  );
}

export default FormConsultarReservas;
