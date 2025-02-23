import { FC, JSX, lazy } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";

import { paths } from "@/shared/router";
import { BaseLayout, SuspenseLayout } from "@/shared/ui/layouts";

const Main = lazy(() => import("@/entities/main/page"));

export const routes = (): RouteObject[] => [
  {
    path: paths.undefined,
    element: <Navigate to={paths.core} replace={true} />,
  },
  {
    path: paths.core,
    element: <BaseLayout main={<Main/>} heading={<></>} />,
  },
];

export const RouteProvider: FC = (): JSX.Element => (
  <SuspenseLayout>{useRoutes(routes())}</SuspenseLayout>
);
