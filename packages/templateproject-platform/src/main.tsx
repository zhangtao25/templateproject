import "antd/dist/reset.css";
import "./index.css";
import "./i18n.ts";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";

// 创建一个http link来发送GraphQL请求
const httpLink = createHttpLink({
  uri: "/graphql", // 你的GraphQL API的URL
  headers: {
    Authorization: `Bearer ` + (localStorage.getItem("token") || ""),
  },
});

// 创建Apollo Client实例
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);
