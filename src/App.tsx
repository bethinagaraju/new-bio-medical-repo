import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BiotechAgenda from './components/BiotechAgenda';
import AbstractSubmission from './components/AbstractSubmission';
import RegisterPage from './pages/RegisterPage';
import AbstractSubmissionPage from './pages/AbstractSubmissionPage';
import CheckoutPage from './components/CheckoutPage';
import RegisterPasses from './components/RegisterPasses';
import ThankyouPage from './pages/ThankyouPage';
import DisplayAbstracts from './components/DisplayAbstarcts';
import AdminLogin from './components/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>

    <ScrollToTop />

      <Routes>

        <Route path="/" element={<HomePage />} />
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        <Route path="/register" element={<RegisterPasses />} />
        <Route path='/AbstractSubmission' element={<AbstractSubmissionPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/thankyou' element={<ThankyouPage />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditionsPage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
        <Route path='/cookie-policy' element={<CookiePolicyPage />} />
        <Route path='/r0B01t26' element={<AdminLogin />} />
        <Route path="/abstracts" element={<ProtectedRoute><DisplayAbstracts /></ProtectedRoute>} />
        <Route path="/agenda" element={<BiotechAgenda />} />
        
      </Routes>

    </Router>
  );
}

export default App;
 