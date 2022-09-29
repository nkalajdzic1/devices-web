import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LoadingPage, Page404 } from "lib/components";
import { ROUTE_PATHS } from "lib/constants";

import { Devices } from "features/Devices";

const DeviceInfo = lazy(() => import("features/Devices/DeviceInfo"));

const ROUTES = {
  HOME: {
    path: ROUTE_PATHS.HOME,
    exact: true,
    element: <Devices />,
  },
  DEVICES: {
    path: ROUTE_PATHS.DEVICES,
    exact: true,
    element: <Devices />,
  },
  DEVICE_INFO: {
    path: ROUTE_PATHS.DEVICE_INFO,
    exact: true,
    element: <DeviceInfo />,
  },
  NOT_FOUND: {
    path: ROUTE_PATHS.NOT_FOUND,
    exact: true,
    element: <Page404 />,
  },
};

const routesArr = Object.values(ROUTES);

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Router>
        <Routes>
          {routesArr.map((x, i) => (
            <Route key={`route-${i}`} {...x} />
          ))}
        </Routes>
      </Router>
    </Suspense>
  );
};

export default AppRoutes;
