export const SignIn = () => {
  const googleAuth = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopUp(provider);
  };
};
