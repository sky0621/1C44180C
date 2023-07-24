import TodoPresenter, { Todo } from "@/components/Todo/TodoPresenter";
import { callGetApi } from "@/lib/api";
import { User } from "@/lib/db";

const TodoContainer = async () => {
  const userRes = await callGetApi("/user");
  const userResJson = await userRes.json();
  const user: User = userResJson as User;
  console.log(user);

  const getTodoRes = await callGetApi("/todo");
  const getTodoResJson = await getTodoRes.json();
  const getTodos: Todo[] = getTodoResJson as Todo[];
  const dataSource: (Todo & { key: number })[] = getTodos.map((t) => ({
    key: t.id,
    ...t,
  }));

  return <TodoPresenter username={user?.username} dataSource={dataSource} />;
};

export default TodoContainer;
