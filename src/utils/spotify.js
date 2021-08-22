import store from '../store'

let expired = false

const spotifyUtils = {
  async getAccessToken() {
    let accessToken = store.state.accessToken

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
  },
  async getPlaylistTracks(id) {
    const url = `https://api.spotify.com/v1/playlists/${id}/tracks`

    let accessToken = await this.getAccessToken()

    const fetchOptions = {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
    const response = await fetch(url, fetchOptions)
    const jsonReponse = await response.json()
    return jsonReponse.items.map((item) => item.track)
  }
}

export default spotifyUtils
