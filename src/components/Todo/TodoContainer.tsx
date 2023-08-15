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

  const getBalanceRes = await callGetApi("/balance");
  const getBalanceResJson = await getBalanceRes.json();
  console.log(getBalanceResJson);

  const getNetworkRes = await callGetApi("/network");
  const getNetworkResJson = await getNetworkRes.json();
  console.log(getNetworkResJson);
  const networkObj = getNetworkResJson.network;
  console.log(networkObj);

  const getFeeRes = await callGetApi("/fee");
  const getFeeResJson = await getFeeRes.json();
  console.log(getFeeResJson);
  const feeData = getFeeResJson.feeData;
  console.log(feeData);

  return (
    <div>
      <div>Balance: {getBalanceResJson.balance}</div>
      <div>
        Network: [name: {networkObj.name}][chainId: {networkObj.chainId}]
      </div>
      <div>
        FeeData: [gasPrice: {feeData.gasPrice}][maxFeePerGas:{" "}
        {feeData.maxFeePerGas}][maxPriorityFeePerGas:{" "}
        {feeData.maxPriorityFeePerGas}]
      </div>
      <TodoPresenter username={user?.username} dataSource={dataSource} />
    </div>
  );
};

export default TodoContainer;
