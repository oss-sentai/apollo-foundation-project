import { dateTimeScalar, anyScalar } from "../schema/scalarType";

export const resolvers = {
  DateTime: dateTimeScalar,
  Any: anyScalar,
  Query: {
    sample: () => "hello, world!"
  },
  Mutation: {

  }
}
