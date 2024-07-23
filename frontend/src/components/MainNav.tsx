import React from "react";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MainNav = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect();
  };

  return (
    <Button
      variant={"ghost"}
      className="font-bold hover:text-orange-500 hover:bg-white"
      onClick={handleLogin}
    >
      Log In
    </Button>
  );
};

export default MainNav;
