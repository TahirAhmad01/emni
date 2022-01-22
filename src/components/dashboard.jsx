import Auth from "../hooks/useAuth"

export default function DashBoard(){

    console.log(Auth)
    
    return(
        <div>
            <h1>This is Dashboard page</h1>
            {Auth ? "You are logged in" : "You are logged out"}
        </div>
    )
}