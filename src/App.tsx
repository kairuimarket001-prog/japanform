import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import RefactoredHome from './pages/RefactoredHome';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import SpecifiedCommercialTransactionAct from './pages/SpecifiedCommercialTransactionAct';
import CompanyInfo from './pages/CompanyInfo';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { initializeGoogleTracking } from './lib/googleTracking';

function App() {
  useEffect(() => {
    initializeGoogleTracking();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<RefactoredHome />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/specified-commercial-transaction-act" element={<SpecifiedCommercialTransactionAct />} />
        <Route path="/company" element={<CompanyInfo />} />

        {/* Admin Routes */}
        <Route path="/adsadmin" element={<AdminLogin />} />
        <Route
          path="/adsadmin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
