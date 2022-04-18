import { auth } from "../Firebase/FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

export const ChatMessage = ({ message }) => {
  const [user, loading, error] = useAuthState(auth);

  const { text } = message;

  //   Style Message differently if it is from User or sender
  //   const messageBelongToSignedInUser = uid ===
  return (
    <>
      <div>ChatMessage Component Message:</div>
      <div>{text}</div>
    </>
  );
};
