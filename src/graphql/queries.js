/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRegistry = /* GraphQL */ `
  query GetRegistry($id: ID!) {
    getRegistry(id: $id) {
      id
      email
      region
      exp
      esp
      desc
      portfolio
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
        region
        exp
        esp
        desc
        portfolio
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
