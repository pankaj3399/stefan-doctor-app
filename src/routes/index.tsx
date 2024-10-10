import React, { Suspense } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from '../components/molecule/topbar';

const Login = React.lazy(() => import('../pages/auth/login'));
const Signup = React.lazy(() => import('../pages/auth/signup'));
const ForgotPassword = React.lazy(() => import('../pages/auth/forgot-password'));
const VerifyOTP = React.lazy(() => import('../pages/auth/verify-otp'));
const RoleSelection = React.lazy(() => import('../pages/auth/roles'));

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/roles" element={<RoleSelection />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
