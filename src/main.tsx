// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.tsx";
import Home from "./components/Home";
import ContactPage from "./components/contacts";
import Projects from "./components/Projects";
import Certificates from "./components/certificates/index.tsx";
import Social from "./components/social/index.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="project" element={<Projects />} />
      <Route path="certificates" element={<Certificates />} />
      <Route path="social" element={<Social />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
