import Messages from './Messages'
import MessageInput from './MessageInput'
import { IoChatbubblesOutline } from "react-icons/io5";

const MessageContainer = () => {
  const noChatSelected = false
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {noChatSelected? <NoChatSelected />: (
          <>
          {/* Header */}
          <div className="px-4 py-2 mb-2 bg-slate-500">
            <span className='label-text'>To:</span>
            <span className='font-bold text-gray-900'> Isa Musa</span>
          </div>
  
          {/* Messages */}
          <Messages/>
  
          {/* send message */}
          <MessageInput/>
        </>
      )}
    
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () =>{
  return(
    <div className="flex items-center justify-center w-full h-full">
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
          <p>Welcome👋 Sadiq Dayyub ❄️</p>
          <p>Select a chat to start messaging</p>
          <IoChatbubblesOutline className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}
