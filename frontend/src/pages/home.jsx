const Home = () => {
    return (
        <>
            <h1>React User Onboarding Demo with Asgardeo</h1>

            {import.meta.env.REACT_APP_IS_CUSTOM_SIGNUP_FLOW_ENABLED == true && (
                <a href="/register">
                    <button>Sign up</button>
                </a>
            )}
        </>
    )
}

export default Home;