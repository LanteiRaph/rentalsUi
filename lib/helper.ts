export const getServerSideToken = async (user:any):Promise<string> => {
    //Mke request to the backend server for a token for the current user.
    const userToken = await fetch('http://localhost:8080/auth/login', {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(user)
    })
    //Extract the data from the returned object
    const userToken_ = await userToken.json()
    //return the token string
    return  userToken_.accessToken
}