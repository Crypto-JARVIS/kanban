import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Login from "./Login";
import Signup from "./Signup";
import GoogleIcon from "./GoogleIcon";
import { useLocation } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/firebaseAuth";
// import { useAuth } from "../Context/AuthContext/authContext";

const Auth = () => {
  // const { userLoggedIn } = useAuth();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = async ({ e, email, password }) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password).catch((err) => {
        setIsLoggedIn(false);
      });
      setIsLoggedIn(true);
      setIsSigningIn(true);
      // doSendEmailVerification()
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithGoogle().catch((err) => {
        setIsSigningIn(false);
        setIsLoggedIn(false);
      });
      setIsLoggedIn(true);
      setIsSigningIn(false);
    }
  };

  const location = useLocation();
  const isRootRoute = location.pathname === "/";

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <Container maxWidth="xs" sx={{ mt: "30vh" }}>
        <Stack spacing={2} justifyContent="center">
          {isRootRoute && !isLoggedIn ? (
            <>
              <Login onClick={onSubmit} />
              <Typography textAlign="center">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  style={{ fontWeight: "bold", color: "#00C6BE" }}
                >
                  SignUp
                </Link>
              </Typography>
            </>
          ) : (
            <>
              <Signup />
              <Typography textAlign="center">
                Already have an account?{" "}
                <Link to="/" style={{ fontWeight: "bold", color: "#00C6BE" }}>
                  LogIn
                </Link>
              </Typography>
            </>
          )}

          <Box display="flex" flexDirection="row" textAlign="center">
            <Box
              borderBottom={2}
              marginBottom={1.25}
              marginRight={1}
              width="100%"
            ></Box>
            <Box fontWeight="bold" width="fit-content" lineHeight="20px">
              OR
            </Box>
            <Box
              borderBottom={2}
              marginBottom={1.25}
              marginLeft={1}
              width="100%"
            ></Box>
          </Box>
          <Button
            disabled={isSigningIn}
            onClick={(e) => {
              onGoogleSignIn(e);
            }}
            variant="contained"
            startIcon={<GoogleIcon />}
            sx={{
              fontWeight: "bold",
              padding: "8px",
              backgroundColor: "white",
              ":hover": {
                backgroundColor: "#D2D5DB",
              },
            }}
          >
            Continue with Google
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Auth;
