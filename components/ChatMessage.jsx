export const ChatMessage = ({ message }) => {
  const { text } = message;

  return (
    <>
      <div>ChatMessage Component Message:</div>
      <div>{text}</div>
    </>
  );
};
