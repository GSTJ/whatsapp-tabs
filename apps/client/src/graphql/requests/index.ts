import { loader } from 'graphql.macro'

export type Query = {
  GET_USERS: string
  GET_CUSTOMERS: string
  GET_PROFILE: string
  GET_CUSTOMER_MESSAGES: string
  GET_USER_MESSAGES: string
}

export type Subscription = {
  NEW_USER: string
  NEW_CUSTOMER: string
  NEW_CUSTOMER_MESSAGE: string
  NEW_USER_MESSAGE: string
}

export type Mutation = {
  FOWARD_CUSTOMER: string
  UNMARK_CUSTOMER: string
  SEND_CUSTOMER_MESSAGE: string
  SEND_USER_MESSAGE: string
  UPLOAD_FILE: string
}

export const queries: Query = {
  GET_USERS: loader('./queries/users.gql'),
  GET_CUSTOMERS: loader('./queries/customers.gql'),
  GET_PROFILE: loader('./queries/profile.gql'),
  GET_CUSTOMER_MESSAGES: loader('./queries/customerMessages.gql'),
  GET_USER_MESSAGES: loader('./queries/userMessages.gql')
}

export const subscriptions: Subscription = {
  NEW_USER: loader('./subscriptions/user.gql'),
  NEW_CUSTOMER: loader('./subscriptions/customer.gql'),
  NEW_CUSTOMER_MESSAGE: loader('./subscriptions/customerMessage.gql'),
  NEW_USER_MESSAGE: loader('./subscriptions/userMessage.gql')
}

export const mutations: Mutation = {
  FOWARD_CUSTOMER: loader('./mutations/fowardCustomer.gql'),
  UNMARK_CUSTOMER: loader('./mutations/unmarkCustomer.gql'),
  SEND_CUSTOMER_MESSAGE: loader('./mutations/sendCustomerMessage.gql'),
  SEND_USER_MESSAGE: loader('./mutations/sendUserMessage.gql'),
  UPLOAD_FILE: loader('./mutations/uploadFile.gql')
}
