import ReactDOM from "react-dom/client";
import routes from "./app/Router";
import { RouterProvider } from "react-router-dom";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <Provider store={store}>
  // <>
  //   <RouterProvider router={routes} />
  // </>
  // {/* </Provider> */ }
  <App />
);