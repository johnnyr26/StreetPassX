import { useCallback, useEffect, useState } from "react";
import { post } from "./http";

// Sign in page
import Register from "../pages/Signup";

type Props = {
  children: React.ReactNode;
};

const Auth = ({ children }: Props) => {
  // state as the website authenticates the Member
  const [loading, setLoading] = useState<boolean>(true);
  // state for Member authentication
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  // checks if Member is authenticated,
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

  // if the Member is not authenticated, return
  return <>{!loading && (authenticated ? children : <Register />)}</>;
};

export default Auth;
