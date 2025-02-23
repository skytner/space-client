import { FC, Fragment, JSX } from "react";
import { useUnit } from "effector-react";
import { $session } from "@/core/session/store";

const Main: FC = (): JSX.Element => {
  const session = useUnit($session);
  return (
    <Fragment>
      <p>{session?.userInfo.firstName}</p>
    </Fragment>
  );
};

export default Main;
