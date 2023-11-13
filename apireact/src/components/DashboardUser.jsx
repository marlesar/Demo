import React from 'react';
import { Grid } from "semantic-ui-react";
import AddUser from "./AddUser";
import UserTable from "./UserTable";

function DashboardUser(props) {
  return (
    //<p>Hello world!</p>
      <Grid>
          <Grid.Column width="10">
              <UserTable users={props.users} editForm={props.editForm} deleteUser={props.deleteUser} />
          </Grid.Column>
          <Grid.Column width="6">
              {props.showAddForm && (<AddUser closeForm={props.closeForm} handleSumbit={props.handleSumbit} />)}
              {props.showEditForm && (<EditUser user={props.user} closeForm={props.closeForm} handleEditUser={props.handleEditUser} />)}
          </Grid.Column>
      </Grid>
  );
}

export default DashboardUser;