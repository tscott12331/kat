import { useSearchParams } from "react-router"

export default function AuthPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    
    return (
        <>
            <h1>auth page</h1>
            <h2>{searchParams.get("code")}</h2>
            <h2>{searchParams.get("state")}</h2>
        </>
    )
}
