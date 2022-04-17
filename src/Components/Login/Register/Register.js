import React from "react";
import { Button, Form } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
const Register = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  return (
    <div className="w-25 mx-auto login pt-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Agree terms and conditions" />
        </Form.Group>
        <div className="d-flex justify-content-between align-items-center">
          <p>Forgot password?</p>
          <Button
            className="rounded-pill btn btn-outline-secondary text-white w-25 "
            variant="dark"
            type="submit"
          >
            Register
          </Button>
        </div>
      </Form>
      <div>
        <h6 className="text-center mt-3">Have an account? </h6>
        <Link className="text-decoration-none text-success" to="/login">
          <Button
            className="btn btn-outline-secondary text-white rounded-pill w-100 mx-auto d-block"
            variant="dark"
          >
            Login
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
    </div>
  );
};

export default Register;
