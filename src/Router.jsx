import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Callback from "./Callback";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </BrowserRouter>
  );
}
