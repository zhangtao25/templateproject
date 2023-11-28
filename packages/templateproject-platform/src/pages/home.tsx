import dayjs from "dayjs";
// import "./App.css";
import { Table } from "antd";
import { useQuery } from "@apollo/client";
import { GetUsersDocument } from "../helpers/backend/gen/graphql.ts";
// import { GetUsersDocument } from "./helpers/backend/gen/graphql.ts";

function App() {
  const { data: getUsersData } = useQuery(GetUsersDocument);
  console.log(dayjs);
  const columns = [
    {
      dataIndex: "id",
    },
    {
      dataIndex: "username",
    },
    {
      dataIndex: "password",
    },
    {
      dataIndex: "email",
    },
  ];
  return (
    <Table
      rowKey={"id"}
      columns={columns}
      dataSource={getUsersData?.getUsers}
    />
  );
}

export default App;
