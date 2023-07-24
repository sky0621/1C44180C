"use client";

import { callGetApi } from "@/lib/api";
import { Table } from "antd";

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const TodoPage = async () => {
  const getTodoRes = await callGetApi("/todo");
  const getTodoResJson = await getTodoRes.json();
  const getTodos: Todo[] = getTodoResJson as Todo[];

  const dataSource = getTodos.map((t) => ({ key: t.id, ...t }));
  const columns = [
    { title: "ID", key: "id", dataIndex: "id" },
    { title: "User ID", key: "userId", dataIndex: "userId" },
    { title: "Title", key: "title", dataIndex: "title" },
    { title: "Completed", key: "completed", dataIndex: "completed" },
  ];

  return (
    <>
      <div>Todo</div>
      <Table columns={columns} dataSource={dataSource} />
    </>
  );
};

export default TodoPage;
