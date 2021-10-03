import { useState } from 'react';

type AuthUser = {
  name: string
  email: string
}

export const User = () => {

  // type assertion 
  // when we know better than the compiler
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "Paul",
      email: "kbu715@gmail.com"
    })
  };
  
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  )
}