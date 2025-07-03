import { useContext } from "react"
import MyContext from "../Context/MyContext"


function Profile() {
    const {user} = useContext(MyContext);
    

    if(!user) return <h1>Please LOGIN...... Dude.</h1>
  return (
    <div>


        <h2>Profile</h2>
        <h3>name:{user.userName} </h3>
        <h3>Password:{user.password} </h3>



    </div>
  )
}

export default Profile