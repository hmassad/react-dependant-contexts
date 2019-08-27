import React from 'react';
import { UserContextProvider } from './UserContext'
import { SomeServiceContextProvider } from './SomeServiceContext'
import UserDetailsViewer from './UserDetailsViewer'
import UserDetailsEditor from './UserDetailsEditor'

function App() {
  return (
    <UserContextProvider>

      <SomeServiceContextProvider>
        <UserDetailsViewer />
      </SomeServiceContextProvider>

      <UserDetailsEditor />

    </UserContextProvider>
  )
}

export default App
