import { FC, JSX, lazy } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";

import { paths } from "@/common/router";
import { BaseLayout, MapLayout, SuspenseLayout } from "@/common/ui/layouts";

const Main = lazy(() => import("@/entities/main/page"));

export const routes = (): RouteObject[] => [
  {
    path: paths.undefined,
    element: <Navigate to={paths.core} replace={true} />,
  },
  {
    path: paths.core,
    element: (
      <MapLayout
        map={<div>this will map</div>}
        locationTitle={{ locationName: "Space" }}
        breadcrumbs={[]}
        aside={<></>}
        objectPanel={<></>}
      />
    ),
  },
];

export const RouteProvider: FC = (): JSX.Element => (
  <SuspenseLayout>{useRoutes(routes())}</SuspenseLayout>
);
