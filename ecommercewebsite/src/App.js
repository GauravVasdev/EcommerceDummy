import Core from "./core/Core";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import AdminTable from "./components/AdminTable/AdminTable";
import AdminForm from "./components/AdminForm/AdminForm";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";


function App() {
  return (
      <Core>
          <Routes>
          <Route path="/admin-table" element={<AdminTable />} />
          <Route path="/admin-form" element={<AdminForm />} />
          <Route path="/admin-form/:id" element={<AdminForm />} />
          <Route path="/*" element={<DefaultComponent /> } />
          </Routes>
      </ Core>
  );
}

export default App;
