
import { Outlet } from 'react-router-dom';
import { loggedInUserVar } from './app/apolloCache/InMemoryCache';

import './App.css';
import { createContext, useEffect } from 'react';
import { gql } from './__generated__/gql';
import { useLazyQuery } from '@apollo/client';
import { ThemeProvider } from './components/context/themecontext/ThemeProvider';

// Define the shape of the context data using a TypeScript interface
interface ThemeContextData {
  theme: string;
  toggleTheme: () => void;
}

// Create the context with an initial value and the TypeScript interface
export const ThemeContext = createContext<ThemeContextData>({
  theme: 'light',
  toggleTheme: () => {},
});


const GET_LOGGED_IN_USER = gql(/* GraphQL */`
    query GetLoggenInUser{
  getLoggedInProfile{
    username
    displayname
    subscribers
    isChannel
  }
},
    
  `);
function App() {

  const [getLoggedinUser, { }] = useLazyQuery(GET_LOGGED_IN_USER)


  useEffect(() => {

    getLoggedinUser()
      .then(res => {

        const user = res.data?.getLoggedInProfile
        loggedInUserVar({
          isLoggedIn: user?.username && user.displayname ? true : false,
          Username: user?.username as string,
          Displayname: user?.displayname as string,
          IsChannel: user?.isChannel as boolean,
        })
      })
      .catch(err => {

        loggedInUserVar({
          isLoggedIn: false,
          Username: "",
          Displayname: "",
          IsChannel: false,
        })
      })


  }, [])

  return (
    
    
    <div className="App">
        <Outlet />

    </div>
  )
}

export default App
