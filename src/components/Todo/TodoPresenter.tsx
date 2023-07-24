"use client";

import { Table } from "antd";

export type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const columns = [
  { title: "ID", key: "id", dataIndex: "id" },
  { title: "User ID", key: "userId", dataIndex: "userId" },
  { title: "Title", key: "title", dataIndex: "title" },
  { title: "Completed", key: "completed", dataIndex: "completed" },
];

export type DataSource = {
  key: number;
  dataIndex: number;
  title: string;
};

type Props = {
  username: string;
  dataSource: (Todo & { key: number })[];
};

const TodoPresenter = (props: Props) => {
  return (
    <>
      <h1>Todo</h1>
      <div>User: {props.username}</div>
      <Table columns={columns} dataSource={props.dataSource} />
    </>
  );
};

export default TodoPresenter;
