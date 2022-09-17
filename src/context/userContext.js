/* eslint-disable react/react-in-jsx-scope */
import {createContext, useState} from 'react';
const UserContext = createContext();
export function UserProvider({children}) {
  const [user, setUser] = useState(null);
  const values = {
    user,
    setUser,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}
export default UserContext;
