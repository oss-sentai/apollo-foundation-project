import { ApolloServer, ExpressContext } from "apollo-server-express";
import { schema } from "./schema/schema";
import { resolvers } from "./resolvers/resolvers";
import cors from "cors";
import express from "express";
import { ApolloServerPluginCacheControl, ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
const PORT = process.env.PORT || 8080;

const startApolloServer = async (): Promise<{
  app: express.Express;
  graphQLServer: ApolloServer<ExpressContext>;
}> => {
  const graphQLServer = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground({
        // options
      }),
      // ApolloServerPluginCacheControl({
      //   defaultMaxAge: 1000,
      //   calculateHttpHeaders: false,
      // })
    ]
  });
  await graphQLServer.start();

  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  graphQLServer.applyMiddleware({ app });
  await new Promise<void>((resolve) => app.listen(PORT, resolve));
  console.log(`🚀Runnnig graphQLServer: http://localhost:${PORT}/graphql`)

  return { app, graphQLServer }
}

const server = startApolloServer();
export default server;
