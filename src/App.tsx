import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BASENAME, useStaticRedirect } from "./utils/redirect";
import { Layout } from "./components/Layout";
import NotFound from "./pages/NotFound";

// Lazy load page components
const HomePage = lazy(() => import("./pages/Home"));
const PitchBuilderPage = lazy(() => import("./pages/PitchBuilder"));
const BioBuilderPage = lazy(() => import("./pages/BioBuilder"));
const DealBuilderPage = lazy(() => import("./pages/DealBuilder"));
const OldBioBuilderPage = lazy(() => import("./pages/OldBioBuilder"));

function AppPage() {
  useStaticRedirect();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/pitch"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <PitchBuilderPage />
          </Suspense>
        }
      />
      <Route
        path="/bio"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <BioBuilderPage />
          </Suspense>
        }
      />
      <Route
        path="/deal"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <DealBuilderPage />
          </Suspense>
        }
      />
      <Route
        path="/oldbio"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <OldBioBuilderPage />
          </Suspense>
        }
      />
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
