document.addEventListener('DOMContentLoaded', function() {
    leerFraseAFirebase();
});

function leerFraseAFirebase() {
    axios.get('https://660c51203a0766e85dbdea46.mockapi.io/Voz')
        .then(response => {
            console.log('Lectura exitosa:', response.data);
            const jsonArray = response.data;
            const array = Object.entries(jsonArray);
            console.log('Array resultante:', array);
            
            const ultimoRegistro = array[array.length - 1];
            
            const ordenTexto = document.getElementById('orden-texto');
            ordenTexto.textContent = ultimoRegistro[1].frase;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
