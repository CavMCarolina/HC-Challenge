import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ComoAgendar from "./Pages/ComoAgendar.jsx";
import Cadastro from "./Pages/Cadastro.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import SaibaMais from "./Pages/SaibaMais.jsx";
import Home from "./Pages/Home.jsx";
import NossaEquipe from "./Pages/NossaEquipe.jsx";
import RaioX from "./Pages/RaioX.jsx";
import Sangue from "./Pages/Sangue.jsx";
import Ultrassom from "./Pages/Ultrassom.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "nossaequipe", element: <NossaEquipe /> },
      { path: "agendamentos/comoagendar", element: <ComoAgendar /> },
      { path: "exames/raiox", element: <RaioX /> },
      { path: "exames/ultrassom", element: <Ultrassom /> },
      { path: "exames/sangue", element: <Sangue /> },
      { path: "voluntario/cadastro", element: <Cadastro /> },
      { path: "voluntario/saibamais", element: <SaibaMais /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
