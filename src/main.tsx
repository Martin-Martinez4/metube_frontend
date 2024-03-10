
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/Router/Routes'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { cache } from './app/apolloCache/InMemoryCache';
import './index.css';


const link = createHttpLink({
  uri: `http://${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}/query`,
  credentials: 'include'
});

const client = new ApolloClient({
  // uri: "http://localhost:8080/query",
  // cache: new InMemoryCache()
  cache:cache,
  link: link,

})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
)
