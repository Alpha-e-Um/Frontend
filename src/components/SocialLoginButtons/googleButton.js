import React, { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleButton = ({ onProfileChange }) => {
  const [user, setUser] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          },
        )
        .then((res) => {
          onProfileChange({
            type: "google",
            name: res.data.name,
            email: res.data.email,
            picture: res.data.picture,
          });
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return <button onClick={login}>Google</button>;
};
export default GoogleButton;
