import { Button, Form, Segment } from "semantic-ui-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddPrivilege(props) {

    const initialState = {
        descripcion: "",
    };

    const [privilege, setPrivilege] = useState(initialState);

    function handleSubmitP(e) {
        e.preventDefault();
        if (!privilege.descripcion) {
            toast.error("Favor completar todos los campos !", {
                position: toast.POSITION.TOP_RIGHT,
            });
            return;
        }
        props.handleSumbitP(privilege);
        setPrivilege(initialState);
    }

    function handleInputChangeP(event) {
        const { name, value } = event.target;
        setPrivilege({ ...privilege, [name]: value });
    }

  return (
    //<p>Hello world!</p>
      <>
          <h1 style={{ marginLeft: "15px" }}>Agregar privilegio</h1>
          <Segment clearing style={{ marginRight: "30px", marginTop: "30px", marginLeft: "10px" }} >
              <Form onSubmit={handleSubmitP} autoComplete="off">
                  <Form.Input placeholder="Descripcion" value={privilege.descripcion} name="descripcion" onChange={handleInputChangeP} />
                  <Button floated="right" positive type="submit" content="Aceptar" />
                  <Button floated="right" type="button" content="Cancelar" onClick={() => props.closeFormP()}
                  />
              </Form>
          </Segment>
      </>
  );
}

export default AddPrivilege;