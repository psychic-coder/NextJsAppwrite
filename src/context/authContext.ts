import { createContext } from "react";


//create context is like the useState we can get and set the value of the authStatus


/*createContext
Purpose:
createContext is used to create a context object that can hold a value and provide it to any component within a component tree. This is useful for sharing state across multiple components without having to pass props down through every level.
*/
/*Used to create a global state or shared state that can be accessed by any component in the component tree.
Requires a Provider to wrap the component tree and a Consumer or useContext to access the context value.*/ 
/**/
export const AuthContext = createContext<{
  authStatus: boolean;
  setAuthStatus: (status: boolean) => void;
}>({    authStatus:false,
    setAuthStatus:()=>{}
});

//the provider is used for wrapping the things up , so that we can get the user

export const AuthProvider=AuthContext.Provider;

export default AuthContext;