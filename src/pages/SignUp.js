import { Link } from 'react-router-dom';

import { SlCard } from '@shoelace-style/shoelace/dist/react';
import { SlInput } from '@shoelace-style/shoelace/dist/react';
import { SlButton } from '@shoelace-style/shoelace/dist/react';
import { SlIcon } from '@shoelace-style/shoelace/dist/react';

import classes from "./SignUp.module.css";

const SignUpPage = () => (
  <>
    <SlCard className={classes}>
      <SlInput name="email" />
      <SlInput name="password" />
      <SlInput name="confirm-pass" />
      <SlButton>Sign Up</SlButton>
      <p>Already have an account?</p><Link to="/login">Login</Link>
      <SlIcon></SlIcon>
    </SlCard>
  </>
);

export default SignUpPage;