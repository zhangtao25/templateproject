import React from "react";
import { Badge, Button, Descriptions, Table, Typography } from "antd";
import type { DescriptionsProps } from "antd";
const { Text } = Typography;
// import {}
const items: DescriptionsProps["items"] = [
  {
    key: "1",
    label: "Company",
    children: "Cloud Database",
  },
  {
    key: "2",
    label: "Token",
    children: "Prepaid",
  },
  {
    key: "3",
    label: "Automatic Renewal",
    children: "YES",
  },
];
const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
];

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];
const Index: React.FC = () => {
  return (
    <div>
      <p className={"text-xl"}>Basic</p>
      <Descriptions
        className={"bg-white p-[20px] mb-[20px]"}
        bordered
        items={items}
      />

      <p className={"text-xl"}>lists</p>
      <div className={"grid gap-y-2 grid-cols-1"}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return (
            <div className={"bg-white p-[20px]"}>
              <div className={"flex justify-between mb-2"}>
                <div>
                  <Text>Ant Design (default)</Text>
                  <Text type="secondary">Ant Design (secondary)</Text>
                </div>
                <Button type={"primary"}>操作</Button>
              </div>

              <Table
                pagination={false}
                dataSource={dataSource}
                columns={columns}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
