import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const UnAuthenticatedLayout = (props: Props) => {
  return (
    <>
      <div>UnAuthenticatedLayout</div>
      {props.children}
    </>
  );
};

export default UnAuthenticatedLayout;
