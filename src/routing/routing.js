import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { MAinComponent } from "../components/main";
import { HeaderComponent } from "../components/header/header";
import { BodyComponent } from "../components/body/body";
import NoPage from "../components/noPageFound";
import { CardDetailComponent } from "../components/cardDetails";
const Layout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MAinComponent />} />
          <Route path="favourites" element={<BodyComponent />} />
          <Route path="card-detail/:id" element={<CardDetailComponent />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
