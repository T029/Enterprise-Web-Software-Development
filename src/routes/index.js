import { lazy } from "react";

// import HomeTemplate from "../containers/Home";
import AdminTemplate from "../Admin";

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: lazy(() => import("../Admin/Dashboard")),
  },
  // {
  //   exact: false,
  //   path: "/dashboard/editfilm/:id",
  //   component: lazy(() => import("../containers/Admin/Film/EditFilm/EditFilm")),
  // },
  // {
  //   eaxct: false,
  //   path: "/dashboard/film",
  //   component: lazy(() => import("../containers/Admin/Film/film")),
  // },
  // {
  //   eaxct: false,
  //   path: "/dashboard/user",
  //   component: lazy(() => import("../containers/Admin/User")),
  // },
  // {
  //   eaxct: false,
  //   path: "/dashboard/adduser",
  //   component: lazy(() => import("../containers/Admin/User/AddUser")),
  // },
  // {
  //   eaxct: false,
  //   path: "/dashboard/show",
  //   component: lazy(() => import("../containers/Admin/Showtime")),
  // },
];

// function renderRouteHome() {
//   return routesHome.map((route, index) => {
//     return (
//       <HomeTemplate
//         key={index}
//         exact={route.exact}
//         path={route.path}
//         Component={route.component}
//       />
//     );
//   });
// }
function renderRouteAdmin() {
  return routesAdmin.map((route, index) => {
    return (
      <AdminTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        Component={route.component}
      />
    );
  });
}

export { renderRouteAdmin };
