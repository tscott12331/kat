import ChatPage from "./pages/chat-page"
import Sidebar from './components/sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router";
import ProfilePage from "./pages/profile-page";

function App() {
    return (
        <Router>
        <div className="relative h-full p-2.5 bg-secondary text-char-1 font-rubik">
            <Sidebar />
            <Routes>
                <Route path="" element={ <ChatPage /> } />
                <Route path="/profile" element={ <ProfilePage /> } />
            </Routes>
        </div>
        </Router>
    )
}

export default App
