import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { UserPage } from './pages/UsersPage';
import { AuthPage } from './pages/AuthPage';
import { AuthProvider } from './providers/AuthProvider';
import { RequireAuth } from './componets/common/RequireAuth';
import { RoutePage } from 'common/entities';
import { MainLayout } from 'layouts/MainLayout';

const PRIVATE_ROUTES: RoutePage[] = [
  {
    id: 'userPage',
    path: 'users',
    element: <UserPage />
  }
]

export const AppRoutes: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RequireAuth />}>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<UserPage />} />
              <Route path='users' element={<UserPage />} />
            </Route>
          </Route>
          <Route path='login' element={<AuthPage />} />
          <Route path='*' element={<div>Not Found</div>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
