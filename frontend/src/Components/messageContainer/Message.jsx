import React from 'react'
import { useAuthContext } from "../context/AuthContext";
import { useConversation } from '../../zuzstant/useConversation'
import { extractTime } from '../../utils/extractTime'

const Message = ({message}) => {
  const{ authUser } = useAuthContext()
  const { selectedConversation } = useConversation()
  const formMe = authUser._id === message.senderId
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = formMe? "chat-end" : "chat-start"
  const profilePic = formMe  ? authUser.profilePic : selectedConversation?.profilePic
  const bubbleBgColor = formMe ? "bg-blue-500" : ''
  const shakeClass = message.shouldShake? 'shake' : ""
  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className="w-10 rounded-full">
            <img src={profilePic} alt="User avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-1`}>{message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime !== null? formattedTime : getDate}</div>
    </div>
  )
}

export default Message
