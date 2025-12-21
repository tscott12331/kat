import { useEffect, useState } from 'react';
import { GetAuthURL } from '../../wailsjs/go/services/AuthService'
import { BrowserOpenURL } from '../../wailsjs/runtime/runtime'

export default function ProfilePage() {
    const [authURL, setAuthURL] = useState<string|null>(null);

    useEffect(() => {
        async function getAuthURL() {
            setAuthURL(await GetAuthURL());
        }

        getAuthURL();
    }, []);

    return (
        <div className="h-full flex flex-col">
            <h1>profile page</h1>
            {
            authURL ?
            <a
            className="cursor-pointer"
            onClick={() => BrowserOpenURL(authURL)}
            >sign in</a>
            :
            <p>loading auth URL</p>
            }
        </div>
    );
}
