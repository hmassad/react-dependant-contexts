import React from 'react';
import { SomeServiceContext } from './SomeServiceContext'

const UserDetailsViewer = () => {
  const { userName, shouldBeUnchanged } = React.useContext(SomeServiceContext)

  return (
    <div>
      userName: {userName}<br />
      shouldBeUnchanged: {shouldBeUnchanged ? '☑' : '☒'}
    </div>
  )
}

export default UserDetailsViewer
