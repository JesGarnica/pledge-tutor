import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, setToken} from '../redux/authSlice'
import { setAuthCred } from '../redux/authCredSlice'

function useValidateAccessCode() {
    const loggedIn = useSelector((state) => state.auth.loggedIn)
    const authCred = useSelector((state) => state.authCred)
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)

    useEffect(() => {
        let ignore = false
        const controller = new AbortController()
        async function fetchAccessResults() {
            setLoading(true)
            let responseBody = {}
            try {
                const response = await fetch(`http://localhost:8000/users/auth`, {
                    method: 'POST', // Specify the method as POST
                    headers: {
                        'Content-Type': 'application/json', // Set content type to JSON
                    },
                    body: JSON.stringify(authCred), // Send the query in the request body
                    signal: controller.signal,
                });
                if (response.status !== 200) {
                    console.log("== status:", response.status)
                    setError(true)
                } else {
                    setError(false)
                    responseBody = await response.json()
                    console.log("== responseBody:", responseBody)
                }
            } catch (e) {
                if (e instanceof DOMException) {
                    console.log("HTTP request cancelled")
                } else {
                    setError(true)
                    console.error("Error:", e)
                    throw e
                }
            }
            if (!ignore) {
                if(responseBody.token) {
                    dispatch(setToken(responseBody.token))
                    dispatch(login())
                    dispatch(setAuthCred({username: "", password: ""}))
                }
                console.log("access token: ", responseBody.token)
                console.log("logged in: ", loggedIn)
                setLoading(false)
            }
        }
        if (authCred.username != "" && authCred.password != "") {
            fetchAccessResults()
        }
        return () => {
            ignore = true
            controller.abort()
        }
    }, [dispatch, loggedIn, authCred.username, authCred.password])
    return [loading, error ]
}

export default useValidateAccessCode;