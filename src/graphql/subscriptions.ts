/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onCreateProp = /* GraphQL */ `subscription OnCreateProp(
  $filter: ModelSubscriptionPropFilterInput
  $owner: String
) {
  onCreateProp(filter: $filter, owner: $owner) {
    key
    value
    id
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePropSubscriptionVariables,
  APITypes.OnCreatePropSubscription
>;
export const onUpdateProp = /* GraphQL */ `subscription OnUpdateProp(
  $filter: ModelSubscriptionPropFilterInput
  $owner: String
) {
  onUpdateProp(filter: $filter, owner: $owner) {
    key
    value
    id
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePropSubscriptionVariables,
  APITypes.OnUpdatePropSubscription
>;
export const onDeleteProp = /* GraphQL */ `subscription OnDeleteProp(
  $filter: ModelSubscriptionPropFilterInput
  $owner: String
) {
  onDeleteProp(filter: $filter, owner: $owner) {
    key
    value
    id
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePropSubscriptionVariables,
  APITypes.OnDeletePropSubscription
>;
export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct(
  $filter: ModelSubscriptionProductFilterInput
  $owner: String
) {
  onCreateProduct(filter: $filter, owner: $owner) {
    id
    name
    status
    isPromo
    description
    price
    currency
    img
    imgAlt
    thumbnailImg
    brand
    category
    categoryId
    subCategory
    subCategoryId
    properties {
      key
      value
      id
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProductSubscriptionVariables,
  APITypes.OnCreateProductSubscription
>;
export const onUpdateProduct = /* GraphQL */ `subscription OnUpdateProduct(
  $filter: ModelSubscriptionProductFilterInput
  $owner: String
) {
  onUpdateProduct(filter: $filter, owner: $owner) {
    id
    name
    status
    isPromo
    description
    price
    currency
    img
    imgAlt
    thumbnailImg
    brand
    category
    categoryId
    subCategory
    subCategoryId
    properties {
      key
      value
      id
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProductSubscriptionVariables,
  APITypes.OnUpdateProductSubscription
>;
export const onDeleteProduct = /* GraphQL */ `subscription OnDeleteProduct(
  $filter: ModelSubscriptionProductFilterInput
  $owner: String
) {
  onDeleteProduct(filter: $filter, owner: $owner) {
    id
    name
    status
    isPromo
    description
    price
    currency
    img
    imgAlt
    thumbnailImg
    brand
    category
    categoryId
    subCategory
    subCategoryId
    properties {
      key
      value
      id
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
