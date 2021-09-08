import { gql } from "apollo-server-express";
export const schema = gql`
  #################
  # custom scalar #
  #################
  scalar DateTime
  scalar Any

  ##########
  # models #
  ##########

  ###########
  #  query  #
  ###########
  type Query {
    sample: String
  }

  ############
  # mutation #
  ############
  type Mutation {
    inputText(text: String!): TextResponse
  }

  type TextResponse {
    text: String!
  }
`;
