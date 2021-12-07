/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRegistry = /* GraphQL */ `
  query GetRegistry($id: ID!) {
    getRegistry(id: $id) {
      id
      email
      ciudad
      createdAt
      updatedAt
    }
  }
`;
export const listRegistries = /* GraphQL */ `
  query ListRegistries(
    $filter: ModelRegistryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegistries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        ciudad
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
