import { Button, Form, Segment } from "semantic-ui-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddUser(props) {

    const initialState = {
        nombre: "",
        apellido: "",
        edad: "",
        email: "",
        fechanac: "",
    };

    const [user, setUser] = useState(initialState);

    function handleSubmit(e) {
        e.preventDefault();
        if (!user.nombre || !user.apellido || !user.edad || !user.email || !user.fechanac) {
            toast.error("Favor completar todos los campos !", {
                position: toast.POSITION.TOP_RIGHT,
            });
            return;
        }
        props.handleSumbit(user);
        setUser(initialState);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

  return (
    //<p>Hello world!</p>
      <>
          <h1 style={{ marginLeft: "15px" }}>Agregar usuario</h1>
          <Segment clearing style={{ marginRight: "30px", marginTop: "30px", marginLeft: "10px" }} >
              <Form onSubmit={handleSubmit} autoComplete="off">
                  <Form.Input placeholder="Nombre" value={user.nombre} name="nombre" onChange={handleInputChange} />
                  <Form.Input placeholder="Apellido" value={user.apellido} name="apellido" onChange={handleInputChange} />
                  <Form.Input placeholder="Edad" value={user.edad} name="edad" onChange={handleInputChange} />
                  <Form.Input placeholder="Email" value={user.email} name="email" onChange={handleInputChange} />
                  <Form.Input placeholder="Fecha nac" value={user.fechanac} name="fechanac" onChange={handleInputChange} />
                  <Button floated="right" positive type="submit" content="Submit" />
                  <Button floated="right" type="button" content="Cancel" onClick={() => props.closeForm()}
                  />
              </Form>
          </Segment>
      </>
  );
}

export default AddUser;