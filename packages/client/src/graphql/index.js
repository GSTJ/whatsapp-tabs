import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { WebSocketLink } from "apollo-link-ws";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";

const { NODE_ENV } = process.env;
const production = NODE_ENV === "production";
const port = production ? 8087 : 8088;

const { hostname } = window.location;

const httpLink = new HttpLink({ uri: "/graphql" });

const wsLink = new WebSocketLink({
  uri: `ws://${hostname}:${port}/graphql`,
  options: {
    reconnect: true
  }
});

function separator({ query }) {
  const definition = getMainDefinition(query);
  return (
    definition.kind === "OperationDefinition" &&
    definition.operation === "subscription"
  );
}
const link = split(separator, wsLink, httpLink);
const cache = new InMemoryCache();
const client = new ApolloClient({ cache, link });

export default client;
