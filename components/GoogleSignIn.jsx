import { useSignInWithGoogle } from "react-firebase-hooks/auth";

export const GoogleSignIn = ({ auth }) => {
  const [SignInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <>
      <button onClick={() => SignInWithGoogle()}>Sign In With Google</button>
    </>
  );
};
