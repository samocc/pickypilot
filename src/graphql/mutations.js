/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const createRegistry = /* GraphQL */ `
  mutation CreateRegistry(
    $input: CreateRegistryInput!
    $condition: ModelRegistryConditionInput
  ) {
    createRegistry(input: $input, condition: $condition) {
      id
      email
      ciudad
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
      ciudad
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
      ciudad
      exp
      esp
      desc
      portfolio
      createdAt
      updatedAt
    }
  }
`;
