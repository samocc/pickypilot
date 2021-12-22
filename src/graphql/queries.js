/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRegistry = /* GraphQL */ `
  query GetRegistry($id: ID!) {
    getRegistry(id: $id) {
      id
      email
      region
      birth
      gender
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
        birth
        gender
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
export const getUserRegistry = /* GraphQL */ `
  query GetUserRegistry($id: ID!) {
    getUserRegistry(id: $id) {
      id
      email
      region
      birth
      gender
      categories
      createdAt
      updatedAt
    }
  }
`;
export const listUserRegistries = /* GraphQL */ `
  query ListUserRegistries(
    $filter: ModelUserRegistryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserRegistries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        region
        birth
        gender
        categories
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
