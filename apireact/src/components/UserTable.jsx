import { Fragment } from "react";
import { Table, Button } from "semantic-ui-react";
import "../index.css";

function UserTable(props) {
  return (
      <Fragment>
          <h2 style={{ marginLeft: "30px" }}>Lista de usuarios</h2>
          <Table
              celled
              style={{
                  marginLeft: "30px",
                  marginTop: "30px",
                  width: "1100px",
                  border: "1px solid black",
              }}
          >
              <Table.Header>
                  <Table.Row>
                      <Table.HeaderCell>Nombre</Table.HeaderCell>
                      <Table.HeaderCell>Apellido</Table.HeaderCell>
                      <Table.HeaderCell>Edad</Table.HeaderCell>
                      <Table.HeaderCell>Email</Table.HeaderCell>
                      <Table.HeaderCell>Fecha Nac</Table.HeaderCell>
                      <Table.HeaderCell>Actions</Table.HeaderCell>
                  </Table.Row>
              </Table.Header>
              <Table.Body>
                  {props.users.map((user) => (
                      <Table.Row key={user.id}>
                          <Table.Cell>{user.nombre}</Table.Cell>
                          <Table.Cell>{user.apellido}</Table.Cell>
                          <Table.Cell>{user.edad}</Table.Cell>
                          <Table.Cell>{user.email}</Table.Cell>
                          <Table.Cell>{user.fechanac}</Table.Cell>
                          <Table.Cell>
                              <Button positive onClick={() => props.editForm(user)}>
                                  Editar
                              </Button>
                              <Button negative onClick={() => props.deleteUser(user.id)}>
                                  {" "}
                                  Eliminar
                              </Button>
                          </Table.Cell>
                      </Table.Row>
                  ))}
              </Table.Body>
          </Table>
      </Fragment>
  );
}

export default UserTable;