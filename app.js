const apiUrl = 'https://api.pokemontcg.io/v1/cards?name=charizard'

const req = async () => {
    console.log(apiUrl);
    const response = await fetch(apiUrl)
    const json = await response.json()
    console.log(json);
}

req()