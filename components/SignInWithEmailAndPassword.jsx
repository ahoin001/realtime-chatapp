import { useState } from "react";

import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";

export const SignInWithEmailAndPassword = ({ auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [
    createUserWithEmailAndPassword,
    signUpUser,
    loadingSignUp,
    errorSignUp,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [
    signInWithEmailAndPassword,
    signInUser,
    loadingSignIn,
    errorSignIn,
  ] = useSignInWithEmailAndPassword(auth);

  if (errorSignUp) {
    return (
      <div>
        <p>Error: {errorSignUp.message}</p>
      </div>
    );
  }
  if (loadingSignUp) {
    return <p>Loading Sign Up...</p>;
  }
  if (signUpUser) {
    return (
      <div>
        <p>Signed In User: {signUpUser.email}</p>
      </div>
    );
  }

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => createUserWithEmailAndPassword(email, password)}>
        Register
      </button>
      <button onClick={() => signInWithEmailAndPassword(email, password)}>
        Sign In
      </button>
    </div>
  );
};
