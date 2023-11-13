import React from 'react';
import { Grid } from "semantic-ui-react";
import AddPrivilege from "./AddPrivilege";
import PrivilegeTable from "./PrivilegeTable";

function DashboardPrivilege(props) {
  return (
    //<p>Hello world!</p>
      <Grid>
          <Grid.Column width="10">
              <PrivilegeTable privileges={props.privileges} editFormP={props.editFormP} deletePrivilege={props.deletePrivilege} />
          </Grid.Column>
          <Grid.Column width="6">
              {props.showAddFormP && (<AddPrivilege closeFormP={props.closeFormP} handleSumbitP={props.handleSumbitP} />)}
              {props.showEditFormP && (<EditPrivilege privilege={props.privilege} closeFormP={props.closeFormP} handleEditPrivilege={props.handleEditPrivilege} />)}
          </Grid.Column>
      </Grid>
  );
}

export default DashboardPrivilege;