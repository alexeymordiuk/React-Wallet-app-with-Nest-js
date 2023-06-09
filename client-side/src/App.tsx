import { Route, Routes } from "react-router-dom";
import Expenses from "./pages/StatisticsPage";
import Home from "./pages/Home";
import RegistationPage from "./pages/RegistrationPage";
import Transaction from "./pages/Transaction";
import Layout from "./wrraper/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="registration" element={<RegistationPage />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="transaction" element={<Transaction />} />
      </Route>
    </Routes>
  );
}

export default App;
