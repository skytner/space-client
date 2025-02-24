import { FC, JSX } from "react";

import { WithProviders } from "./providers";
import "../core/styles/_core.scss";

const Application: FC = (): JSX.Element => (
  <div className="app">
    <WithProviders />
  </div>
);

export default Application;
