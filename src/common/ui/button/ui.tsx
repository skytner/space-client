import { FC, JSX } from "react";

import { ButtonProps } from "./model";

export const Button: FC<ButtonProps> = ({ children, variant }): JSX.Element => {
  return <button className={`button_variant_${variant}`}>{children}</button>;
};
