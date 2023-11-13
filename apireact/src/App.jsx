import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
import { v4 as uuid } from "uuid";
import NavBar from "./components/NavBar";
import DashboardUser from "./components/DashboardUser";
import DashboardPrivilege from "./components/DashboardPrivilege";
import { toast, ToastContainer } from "react-toastify";

function App() {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState();
    const [privileges, setPrivileges] = useState([]);
    const [privilege, setPrivilege] = useState();
    const [showAddForm, setshowAddForm] = useState(false);
    const [showEditForm, setshowEditForm] = useState(false)
    const [showAddFormP, setshowAddFormP] = useState(false);
    const [showEditFormP, setshowEditFormP] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:5181/GetUsuarios")
            .then((response) => {
            setUsers(response.data);
            })
            .catch((error) => { console.log(error); });
    }, [users]);

    useEffect(() => {
        axios.get("http://localhost:5181/GetPermisos")
            .then((response) => {
                setPrivileges(response.data);
            })
            .catch((error) => { console.log(error); });
    }, [privileges]);
    function handleEditUser(user) {
        axios({
            method: "put",
            url: `http://localhost:5181/UpdateUsuario/${user.id}`,
            data: {
                Id: user.id,
                Nombre: user.nombre,
                Apellido: user.apellido,
                Edad: user.edad,
                Email: user.email,
                Fechanac: user.fechanac,
            },
            config: {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            },
        })
            .then((response) => {
                console.log(response);
                toast.success("Movie updated successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            })
            .catch((error) => {
                console.log("the error has occured: " + error);
            });

        setUsers([...users, user]);
    }

    function handleSumbit(user) {
        const data = {
            Id: uuid(),
            Nombre: user.nombre,
            Apellido: user.apellido,
            Edad: user.edad,
            Email: user.email,
            Fechanac: user.fechanac,
        };
        axios({
            method: "post",
            url: "http://localhost:5181/CreateUsuario",
            data: data,
            config: {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            },
        })
            .then((response) => {
                console.log(response);
                toast.success("Usuario agregado correctamente", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            })
            .catch((error) => {
                console.log("the error has occured: " + error);
            });

        setUsers([...users, data]);
    }

    function handleEditP(privilege) {
        axios({
            method: "put",
            url: `http://localhost:5181/UpdatePermiso/${privilege.id}`,
            data: {
                Id: privilege.id,
                Descripcion: privilege.descripcion,
            },
            config: {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            },
        })
            .then((response) => {
                console.log(response);
                toast.success("updated successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            })
            .catch((error) => {
                console.log("the error has occured: " + error);
            });

        setPrivileges([...privileges, privilege]);
    }

    function handleSubmitP(privilege) {
        const data = {
            Id: uuid(),
            Descripcion: privilege.descripcion,
        };
        axios({
            method: "post",
            url: "http://localhost:5181/CreatePermiso",
            data: data,
            config: {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            },
        })
            .then((response) => {
                console.log(response);
                toast.success("Permiso agregado correctamente", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            })
            .catch((error) => {
                console.log("the error has occured: " + error);
            });

        setPrivileges([...privileges, data]);
    }
    function addForm() {
            setshowEditForm(false);
            setshowAddForm(true);
        
    }
    function closeForm() {
        setshowAddForm(false);
        setshowEditForm(false);
        setUser("");
    }
    function editForm(user) {
        setUser("");
        setPrivilege("");
        setshowAddForm(false);
        setshowEditForm(true);
        setUser(user);
        setPrivilege(privilege);
    }

    function addFormP() {
        setshowEditFormP(false);
        setshowAddFormP(true);
    }
    function closeFormP() {
        setshowAddFormP(false);
        setshowEditFormP(false);
        setPrivilege("");
    }
    function editFormP(privilege) {
        setPrivilege("");
        setshowAddFormP(false);
        setshowEditFormP(true);
        setPrivilege(privilege);
    }

    function deleteUser(id) {
        setshowEditForm(false);
        setUser("");
        axios.delete(`http://localhost:5181/DeleteUsuario/${id}`).then(() => {
            toast.success("Eliminado", {
                position: toast.POSITION.TOP_RIGHT,
            });
        });

        setUsers([...users.filter((x) => x.id !== id)]);
    }

    function deletePrivilege(id) {
        setshowEditForm(false);
        setPrivilege("");
        axios.delete(`http://localhost:5181/DeletePermiso/${id}`).then(() => {
            toast.success("Eliminado", {
                position: toast.POSITION.TOP_RIGHT,
            });
        });

        setPrivileges([...privileges.filter((x) => x.id !== id)]);
    }

  return (
      <>
          <NavBar addForm={addForm} addFormP={addFormP} />
          <div>              
              {/*<h2>Datos Usuarios</h2>*/}
              <DashboardUser
                  users={users}
                  showAddForm={showAddForm}
                  showEditForm={showEditForm}
                  editForm={editForm}
                  user={user}
                  deleteUser={deleteUser}
                  closeForm={closeForm}
                  handleSumbit={handleSumbit}
                  handleEditUser={handleEditUser}
              />
              <ToastContainer position="top-center" />
          </div>
          <div>              
              {/*<h2>Datos Permisos</h2>*/}
              <DashboardPrivilege
                  privileges={privileges}
                  showAddFormP={showAddFormP}
                  showEditFormP={showEditFormP}
                  editFormP={editFormP}
                  privilege={privilege}
                  deletePrivilege={deletePrivilege}
                  closeFormP={closeFormP}
                  handleSumbitP={handleSubmitP}
                  handleEditP={handleEditP}
              />
              <ToastContainer position="top-center" />
          </div>
          <div>
          </div>
    </>
  )
}

export default App
