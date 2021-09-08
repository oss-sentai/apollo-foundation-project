import { GraphQLScalarType } from "graphql";

export const dateTimeScalar = new GraphQLScalarType({
  name: "DateTime",
  description: "DateTime custom scalar type",
  serialize(value) {
    return new Date(value)
  }
})

export const anyScalar = new GraphQLScalarType({
  name: "Any",
  description: "Any custom scalar type",
  serialize(value) {
    return value
  }
})
