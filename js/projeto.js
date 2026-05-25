const apiKey = 'eeef3871b4cc4ecfb4db3a081e7a344c'
const pageSize = 6
let txtSearch = document.getElementById('txtSearch')
let btnSearch = document.getElementById('btnSearch')
let gamesPlace = document.getElementById('gamesPlace')
let gamesImg = document.getElementById('gamesImg')



function ListGames(page) {
    if (!page) page = 6
    let textoPesquisa = txtSearch.value;
    let url = `https://api.rawg.io/api/games?key=${apiKey}&page=${page}&page_size=${pageSize}&search=${textoPesquisa}`


    fetch(url)
        .then(res => res.json())
        .then(data => {
            let saida = ''
            for (let i = 0; i < data.results.length; i++) {
                let game = data.results[i]
                saida += `
                <div class="card">
                <!-- GAMES 5-------------->

                <div class="games-header">


                    <h1>${game.name}</h1>

                </div>
                <div class="imagem-lancamento">
                    <img src="${game.background_image}" alt="" width="100%" height="60%">
                    <h3> Data de lançamento: ${game.released} </h3>
                    <h3>Avaliação do game: ${game.rating}</h3>
                    <a href="https://rawg.io/games/${game.slug}" class="btn btn-primary">Ver Detalhes</a>
                </div>
            </div>
`
            }

            gamesPlace.innerHTML = saida
        })
}

function doSearch() {
    let textoPesquisa = txtSearch.value;
    let url = `https://api.rawg.io/api/games?key=${apiKey}&search=${textoPesquisa}`


    fetch(url)
        .then(res => res.json())
        .then(data => {
            let saida = ''
            for (let i = 0; i < data.results.length; i++) {
                let game = data.results[i]
                saida += `
                <div class="card col-2" style="width: 18rem;">
						<img src="${game.background_image}" class="card-img-top" alt="...">
						<div class="card-body">
						<h5 class="card-title">${game.name}</h5>
						<a href="https://rawg.io/games/${game.slug}" class="btn btn-primary">Ver Detalhes</a>
					</div>
				</div>

                

`
            }

            gamesPlace.innerHTML = saida
        })


    // alert (`o texto a ser pesquisa é ${textoPesquisa}`)
}

async function GameImg(page) {
    if (!page) page = 1
    let url = `https://api.rawg.io/api/games?key=${apiKey}&page=${page}&page_size=${pageSize}`

    
     let data=await fetch(url)
        .then(res => res.json())
            let saida = ''
           
            for (let i = 0; i < data.results.length; i++) {
                let game = data.results[i]

                let desc = await fetch(`https://api.rawg.io/api/games/${game.id}?key=${apiKey}`)
                .then(res => res.json())

                let genero = ''

                for (let j = 0; j < game.genres.length; j++) {
                    
                    let gen = game.genres[j]
                    genero +=  gen.name + ', '

                }



                
                saida += `
                <div id="gamesImg" class="titulo-destaque">
                <div class="informaçoes-destaque">
                    <div class="video-destaque">
                        <img src="${game.background_image}" width="500px" alt="">
                    </div>
                    <div class="titulo-jogo">
                        <h2>${game.name}</h2>
                        <div class="textos-destaque">
                  


                            <p><b>Sobre:</b> ${desc.description}.</p>

                            <div class="texto-info">
                                <p><b>Publisher:</b> ${desc.publishers[0].name}</p>
                                <p><b>Lançamento:</b> ${game.released}</p>
                            </div>

                            <div class="texto-info">
                                <p><b>Genero:</b>${genero}</p>
                            </div>
                            
                            <div class="texto-info">
                            <p><b>Avaliação:</b> ${game.rating}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        
`
            }

            gamesImg.innerHTML = saida
        
}




document.body.onload = () => {
    btnSearch.addEventListener('click', doSearch)
    ListGames()
    GameImg()
    

}