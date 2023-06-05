document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // prevent form submission

    var username = document.getElementById("username").value.toUpperCase();
    var password = document.getElementById("password").value;
    var role = document.getElementById("role").value;

    // Verifica as regras da senha usando uma expressão regular
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (username && passwordRegex.test(password) && role) {
        var roleName = "";

        // Mapeia o número do cargo para o nome correspondente
        switch (role) {
            case "1":
                roleName = "Estagio";
                break;
            case "2":
                roleName = "Traine";
                break;
            case "3":
                roleName = "Analista";
                break;
            case "4":
                roleName = "JR";
                break;
            case "5":
                roleName = "SN";
                break;
            case "6":
                roleName = "PL";
                break;
            case "7":
                roleName = "Líder Técnico";
                break;
            case "8":
                roleName = "CEO";
                break;
        }

        // Mostra a mensagem de boas-vindas e redireciona para a página desejada
        alert("Olá, " + username + ", seu cargo é " + roleName + ", vamos te redirecionar para a página desejada.");
        window.location.href = "pagina-desejada.html"; // Substitua "pagina-desejada.html" pela página real desejada
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
});
