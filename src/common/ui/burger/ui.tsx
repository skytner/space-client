import { FC, JSX } from "react";

import "./styles.scss";

export const Burger: FC<BurgerProps> = ({ isOpened }): JSX.Element => {
  const burgerModificator = isOpened ? "opened" : "";
  return (
    <div className={`burger burger_${burgerModificator} burger--rounded`}>
      <div className="burger__line burger__line--top"></div>
      <div className="burger__line burger__line--center"></div>
      <div className="burger__line burger__line--bottom"></div>
    </div>
  );
};
