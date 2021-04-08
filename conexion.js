let url="https://api.spotify.com/v1/artists/5C4PDR4LnhZTbVnKWXuDKD/top-tracks?market=US";

let token="Bearer BQCvbpWTFH5yQ1hGWOjJh1BZ1_jdl-huqL6EMLfLmkQL6ipBL0wmedYvVunvpQGtKUUHWC5vQk8y6IShcYFdeLBEfXGMIwlyYv37ZGQoQk0sHAOxc8lcgGqJ3zuHT9MRbZ6iwma3wci6Yoc_FEoutjEuHC-BHW4";

let parametros={
    method:"GET",
    headers:{"Authorization":token}
}

fetch(url,parametros)
.then(respuesta => respuesta.json())
.then(datos => seleccionarInformacion(datos))

function seleccionarInformacion(datos){
    console.log(datos);
}