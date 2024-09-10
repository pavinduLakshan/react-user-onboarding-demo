import { useAuthContext } from "@asgardeo/auth-react";

const ProtectedRoute = ({ children }) => {

    const { state } = useAuthContext();


    if (!state.isAuthenticated) {
        return <Unauthenticated />;
    }


    return children;
};

export default ProtectedRoute