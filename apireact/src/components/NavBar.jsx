import React from 'react';
import { Button, Menu } from 'semantic-ui-react';
import '../index.css';

export default function NavBar(props) {
    return (
      <Menu>
        {/*<p>Hello world!</p>*/}
            <Menu.Item>
                <Button positive content="Agregar usuario" onClick={() => props.addForm()} />
                <Button positive content="Agregar permisos" onClick={() => props.addFormP()} />
            </Menu.Item>
      </Menu>
  );
}
