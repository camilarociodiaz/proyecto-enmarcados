const btnEnvio = document.getElementById("enviarCorreoCurso");

btnEnvio.addEventListener("click", function(e) {
    e.preventDefault();
    const Nombre = document.getElementById("nombre").value;
    const Telefono = document.getElementById("telefono").value;
    const Email = document.getElementById("email").value;
    const Pais = document.getElementById("pais").value;
    const Cursos = document.getElementById("cursos").value;
    const Consulta = document.getElementById("consulta").value;

    console.log(Nombre, Telefono, Email, Pais, Cursos, Consulta);

    let data = {

        service_id: "service_czx1vqb",
        template_id: "template_9npleqp",
        user_id: "5JA8qDtV9cxc1XJzK", //Acount---> Api Keys---> public Key
        template_params: {
            from_name: Nombre,
            from_number: Telefono,
            from_email: Email,
            from_pais: Pais,
            from_cursos: Cursos,
            message: Consulta,
        },
    };

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
        .then((response) => {
            Toastify({
                text: "Mensaje enviado con exito!",
                className: "info",
                style: {
                    background: "#a4de02",
                },
            }).showToast();
        })
        .catch((err) => {
            console.error(err);
            Toastify({
                text: "No se puedo enviar!",
                className: "info",
                style: {
                    background: "red",
                },
            }).showToast();
        });
});