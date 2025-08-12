import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import PrincipialView from "./views/PrincipalView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<PrincipialView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
