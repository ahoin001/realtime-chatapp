import { useSignInWithGoogle } from "react-firebase-hooks/auth";

export const GoogleSignIn = ({ auth }) => {
  const [SignInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <>
      <button
        onClick={async () => {
          console.log("Signing in with google");
          await SignInWithGoogle();
          console.log("Signed in with google");
        }}
      >
        Sign In With Google
      </button>
    </>
  );
};
