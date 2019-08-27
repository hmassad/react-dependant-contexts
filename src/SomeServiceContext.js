import React from 'react'
import { UserContext } from './UserContext'

export const SomeServiceContext = React.createContext({
  userName: '',
  shouldBeUnchanged: false,
})

export const SomeServiceContextProvider = props => {

  const { name } = React.useContext(UserContext) // get name from UserContext

  // track changes from UserContext into this context
  const [state, setState] = React.useState({
    userName: name,
    shouldBeUnchanged: true,
  })

  React.useEffect(() => setState(prevState => ({ ...prevState, userName: name })), [name])

  return (
    <SomeServiceContext.Provider value={state}>
      {props.children}
    </SomeServiceContext.Provider>
  )
}
