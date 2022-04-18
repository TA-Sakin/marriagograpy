import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./Login.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, passwordError] =
    useSendPasswordResetEmail(auth);

  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const from = location.state?.from?.pathname || "/";
  let popupError;
  //------------google sign in------------
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  // ------------ email and password login------------
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  // -----------error handling------------

  if (googleError) {
    popupError = <p className="text-danger">{googleError?.message}</p>;
    // toast(`${googleError?.message}` && "Popup closed");
  }
  //------------ password reset------------
  const handleResetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Please enter a valid email");
    }
  };

  //------------ redirect to the last page user entered------------
  if (googleUser || user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="w-25 mx-auto login pt-5">
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onBlur={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </Form.Group>
        {error?.message.includes("user") && (
          <p className="text-danger">{error?.message}</p>
        )}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onBlur={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </Form.Group>
        {error?.message.includes("pass") && (
          <p className="text-danger">{error?.message}</p>
        )}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Agree terms and conditions" />
        </Form.Group>
        <div className="d-flex justify-content-between align-items-center">
          <b onClick={handleResetPassword} className="forgotPass">
            Forgot your password?
          </b>
          <Button
            className="rounded-pill btn btn-outline-secondary text-white w-25 "
            variant="dark"
            type="submit"
          >
            Login
          </Button>
        </div>
        {popupError}
      </Form>
      <div>
        <h6 className="text-center mt-3">New to Marriagography? </h6>
        <Link className="text-decoration-none text-success" to="/register">
          <Button
            className="btn btn-outline-dark text-white rounded-pill w-100 mx-auto d-block"
            variant="secondary"
          >
            Please register
          </Button>
        </Link>
      </div>
      <div className="d-flex align-items-center my-2 justify-content-center">
        <div style={{ border: "1px solid gray" }} className="w-50"></div>
        <p className="px-2 pt-2">or</p>
        <div style={{ border: "1px solid gray" }} className="w-50"></div>
      </div>
      <Button
        onClick={handleGoogleSignIn}
        className="btn btn-outline-secondary align-items-center justify-content-center rounded-pill w-100 mx-auto d-block"
        variant="light"
        type="submit"
      >
        <FcGoogle className="icons" /> <b>Continue with Google</b>
      </Button>
      <br />
      <Button
        className="btn btn-outline-dark align-items-center justify-content-center rounded-pill w-100 mx-auto d-block"
        variant="light"
        type="submit"
      >
        <FaGithub className="icons" /> <b>Continue with Github</b>
      </Button>
      <br />
      <Button
        className="btn btn-outline-primary align-items-center justify-content-center rounded-pill w-100 mx-auto d-block"
        variant="light"
        type="submit"
      >
        <FaFacebook className="icons" /> <b>Continue with Facebook</b>
      </Button>
      <ToastContainer />
    </div>
  );
};

export default Login;
