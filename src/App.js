import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import client from './ApolloClient';
import Home from './Home';
import Detail from './Detail';
// import GlobalStyle from "./globalStyles";

function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Router>
          <Route exact={true} path={"/"} component={Home}></Route>
          <Route path={"/details/:movieId"} component={Detail}></Route>
        </Router>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

export default App;
