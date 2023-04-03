import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/Router/Routes'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { cache } from './app/apolloCache/InMemoryCache';
import './index.css';

const client = new ApolloClient({
  uri: "http://localhost:8080/query",
  // cache: new InMemoryCache()
  cache:cache
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
)
