import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import './App.css';

import {
  useTodosQuery
} from './generated/graphql'

const client = new ApolloClient({
  uri: 'http://localhost:8000/grahql',
})

function TodoList() {
  const todosQuery = useTodosQuery();

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {!todosQuery.loading && todosQuery.data?.todos?.map(todo => {
          return <li>{todo.title}</li>
        })}
      </ul>
    </div>
  )
}

function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <TodoList />
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

export default App;
