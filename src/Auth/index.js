import auth0 from 'auth0-js';

export default class Auth {
  constructor(history){
    this.history = history;
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENTID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
      responseType: "token id_token",
      scope: "openid profile email"
    })
  }

  login = () => {
    this.auth0.authorize()
  }

  handleAuth = () => {
    this.auth0.parseHash((err, authResult) => {
      if(authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.history.push("/");
      } else if (err) {
        alert(`Error: ${err.error}`)
        console.log(err);  
      }
    })
  }

  setSession = authResult => {
    //set the time the access token will expire
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )

    localStorage.setItem("access_token", authResult.accessToken)
    localStorage.setItem("id_token", authResult.idToken)
    localStorage.setItem("expires_at", expiresAt)
  }

  isAuthenticated = () => { 
    const expiresAt =JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }

  getAccessToken = () => {
    const accessToken = localStorage.getItem("access_token")
    if(!accessToken){
      throw new Error("No access token found")
    }
    return accessToken
  }

  getProfile = callback => {
    this.auth0.client.userInfo(this.getAccessToken(), (err, profile) => {
      callback(profile);
    });
  }

}