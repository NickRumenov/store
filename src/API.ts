/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreatePropInput = {
  key?: string | null,
  value?: string | null,
  id?: string | null,
};

export type ModelPropConditionInput = {
  key?: ModelStringInput | null,
  value?: ModelStringInput | null,
  and?: Array< ModelPropConditionInput | null > | null,
  or?: Array< ModelPropConditionInput | null > | null,
  not?: ModelPropConditionInput | null,
};

export type Prop = {
  __typename: "Prop",
  key?: string | null,
  value?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdatePropInput = {
  key?: string | null,
  value?: string | null,
  id: string,
};

export type DeletePropInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  name?: string | null,
  status?: string | null,
  isPromo?: boolean | null,
  description?: string | null,
  price: string,
  currency?: string | null,
  img?: string | null,
  imgAlt?: string | null,
  thumbnailImg?: string | null,
  brand?: string | null,
  category?: string | null,
  categoryId?: string | null,
  subCategory?: string | null,
  subCategoryId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  isPromo?: ModelBooleanInput | null,
  description?: ModelStringInput | null,
  price?: ModelStringInput | null,
  currency?: ModelStringInput | null,
  img?: ModelStringInput | null,
  imgAlt?: ModelStringInput | null,
  thumbnailImg?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  category?: ModelStringInput | null,
  categoryId?: ModelStringInput | null,
  subCategory?: ModelStringInput | null,
  subCategoryId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name?: string | null,
  status?: string | null,
  isPromo?: boolean | null,
  description?: string | null,
  price: string,
  currency?: string | null,
  img?: string | null,
  imgAlt?: string | null,
  thumbnailImg?: string | null,
  brand?: string | null,
  category?: string | null,
  categoryId?: string | null,
  subCategory?: string | null,
  subCategoryId?: string | null,
  properties?:  Array<Prop | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  status?: string | null,
  isPromo?: boolean | null,
  description?: string | null,
  price?: string | null,
  currency?: string | null,
  img?: string | null,
  imgAlt?: string | null,
  thumbnailImg?: string | null,
  brand?: string | null,
  category?: string | null,
  categoryId?: string | null,
  subCategory?: string | null,
  subCategoryId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelPropFilterInput = {
  key?: ModelStringInput | null,
  value?: ModelStringInput | null,
  and?: Array< ModelPropFilterInput | null > | null,
  or?: Array< ModelPropFilterInput | null > | null,
  not?: ModelPropFilterInput | null,
};

export type ModelPropConnection = {
  __typename: "ModelPropConnection",
  items:  Array<Prop | null >,
  nextToken?: string | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  isPromo?: ModelBooleanInput | null,
  description?: ModelStringInput | null,
  price?: ModelStringInput | null,
  currency?: ModelStringInput | null,
  img?: ModelStringInput | null,
  imgAlt?: ModelStringInput | null,
  thumbnailImg?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  category?: ModelStringInput | null,
  categoryId?: ModelStringInput | null,
  subCategory?: ModelStringInput | null,
  subCategoryId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPropFilterInput = {
  key?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPropFilterInput | null > | null,
  or?: Array< ModelSubscriptionPropFilterInput | null > | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  isPromo?: ModelSubscriptionBooleanInput | null,
  description?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionStringInput | null,
  currency?: ModelSubscriptionStringInput | null,
  img?: ModelSubscriptionStringInput | null,
  imgAlt?: ModelSubscriptionStringInput | null,
  thumbnailImg?: ModelSubscriptionStringInput | null,
  brand?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  categoryId?: ModelSubscriptionStringInput | null,
  subCategory?: ModelSubscriptionStringInput | null,
  subCategoryId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePropMutationVariables = {
  input: CreatePropInput,
  condition?: ModelPropConditionInput | null,
};

export type CreatePropMutation = {
  createProp?:  {
    __typename: "Prop",
    key?: string | null,
    value?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePropMutationVariables = {
  input: UpdatePropInput,
  condition?: ModelPropConditionInput | null,
};

export type UpdatePropMutation = {
  updateProp?:  {
    __typename: "Prop",
    key?: string | null,
    value?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePropMutationVariables = {
  input: DeletePropInput,
  condition?: ModelPropConditionInput | null,
};

export type DeletePropMutation = {
  deleteProp?:  {
    __typename: "Prop",
    key?: string | null,
    value?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    status?: string | null,
    isPromo?: boolean | null,
    description?: string | null,
    price: string,
    currency?: string | null,
    img?: string | null,
    imgAlt?: string | null,
    thumbnailImg?: string | null,
    brand?: string | null,
    category?: string | null,
    categoryId?: string | null,
    subCategory?: string | null,
    subCategoryId?: string | null,
    properties?:  Array< {
      __typename: "Prop",
      key?: string | null,
      value?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    status?: string | null,
    isPromo?: boolean | null,
    description?: string | null,
    price: string,
    currency?: string | null,
    img?: string | null,
    imgAlt?: string | null,
    thumbnailImg?: string | null,
    brand?: string | null,
    category?: string | null,
    categoryId?: string | null,
    subCategory?: string | null,
    subCategoryId?: string | null,
    properties?:  Array< {
      __typename: "Prop",
      key?: string | null,
      value?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    status?: string | null,
    isPromo?: boolean | null,
    description?: string | null,
    price: string,
    currency?: string | null,
    img?: string | null,
    imgAlt?: string | null,
    thumbnailImg?: string | null,
    brand?: string | null,
    category?: string | null,
    categoryId?: string | null,
    subCategory?: string | null,
    subCategoryId?: string | null,
    properties?:  Array< {
      __typename: "Prop",
      key?: string | null,
      value?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPropQueryVariables = {
  id: string,
};

export type GetPropQuery = {
  getProp?:  {
    __typename: "Prop",
    key?: string | null,
    value?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPropsQueryVariables = {
  filter?: ModelPropFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPropsQuery = {
  listProps?:  {
    __typename: "ModelPropConnection",
    items:  Array< {
      __typename: "Prop",
      key?: string | null,
      value?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    status?: string | null,
    isPromo?: boolean | null,
    description?: string | null,
    price: string,
    currency?: string | null,
    img?: string | null,
    imgAlt?: string | null,
    thumbnailImg?: string | null,
    brand?: string | null,
    category?: string | null,
    categoryId?: string | null,
    subCategory?: string | null,
    subCategoryId?: string | null,
    properties?:  Array< {
      __typename: "Prop",
      key?: string | null,
      value?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name?: string | null,
      status?: string | null,
      isPromo?: boolean | null,
      description?: string | null,
      price: string,
      currency?: string | null,
      img?: string | null,
      imgAlt?: string | null,
      thumbnailImg?: string | null,
      brand?: string | null,
      category?: string | null,
      categoryId?: string | null,
      subCategory?: string | null,
      subCategoryId?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePropSubscriptionVariables = {
  filter?: ModelSubscriptionPropFilterInput | null,
  owner?: string | null,
};

export type OnCreatePropSubscription = {
  onCreateProp?:  {
    __typename: "Prop",
    key?: string | null,
    value?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePropSubscriptionVariables = {
  filter?: ModelSubscriptionPropFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePropSubscription = {
  onUpdateProp?:  {
    __typename: "Prop",
    key?: string | null,
    value?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePropSubscriptionVariables = {
  filter?: ModelSubscriptionPropFilterInput | null,
  owner?: string | null,
};

export type OnDeletePropSubscription = {
  onDeleteProp?:  {
    __typename: "Prop",
    key?: string | null,
    value?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
  owner?: string | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    status?: string | null,
    isPromo?: boolean | null,
    description?: string | null,
    price: string,
    currency?: string | null,
    img?: string | null,
    imgAlt?: string | null,
    thumbnailImg?: string | null,
    brand?: string | null,
    category?: string | null,
    categoryId?: string | null,
    subCategory?: string | null,
    subCategoryId?: string | null,
    properties?:  Array< {
      __typename: "Prop",
      key?: string | null,
      value?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    status?: string | null,
    isPromo?: boolean | null,
    description?: string | null,
    price: string,
    currency?: string | null,
    img?: string | null,
    imgAlt?: string | null,
    thumbnailImg?: string | null,
    brand?: string | null,
    category?: string | null,
    categoryId?: string | null,
    subCategory?: string | null,
    subCategoryId?: string | null,
    properties?:  Array< {
      __typename: "Prop",
      key?: string | null,
      value?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    status?: string | null,
    isPromo?: boolean | null,
    description?: string | null,
    price: string,
    currency?: string | null,
    img?: string | null,
    imgAlt?: string | null,
    thumbnailImg?: string | null,
    brand?: string | null,
    category?: string | null,
    categoryId?: string | null,
    subCategory?: string | null,
    subCategoryId?: string | null,
    properties?:  Array< {
      __typename: "Prop",
      key?: string | null,
      value?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};
