import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  todo?: Maybe<Todo>;
  todos?: Maybe<Array<Todo>>;
};


export type QueryTodoArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addTodo: Todo;
  updateTodo?: Maybe<Todo>;
  deleteTodo?: Maybe<Todo>;
};


export type MutationAddTodoArgs = {
  title: Scalars['String'];
};


export type MutationUpdateTodoArgs = {
  title?: Maybe<Scalars['String']>;
  isDone?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteTodoArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['ID'];
  title: Scalars['String'];
  isDone: Scalars['Boolean'];
};

export type AddTodoMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type AddTodoMutation = (
  { __typename?: 'Mutation' }
  & { addTodo: (
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'title'>
  ) }
);

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTodoMutation = (
  { __typename?: 'Mutation' }
  & { deleteTodo?: Maybe<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id'>
  )> }
);

export type UpdateTodoMutationVariables = Exact<{
  title?: Maybe<Scalars['String']>;
  isDone?: Maybe<Scalars['Boolean']>;
}>;


export type UpdateTodoMutation = (
  { __typename?: 'Mutation' }
  & { updateTodo?: Maybe<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'title' | 'isDone'>
  )> }
);

export type TodoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TodoQuery = (
  { __typename?: 'Query' }
  & { todo?: Maybe<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'title' | 'isDone'>
  )> }
);

export type TodosQueryVariables = Exact<{ [key: string]: never; }>;


export type TodosQuery = (
  { __typename?: 'Query' }
  & { todos?: Maybe<Array<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'title' | 'isDone'>
  )>> }
);


export const AddTodoDocument = gql`
    mutation addTodo($title: String!) {
  addTodo(title: $title) {
    id
    title
  }
}
    `;
export type AddTodoMutationFn = ApolloReactCommon.MutationFunction<AddTodoMutation, AddTodoMutationVariables>;
export type AddTodoComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddTodoMutation, AddTodoMutationVariables>, 'mutation'>;

    export const AddTodoComponent = (props: AddTodoComponentProps) => (
      <ApolloReactComponents.Mutation<AddTodoMutation, AddTodoMutationVariables> mutation={AddTodoDocument} {...props} />
    );
    
export type AddTodoProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<AddTodoMutation, AddTodoMutationVariables>
    } & TChildProps;
export function withAddTodo<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddTodoMutation,
  AddTodoMutationVariables,
  AddTodoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddTodoMutation, AddTodoMutationVariables, AddTodoProps<TChildProps, TDataName>>(AddTodoDocument, {
      alias: 'addTodo',
      ...operationOptions
    });
};

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useAddTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddTodoMutation, AddTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<AddTodoMutation, AddTodoMutationVariables>(AddTodoDocument, baseOptions);
      }
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export type AddTodoMutationResult = ApolloReactCommon.MutationResult<AddTodoMutation>;
export type AddTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<AddTodoMutation, AddTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation deleteTodo($id: ID!) {
  deleteTodo(id: $id) {
    id
  }
}
    `;
export type DeleteTodoMutationFn = ApolloReactCommon.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;
export type DeleteTodoComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteTodoMutation, DeleteTodoMutationVariables>, 'mutation'>;

    export const DeleteTodoComponent = (props: DeleteTodoComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteTodoMutation, DeleteTodoMutationVariables> mutation={DeleteTodoDocument} {...props} />
    );
    
export type DeleteTodoProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>
    } & TChildProps;
export function withDeleteTodo<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteTodoMutation,
  DeleteTodoMutationVariables,
  DeleteTodoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteTodoMutation, DeleteTodoMutationVariables, DeleteTodoProps<TChildProps, TDataName>>(DeleteTodoDocument, {
      alias: 'deleteTodo',
      ...operationOptions
    });
};

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, baseOptions);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = ApolloReactCommon.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation updateTodo($title: String, $isDone: Boolean) {
  updateTodo(title: $title, isDone: $isDone) {
    id
    title
    isDone
  }
}
    `;
export type UpdateTodoMutationFn = ApolloReactCommon.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;
export type UpdateTodoComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateTodoMutation, UpdateTodoMutationVariables>, 'mutation'>;

    export const UpdateTodoComponent = (props: UpdateTodoComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateTodoMutation, UpdateTodoMutationVariables> mutation={UpdateTodoDocument} {...props} />
    );
    
export type UpdateTodoProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>
    } & TChildProps;
export function withUpdateTodo<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateTodoMutation,
  UpdateTodoMutationVariables,
  UpdateTodoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateTodoMutation, UpdateTodoMutationVariables, UpdateTodoProps<TChildProps, TDataName>>(UpdateTodoDocument, {
      alias: 'updateTodo',
      ...operationOptions
    });
};

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      title: // value for 'title'
 *      isDone: // value for 'isDone'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, baseOptions);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = ApolloReactCommon.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const TodoDocument = gql`
    query todo($id: ID!) {
  todo(id: $id) {
    id
    title
    isDone
  }
}
    `;
export type TodoComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TodoQuery, TodoQueryVariables>, 'query'> & ({ variables: TodoQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TodoComponent = (props: TodoComponentProps) => (
      <ApolloReactComponents.Query<TodoQuery, TodoQueryVariables> query={TodoDocument} {...props} />
    );
    
export type TodoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<TodoQuery, TodoQueryVariables>
    } & TChildProps;
export function withTodo<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TodoQuery,
  TodoQueryVariables,
  TodoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, TodoQuery, TodoQueryVariables, TodoProps<TChildProps, TDataName>>(TodoDocument, {
      alias: 'todo',
      ...operationOptions
    });
};

/**
 * __useTodoQuery__
 *
 * To run a query within a React component, call `useTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTodoQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TodoQuery, TodoQueryVariables>) {
        return ApolloReactHooks.useQuery<TodoQuery, TodoQueryVariables>(TodoDocument, baseOptions);
      }
export function useTodoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TodoQuery, TodoQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TodoQuery, TodoQueryVariables>(TodoDocument, baseOptions);
        }
export type TodoQueryHookResult = ReturnType<typeof useTodoQuery>;
export type TodoLazyQueryHookResult = ReturnType<typeof useTodoLazyQuery>;
export type TodoQueryResult = ApolloReactCommon.QueryResult<TodoQuery, TodoQueryVariables>;
export const TodosDocument = gql`
    query todos {
  todos {
    id
    title
    isDone
  }
}
    `;
export type TodosComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TodosQuery, TodosQueryVariables>, 'query'>;

    export const TodosComponent = (props: TodosComponentProps) => (
      <ApolloReactComponents.Query<TodosQuery, TodosQueryVariables> query={TodosDocument} {...props} />
    );
    
export type TodosProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<TodosQuery, TodosQueryVariables>
    } & TChildProps;
export function withTodos<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TodosQuery,
  TodosQueryVariables,
  TodosProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, TodosQuery, TodosQueryVariables, TodosProps<TChildProps, TDataName>>(TodosDocument, {
      alias: 'todos',
      ...operationOptions
    });
};

/**
 * __useTodosQuery__
 *
 * To run a query within a React component, call `useTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodosQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TodosQuery, TodosQueryVariables>) {
        return ApolloReactHooks.useQuery<TodosQuery, TodosQueryVariables>(TodosDocument, baseOptions);
      }
export function useTodosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TodosQuery, TodosQueryVariables>(TodosDocument, baseOptions);
        }
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosQueryResult = ApolloReactCommon.QueryResult<TodosQuery, TodosQueryVariables>;