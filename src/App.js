import React, { useState } from 'react';
import UserTable from './components/UserTable.jsx';
import AddUserForm from './components/AddUserForm.jsx';
import EditUserForm from './components/EditUserForm.jsx';
import {v4 as uuidv4} from 'uuid';



function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  //STATE

  const [users, setUsers] = useState(usersData);


  //AGREGAR USUARIO

  const addUser = (user) => {
    user.id = uuidv4();

    setUsers([
      ...users,
      user
    ])
  }

  //ELIMIAR USUARIO

  const deleteUser = (id) => {
    
    const arrayFiltrado = users.filter(user => user.id !== id);

    setUsers(arrayFiltrado);
  }

  //EDITAR USUARIO

  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: '',
    username: ''
  });

  const editRow = (user) => {
    setEditing(true);
    
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing ? (
              <>
                <h2>Editar Usuario</h2>
                <EditUserForm 
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </>
            ) : (
              <>
                <h2>Agregar Usuario</h2>
                <AddUserForm addUser={addUser} />
              </>
            )
          }
        </div>
        <div className="flex-large">
          <h2>Ver Usuarios</h2>
          <UserTable 
            users={users} 
            deleteUser={deleteUser} 
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
