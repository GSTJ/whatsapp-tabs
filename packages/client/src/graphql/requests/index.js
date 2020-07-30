import { loader } from 'graphql.macro'

export const NEW_USER = loader('./subscriptions/user.gql')
export const NEW_CUSTOMER = loader('./subscriptions/customer.gql')
export const NEW_CUSTOMER_MESSAGE = loader(
  './subscriptions/customerMessage.gql'
)
export const NEW_USER_MESSAGE = loader('./subscriptions/userMessage.gql')

export const GET_USERS = loader('./queries/users.gql')
export const GET_CUSTOMERS = loader('./queries/customers.gql')
export const GET_PROFILE = loader('./queries/profile.gql')
export const GET_CUSTOMER_MESSAGES = loader('./queries/customerMessages.gql')
export const GET_USER_MESSAGES = loader('./queries/userMessages.gql')

export const FOWARD_CUSTOMER = loader('./mutations/fowardCustomer.gql')
export const UNMARK_CUSTOMER = loader('./mutations/unmarkCustomer.gql')
export const SEND_CUSTOMER_MESSAGE = loader(
  './mutations/sendCustomerMessage.gql'
)
export const SEND_USER_MESSAGE = loader('./mutations/sendUserMessage.gql')
export const UPLOAD_FILE = loader('./mutations/uploadFile.gql')
