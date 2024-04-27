
document.getElementById("mybutton1").addEventListener("click", () => jshacerGet());
document.getElementById("mybutton2").addEventListener("click", () => jshacerGetId());


function jshacerGet() {
    let url = 'http://localhost:2290/api/User'
    fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

    const mostrarData = (data) => {
        console.log(data);
        let body = '';
        for (let i = 0; i < data.length; i++) {
            body += `${data[i].id} ${data[i].name}<br/>`

        }
        document.getElementById('user-list').innerHTML = body;
        document.getElementById("myinput").value = "";

    }
}

function jshacerGetId() {
    const URL_API = 'http://localhost:2290/api/User';
    let misParametros = document.getElementById("myinput").value;
    if (misParametros === '') {
        alert("Escriba en el cuadro");
        return;
    }
    const URLConParametros = `${URL_API}/${misParametros}`;
    fetch(URLConParametros)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

    const mostrarData = (data) => {
        console.log(data)
        let body = ''
        body = `<tr><td>${data.id}</td> <td>${data.name}</td> </tr>`
        document.getElementById('user-list').innerHTML = body
        document.getElementById("myinput").value = "";
    }
}

