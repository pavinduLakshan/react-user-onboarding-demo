import { useAuthContext } from "@asgardeo/auth-react";

const Home = () => {
    const { signIn } = useAuthContext();

    return (
        <>
            <h1>React User Onboarding Demo with Asgardeo</h1>

            {import.meta.env.VITE_IS_CUSTOM_SIGNUP_FLOW_ENABLED == "true" ? (
                <a href="/register">
                    <button>Sign up</button>
                </a>
            ) : (
                <button onClick={ () => signIn() }>Sign In</button>
            )}
        </>
    )
}

export default Home;