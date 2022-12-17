import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Features = () => {
    const { id } = useParams()
    const [user, getUserData] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`).then((data) => {
            console.log(data)
            getUserData(data?.data)
        })
    }, [])

    return (
        <div className="container jumbotron">
            <h3>Features { id }</h3>
            <br/>
            {
                user.map((v, k) => {
                    return(
                        <li key={k}>{ v?.userId } : { v?.title }</li>
                    )
                })
            }
        </div>
    )
}

export default Features;