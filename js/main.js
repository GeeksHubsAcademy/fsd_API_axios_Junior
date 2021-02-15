//funciones
let valor = document.getElementById("buscador");

//Recursos API

let key = "c0b6dea31a9d647a6b7d1eafa59bacaa";

let recurso= "search";

let criterio = "movie";

let base_url = `http://api.themoviedb.org/3/${recurso}`;

const call = async (url) => {
    let res = await axios.get(url);
    
    if(!res.data.results){
        error = new Error("La url era incorrecta");
        return error;
    }
    
    return res.data.results;
}

const pintar = async (coleccionPintar) => {
    //Proceso para el pintado HTML de las películas
    document.getElementById("contenedor").innerHTML = JSON.stringify(coleccionPintar);

    return;
}



const buscador = async () => {
    let query = valor.value;

    //Construccion de la URL 
    let url = `${base_url}/${criterio}?api_key=${key}&query=${query}`; 
    pintar("cargando");
    let pelis = await call(url);


    pintar(pelis);
    

    
};














