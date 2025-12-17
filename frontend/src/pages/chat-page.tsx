import { useEffect, useState } from "react";
import ChatControls from "../components/chat-controls";
import { IChatMessage } from "../components/chat-message";
import ChatMessageList from "../components/chat-message-list";

export default function ChatPage() {
    const [chatMessages, setChatMessages] = useState<IChatMessage[]>([]);

    const getMessages = () => {
        setChatMessages([
            {
                username: 'buhster45',
                message: 'yo whats good w u brobro',
            },
            {
                username: 'fcbtomtom7',
                message: 'ahahahhahasfdljkasdflhas ;ldfj sdajf laks;jd f;lasj df;lkajs d;flkj a;sdlfj as;dlkf ja;sdljfa;sdlkjf;asldj f;alsdkjf;asldjfa;sldfj',
            },
            {
                username: 'buhster45',
                message: 'yo whats good w u brobro',
            },
            {
                username: 'fcbtomtom7',
                message: 'ahahahhahasfdljkasdflhas ;ldfj sdajf laks;jd f;lasj df;lkajs d;flkj a;sdlfj as;dlkf ja;sdljfa;sdlkjf;asldj f;alsdkjf;asldjfa;sldfj',
            },
            {
                username: 'buhster45',
                message: 'yo whats good w u brobro',
            },
            {
                username: 'fcbtomtom7',
                message: 'ahahahhahasfdljkasdflhas ;ldfj sdajf laks;jd f;lasj df;lkajs d;flkj a;sdlfj as;dlkf ja;sdljfa;sdlkjf;asldj f;alsdkjf;asldjfa;sldfj',
            },
            {
                username: 'buhster45',
                message: 'yo whats good w u brobro',
            },
            {
                username: 'fcbtomtom7',
                message: 'ahahahhahasfdljkasdflhas ;ldfj sdajf laks;jd f;lasj df;lkajs d;flkj a;sdlfj as;dlkf ja;sdljfa;sdlkjf;asldj f;alsdkjf;asldjfa;sldfj',
            },
            {
                username: 'buhster45',
                message: 'yo whats good w u brobro',
            },
            {
                username: 'fcbtomtom7',
                message: 'ahahahhahasfdljkasdflhas ;ldfj sdajf laks;jd f;lasj df;lkajs d;flkj a;sdlfj as;dlkf ja;sdljfa;sdlkjf;asldj f;alsdkjf;asldjfa;sldfj',
            },
            {
                username: 'buhster45',
                message: 'yo whats good w u brobro',
            },
            {
                username: 'fcbtomtom7',
                message: 'ahahahhahasfdljkasdflhas ;ldfj sdajf laks;jd f;lasj df;lkajs d;flkj a;sdlfj as;dlkf ja;sdljfa;sdlkjf;asldj f;alsdkjf;asldjfa;sldfj',
            },
            {
                username: 'buhster45',
                message: 'yo whats good w u brobro',
            },
            {
                username: 'fcbtomtom7',
                message: 'ahahahhahasfdljkasdflhas ;ldfj sdajf laks;jd f;lasj df;lkajs d;flkj a;sdlfj as;dlkf ja;sdljfa;sdlkjf;asldj f;alsdkjf;asldjfa;sldfj',
            },
            {
                username: 'buhster45',
                message: 'yo whats good w u brobro',
            },
            {
                username: 'fcbtomtom7',
                message: 'ahahahhahasfdljkasdflhas ;ldfj sdajf laks;jd f;lasj df;lkajs d;flkj a;sdlfj as;dlkf ja;sdljfa;sdlkjf;asldj f;alsdkjf;asldjfa;sldfj',
            },
            {
                username: 'buhster45',
                message: 'yo whats good w u brobro',
            },
            {
                username: 'fcbtomtom7',
                message: 'ahahahhahasfdljkasdflhas ;ldfj sdajf laks;jd f;lasj df;lkajs d;flkj a;sdlfj as;dlkf ja;sdljfa;sdlkjf;asldj f;alsdkjf;asldjfa;sldfj',
            },
            {
                username: 'buhster45',
                message: 'yo whats good w u brobro',
            },
            {
                username: 'fcbtomtom7',
                message: 'ahahahhahasfdljkasdflhas ;ldfj sdajf laks;jd f;lasj df;lkajs d;flkj a;sdlfj as;dlkf ja;sdljfa;sdlkjf;asldj f;alsdkjf;asldjfa;sldfj',
            },
            {
                username: 'buhster45',
                message: 'yo whats good w u brobro',
            },
            {
                username: 'fcbtomtom7',
                message: 'ahahahhahasfdljkasdflhas ;ldfj sdajf laks;jd f;lasj df;lkajs d;flkj a;sdlfj as;dlkf ja;sdljfa;sdlkjf;asldj f;alsdkjf;asldjfa;sldfj',
            },
            {
                username: 'buhster45',
                message: 'yo whats good w u brobro',
            },
            {
                username: 'fcbtomtom7',
                message: 'ahahahhahasfdljkasdflhas ;ldfj sdajf laks;jd f;lasj df;lkajs d;flkj a;sdlfj as;dlkf ja;sdljfa;sdlkjf;asldj f;alsdkjf;asldjfa;sldfj',
            },
        ])
    }

    useEffect(() => {
        getMessages();
    }, []);

    return (
        <div className="h-full p-2.5 bg-secondary flex flex-col text-char-1 font-rubik">
            <ChatMessageList chatMessages={chatMessages} />
            <ChatControls />
        </div>
    );
}
