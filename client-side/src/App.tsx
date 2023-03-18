import { Route, Routes } from "react-router-dom";
import Expenses from "./pages/Expenses";
import Home from "./pages/Home";
import RegistationPage from "./pages/RegistrationPage";
import Layout from "./wrraper/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="registration" element={<RegistationPage />} />
          <Route path="expenses" element={<Expenses />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
