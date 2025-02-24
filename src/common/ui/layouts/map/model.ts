import { ReactNode } from "react";

type LocationTitle = {
  locationName: string;
  additionalInfo?: string;
};

type Breadcrumb = {
  title: string;
  path: string;
};

export interface MapLayoutProps {
  locationTitle: LocationTitle;
  breadcrumbs: Breadcrumb[];
  map: ReactNode;
  aside?: ReactNode;
  objectPanel: ReactNode
}
