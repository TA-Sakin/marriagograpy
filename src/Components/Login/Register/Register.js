import React from "react";
import { Button, Form } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import auth from "../../../firebase.init";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;

  // ------------google sign in------------
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  //------------error handling---------
  if (error || googleError) {
    errorElement = <p className="text-danger"> {googleError?.message}</p>;
  }
  //------------redirect to home after signin------------
  if (user || googleUser) {
    navigate("/home");
  }

  // ------------ email and password register ------------

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
    toast("Account created");
  };

  return (
    <div className="w-25 mx-auto login pt-5">
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Agree terms and conditions" />
        </Form.Group>
        <div className="d-flex justify-content-end align-items-center">
          <Button
            className="rounded-pill btn btn-outline-secondary text-white w-25 "
            variant="dark"
            type="submit"
          >
            Register
          </Button>
        </div>
        {errorElement}
      </Form>
      <div className="d-flex justify-content-center">
        <h6 className=" mt-3">
          Have an account?
          <Link className="text-success" to="/login">
            {" "}
            Login
          </Link>
        </h6>
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

export default Register;
