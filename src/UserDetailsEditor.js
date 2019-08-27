import React from 'react';
import { UserContext } from './UserContext'

const UserDetailsEditor = () => {

  const { name, setName } = React.useContext(UserContext)

  return <input type='text' value={name} onChange={e => setName(e.target.value)} />
}

export default UserDetailsEditor
