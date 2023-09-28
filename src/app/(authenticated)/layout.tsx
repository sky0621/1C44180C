import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AuthenticatedLayout = (props: Props) => {
  return (
    <>
      <div>AuthenticatedLayout</div>
      {props.children}
    </>
  );
};

export default AuthenticatedLayout;
