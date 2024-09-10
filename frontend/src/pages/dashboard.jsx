import { useAuthContext } from '@asgardeo/auth-react'

const Dashboard = () => {
    const { state } = useAuthContext();

    return (
        <>
            <h1>Dashboard</h1>

            <p>{

                JSON.stringify(state)
            }</p>
        </>
    )
}

export default Dashboard;