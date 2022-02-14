fetch("https://imdb8.p.rapidapi.com/auto-complete?q=spiderman", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tus-datos",
		"x-rapidapi-key": "tus-datos"
	}
})
.then(response => response.json())
.then(data => {
    //console.log(data)
    const arrayMovies = data.d
    arrayMovies.map( (element) => {
        //console.log(element)
        const title = element.l
        const image = element.i.imageUrl
        const cast = element.s
        
        const poster = `
            <div>
                <img src="${image}" />
                <h2>${title}</h2>
                <small>${cast}</small>
            </div>            
        `
        document.getElementById('container').innerHTML += poster
    })
})
.catch(err => {
	console.error(err);
});