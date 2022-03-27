import "./App.css";
import "./index.css";
import { createBrowserHistory } from "history";
import { Route, withRouter} from "react-router-dom";
import { renderRouteAdmin} from "./routes";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actTryLogin } from "./Admin/AuthPage/modules/actions";
export const history = createBrowserHistory();

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actTryLogin(props.history));
  }, []);
  return  (
    <Suspense
     fallback = {
       <>
       <Loader />
       </>
     }
     >
       <ScrollToTop>
         {renderRouteAdmin()}
         <Route
         path="/admim"
         exact
         component = {lazy(() => import("./Admin/AuthPage"))}
         />
       </ScrollToTop>
     </Suspense>
  );
}
export default withRouter(App);