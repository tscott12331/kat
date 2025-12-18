export interface IChatMessage {
    username: string,
    message: string,
}


interface IChatMessageProps {
    chatMessage: IChatMessage
}

export default function ChatMessage({
    chatMessage
}: IChatMessageProps) {
    return (
        <p className="p-1.5 hover:bg-tertiary/10! nth-of-type-[2n+1]:bg-secondary/50 text-char-3 ">{chatMessage.username}: {chatMessage.message}</p>
    )
}
