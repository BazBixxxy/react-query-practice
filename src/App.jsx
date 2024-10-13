import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import QueryPage from "./pages/QueryPage";
import BooksPage from "./pages/BooksPage";
import NewsPage from "./pages/NewsPage";
import FormsPage from "./pages/FormsPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<QueryPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/forms" element={<FormsPage />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
