module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateGoods {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Goods {
  id: ID!
  name: String
  price: Int
  description: String!
}

type GoodsConnection {
  pageInfo: PageInfo!
  edges: [GoodsEdge]!
  aggregate: AggregateGoods!
}

input GoodsCreateInput {
  id: ID
  name: String
  price: Int
  description: String!
}

type GoodsEdge {
  node: Goods!
  cursor: String!
}

enum GoodsOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  price_ASC
  price_DESC
  description_ASC
  description_DESC
}

type GoodsPreviousValues {
  id: ID!
  name: String
  price: Int
  description: String!
}

type GoodsSubscriptionPayload {
  mutation: MutationType!
  node: Goods
  updatedFields: [String!]
  previousValues: GoodsPreviousValues
}

input GoodsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GoodsWhereInput
  AND: [GoodsSubscriptionWhereInput!]
  OR: [GoodsSubscriptionWhereInput!]
  NOT: [GoodsSubscriptionWhereInput!]
}

input GoodsUpdateInput {
  name: String
  price: Int
  description: String
}

input GoodsUpdateManyMutationInput {
  name: String
  price: Int
  description: String
}

input GoodsWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [GoodsWhereInput!]
  OR: [GoodsWhereInput!]
  NOT: [GoodsWhereInput!]
}

input GoodsWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createGoods(data: GoodsCreateInput!): Goods!
  updateGoods(data: GoodsUpdateInput!, where: GoodsWhereUniqueInput!): Goods
  updateManyGoodses(data: GoodsUpdateManyMutationInput!, where: GoodsWhereInput): BatchPayload!
  upsertGoods(where: GoodsWhereUniqueInput!, create: GoodsCreateInput!, update: GoodsUpdateInput!): Goods!
  deleteGoods(where: GoodsWhereUniqueInput!): Goods
  deleteManyGoodses(where: GoodsWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  goods(where: GoodsWhereUniqueInput!): Goods
  goodses(where: GoodsWhereInput, orderBy: GoodsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Goods]!
  goodsesConnection(where: GoodsWhereInput, orderBy: GoodsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GoodsConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  goods(where: GoodsSubscriptionWhereInput): GoodsSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
}

input UserUpdateManyMutationInput {
  name: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    