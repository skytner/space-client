import { PropsWithChildren } from "react";

type ButtonVariant = "standard";

export interface ButtonProps extends PropsWithChildren {
  variant: ButtonVariant;
}
