import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { BASENAME, useStaticRedirect } from "./utils/redirect";
import PitchBuilder from "./pages/PitchBuilder";

function AppPage() {
  useStaticRedirect();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pitch" element={<PitchBuilder />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router basename={BASENAME}>
      <Layout>
        <AppPage />
      </Layout>
    </Router>
  );
}
