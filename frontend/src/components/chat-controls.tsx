import ChatRTE from './chat-rte';

export default function ChatControls() {
    return (
        <div className="p-1 px-1.5 bg-primary border-x border-b border-accent-4 rounded-x-lg rounded-b-lg">
            <ChatRTE />
            <div className="flex gap-3 h-7 items-center">
                <div className="w-6 h-6 bg-highlight-2"></div>
                <div className="w-6 h-6 rounded-full ml-auto bg-highlight-2"></div>
                <button className="w-15 h-6 rounded-sm bg-highlight-1 hover:bg-highlight-2 text-char-2 hover:text-char-3 hover:outline hover:outline-accent-3">Send</button>
            </div>
        </div>
    )
}
