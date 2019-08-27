# React Dependant Contexts

Project aimed to demonstrate the usage of a Context from within another Context
The represented use case is a service (SomeService) that consumes user
infromation (UserContext) displayed by UserDetailsViewer and loaded by
UserDetailsEditor, outside of SomeService context.

The key point was to listen to the parent context (UserContext) changes in
order to be able to use it in the dependant context (SomeServiceContext).

This project was created with `create-react-app` and uses React hooks.

## Installing and Running

```bash
yarn install
yarn start
```
