import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// LAZY LOADING THE PAGES
const HomePage = lazy(() => import("./pages/Homepage"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}