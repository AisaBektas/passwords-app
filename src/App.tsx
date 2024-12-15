import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./modules/home/pages/HomePage";
import { ROUTES } from "./core/navigation/routes.enum";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.NOT_FOUND} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
