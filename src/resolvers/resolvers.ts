import { MutationInputTextArgs, TextResponse } from './../@types/graphql.d';
import { dateTimeScalar, anyScalar } from "../schema/scalarType";

export const resolvers = {
  DateTime: dateTimeScalar,
  Any: anyScalar,
  Query: {
    sample: () => "hello, world!"
  },
  Mutation: {
    inputText: (_: unknown, query: MutationInputTextArgs): TextResponse => {
      const text = query.text;
      return {
        text
      }
    }
  }
}
