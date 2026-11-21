import {Route, Routes} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";

function Router() {
  return (
      <Routes>
          <Route path="/" element={<DefaultLayout/>}>
              {/* Index Page */}
              <Route index element={<HomePage/>}/>
              {/* Project Page */}
              <Route path="project/:name" Component={ProjectPage}/>
              {/* Error Page */}
              <Route path="*" element={<ErrorPage errorCode={404}/>}/>
          </Route>
      </Routes>
  )
}

export default Router