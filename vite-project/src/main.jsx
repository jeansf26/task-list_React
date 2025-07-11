import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import TaskPage from "./pages/TaskPage.jsx";

//Gerencia o roteamento dentro da aplicação
//Carrega outros componentes mudando a URL 
//(createBrowserRouter não é suportado pelo github pages)
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task",
    element: <TaskPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
