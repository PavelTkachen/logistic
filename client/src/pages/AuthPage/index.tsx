import React from 'react'
import { useAuth } from 'providers/AuthProvider'
import { useNavigate } from 'react-router-dom';

export const AuthPage: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <div>AuthPage</div>
      <button onClick={() => auth?.signIn('admin', () => {
        navigate('/users', { replace: true })
      })}>SignIn</button>
    </>
  )
}
