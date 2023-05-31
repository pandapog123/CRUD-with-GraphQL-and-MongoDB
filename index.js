const { ApolloServer } = require("apollo-server");
const { initGraphql } = require("./graphql");

async function main() {
  const { resolvers, typeDefs } = await initGraphql();

  const server = new ApolloServer({
    resolvers,
    typeDefs,
  });

  const port = 3000;

  server.listen(port).then(() => {
    console.log(`Go to http://localhost:${port}/graphql`);
  });
}

main();
