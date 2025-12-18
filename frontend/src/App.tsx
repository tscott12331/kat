import ChatPage from "./pages/chat-page"
import Sidebar from './components/sidebar';

function App() {
    return (
        <div className="relative h-full p-2.5 bg-secondary text-char-1 font-rubik">
            <Sidebar />
            <ChatPage />
        </div>
    )
}

export default App
