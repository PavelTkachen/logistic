import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from 'providers/AuthProvider';

export const RequireAuth: React.FC = () => {
  let auth = useAuth();
  let location = useLocation();
  return !auth?.user ? <Navigate to="/login" state={{ from: location }} replace /> : <Outlet />
}