import { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessages from "../../hooks/useSendMessages";

const MessageInput = () => {
  const [message, setMessage] = useState()
  const{ loading, sendMessage }=useSendMessages()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(!message) return
    await sendMessage(message)
    setMessage("")
  }
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="absolute inset-y-0 end-0 flex items-center pe-3" 
              disabled={loading}
            >
                {loading ? <span className="loading loading-spinner"></span> :  <IoSend />}
            </button>
      </div>
    </form>
  );
};

export default MessageInput;

//Strt code file
/* import { IoSend } from "react-icons/io5";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white"
          placeholder="Send a message"
        />
      </div>

      <button
        type="submit"
        className="absolute inset-y-0 end-0 flex items-center pe-3"
      >
        <IoSend />
      </button>
    </form>
  );
};

export default MessageInput;
 */
