let accessToken
let expired = false

const spotifyUtils = {
  async getAccessToken() {
    if (accessToken && !expired) return accessToken
    const clientId = process.env.VUE_APP_CLIENT_ID
    const clientSecret = process.env.VUE_APP_CLIENT_SECRET

    const credentialsString = Buffer.from(
      `${clientId}:${clientSecret}`
    ).toString('base64')

    let fetchHeaders = new Headers()
    fetchHeaders.append('Authorization', `Basic ${credentialsString}`)
    fetchHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

    var urlencoded = new URLSearchParams()
    urlencoded.append('grant_type', 'client_credentials')

    const url = 'https://accounts.spotify.com/api/token'

    const fetchOptions = {
      method: 'POST',
      body: urlencoded,
      headers: fetchHeaders
    }
    const response = await fetch(url, fetchOptions)
    const jsonReponse = await response.json()
    return jsonReponse.access_token
  }
}

export default spotifyUtils
