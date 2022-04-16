import { db } from "../Firebase/FirebaseConfig";
import { collection, query, limit, orderBy } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { ChatMessage } from "./ChatMessage";

const myQuery = query(
  collection(db, "messages"),
  orderBy("createdAt"),
  limit(25)
);
export const ChatRoom = () => {
  // returns array of each document in collection as an object from database
  const [messages, messagesLoading] = useCollectionData(myQuery);
  console.log("CHATROOM POW: ", messages);

  if (messagesLoading) {
    return <div>LOADING</div>;
  }
  return (
    <div>
      <p>messages exsists!</p>
      {messages.map((msg) => {
        return <ChatMessage key={msg.createdAt} message={msg} />;
      })}
    </div>
  );
};
