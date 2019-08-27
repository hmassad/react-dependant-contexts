import React from 'react'

export const UserContext = React.createContext({
  name: '',
  setName: () => { }
})

export const UserContextProvider = props => {

  const [state, setState] = React.useState({
    name: '',
    setName: newName => setState(prevState => ({ ...prevState, name: newName }))
  })

  return (
    <UserContext.Provider value={state}>
      {props.children}
    </UserContext.Provider>
  )
}
