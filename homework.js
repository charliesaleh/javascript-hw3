const formData = document.querySelector('#form-data');
const api = document.querySelector('#api');
formData.addEventListener('submit', event => {
    event.preventDefault()
    console.log(event)
    const name = formData.name.value
    console.log(name)

    pokemonAPI(name)
})

async function pokemonAPI(name){
    url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    const pokeapi = data.name
    const pokeimage = data.sprites.front_shiny
    api.innerHTML = `
    <div class="card" style="width: 25rem;">
        <img class="card-img-top" src="${pokeimage}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${pokeapi}</h5>
            </div>
    </div>
`
    
}