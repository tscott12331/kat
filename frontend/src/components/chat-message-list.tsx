import ChatMessage, { IChatMessage } from "./chat-message";

interface IChatMessageListProps {
    chatMessages: IChatMessage[];
}

export default function ChatMessageList({
    chatMessages,
}: IChatMessageListProps) {
    return (
        <div className="grow bg-primary border-x border-t rounded-t-lg border-accent-4 overflow-auto">
            {chatMessages.map((cm, i) => 
                <ChatMessage chatMessage={cm} key={i} />
            )}
        </div>
    )
}
