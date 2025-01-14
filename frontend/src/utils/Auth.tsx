import { useCallback, useEffect, useState } from 'react';
import { post } from "./http";

// Sign in page
import Register from '../pages/Signup'

type Props = {
  children: React.ReactNode;
};

const Auth = ({ children }: Props) => {
  // state as the website authenticates the user
  const [loading, setLoading] = useState<boolean>(true);
  // state for user authentication
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  // checks if user is authenticated,
  const auth = useCallback(async () => {
    setLoading(true);
    const response = await post("/login");
    if (!response.ok && response.status === 401) {
      setAuthenticated(false);
    } else {
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    auth();
  }, [auth]);

  // if the user is not authenticated, return
  return <>{!loading && (authenticated ? children : <Register />)}</>;
};

export default Auth;
