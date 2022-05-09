import React from 'react'
import { useAuth } from 'providers/AuthProvider';

export const UserPage: React.FC = () => {
  const auth = useAuth();
  return (
    <>
      <div>UserList</div>
      <button onClick={() => auth?.signOut()}>SignOut</button>
    </>
  )
}
