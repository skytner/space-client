import { FC, Fragment, JSX, useState } from "react";
import { MapLayoutProps } from "./model";

import "./styles.scss";
import { Burger } from "../../burger";

export const MapLayout: FC<MapLayoutProps> = ({
  map,
  locationTitle,
  breadcrumbs,
  aside,
  objectPanel,
}): JSX.Element => {
  const [isOpenAside, setIsOpenAside] = useState<boolean>(false);
  const isOpenAsideModificator = isOpenAside ? "opened" : "closed";

  const [isOpenPanel, setIsOpenPanel] = useState<boolean>(true);
  const isOpenPanelModificator = isOpenPanel ? "opened" : "closed";
  const { locationName, additionalInfo } = locationTitle;

  const showObjectPanel = () => {
    setIsOpenPanel(true);
  };

  const hideObjectPanel = () => {
    setIsOpenPanel(false);
  };

  const toggleAside = () => {
    setIsOpenAside(!isOpenAside);
    setIsOpenPanel(!isOpenPanel);
  };
  return (
    <main className="layout">
      <header className="layout__header">
        <button className="layout__header_button" onClick={toggleAside}>
          <Burger isOpened={isOpenAside} />
        </button>
        <div className="layout__header__wrapper">
          <h3 className="layout__header__title">Space</h3>
        </div>
      </header>
      {aside && (
        <aside
          className={`layout__aside layout__aside_${isOpenAsideModificator}`}
        ></aside>
      )}
      <div className="layout__map">{map}</div>;
      <div
        className={`layout__object-panel layout__object-panel_${isOpenPanelModificator}`}
        onClick={hideObjectPanel}
      >
        {objectPanel}
      </div>
    </main>
  );
};
