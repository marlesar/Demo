import { Fragment } from "react";
import { Table, Button } from "semantic-ui-react";
import "../index.css";

function PrivilegeTable(props) {
  return (
      <Fragment>
          <h2 style={{ marginLeft: "30px" }}>Lista de permisos</h2>
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
                      <Table.HeaderCell>Descripcion</Table.HeaderCell>
                      <Table.HeaderCell>Actions</Table.HeaderCell>
                  </Table.Row>
              </Table.Header>
              <Table.Body>
                  {props.privileges.map((privilege) => (
                      <Table.Row key={privilege.id}>
                          <Table.Cell>{privilege.descripcion}</Table.Cell>
                          <Table.Cell>
                              <Button positive onClick={() => props.editFormP(privilege)}>
                                  Editar
                              </Button>
                              <Button negative onClick={() => props.deletePrivilege(privilege.id)}>
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

export default PrivilegeTable;