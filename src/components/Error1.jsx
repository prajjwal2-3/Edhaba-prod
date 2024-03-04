import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    console.log(err)
    return(
        <div>
            <h1>Did you see something unexpected here maybe the API has changed yet another time.</h1>
            <h2>If you can please inform me at</h2>
            <p><a href="mailto:prajjwalbh25@gmail.com">Send email</a></p>
            <h3> {err.status}</h3>
            <h3>{err.statusText}</h3>
        </div>
    )
}
export default Error;
