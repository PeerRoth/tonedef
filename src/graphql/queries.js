/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSoundboard = /* GraphQL */ `
  query GetSoundboard($id: ID!) {
    getSoundboard(id: $id) {
      id
      name
      email
      fulldata
      mindata
      createdAt
      updatedAt
    }
  }
`;
export const listSoundboards = /* GraphQL */ `
  query ListSoundboards(
    $filter: ModelSoundboardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSoundboards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        fulldata
        mindata
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
