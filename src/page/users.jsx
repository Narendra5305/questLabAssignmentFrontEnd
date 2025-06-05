import { UserModel} from "../component/userModal"
import "../page/users.css"
import { useContext } from "react"
import { UserContext } from "../context/userContext"


export  const User =()=>{
    const { userData, addUser} = useContext(UserContext) ;

    if (userData.length===0){
        return(
            <div className="loading-cont">
                <img src="https://i.gifer.com/ZKZg.gif" alt="loading-gif" />
            </div>
        )
    }

    return(
        <div className="user-main-cont">
            <div className="user-cont">
                {userData.map((item)=>(
                    <div className="card" key={item._id}>
                        <img className="card-image" src={item.profile_url} alt={`image of ${item.first_name}`} />
                        <h3>{item.first_name} {item.last_name}</h3>
                        <p>{item.role}</p>

                        <div className="social-link">
                            <a href={item.linkedin_url} target="blank">
                                <img src="https://www.svgrepo.com/show/504546/linkedin.svg" alt="linkdin-logo" />
                            </a>

                            <a href={item.twitter_url} target="blank">
                                <img src="https://img.icons8.com/?size=512&id=phOKFKYpe00C&format=png" alt="twitter-logo" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}