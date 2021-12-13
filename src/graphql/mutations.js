/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRegistry = /* GraphQL */ `
  mutation CreateRegistry(
    $input: CreateRegistryInput!
    $condition: ModelRegistryConditionInput
  ) {
    createRegistry(input: $input, condition: $condition) {
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
export const updateRegistry = /* GraphQL */ `
  mutation UpdateRegistry(
    $input: UpdateRegistryInput!
    $condition: ModelRegistryConditionInput
  ) {
    updateRegistry(input: $input, condition: $condition) {
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
export const deleteRegistry = /* GraphQL */ `
  mutation DeleteRegistry(
    $input: DeleteRegistryInput!
    $condition: ModelRegistryConditionInput
  ) {
    deleteRegistry(input: $input, condition: $condition) {
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
