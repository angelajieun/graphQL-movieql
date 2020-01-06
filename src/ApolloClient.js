// Apollo Boost 로 만드는 Client
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: "https://movieql.now.sh/", //graphQL API를 어떻게 찾느냐에 대한것
});

export default client;