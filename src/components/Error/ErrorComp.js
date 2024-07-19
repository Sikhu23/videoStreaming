import { useRouteError } from "react-router-dom"

export default ErrorComp=()=>{
    const errorDetails = useRouteError()
    console.log(errorDetails)
    return(
        <>
        <p>{errorDetails.status}</p>
        <p>{errorDetails.statusText}</p>
        </>
    )
}