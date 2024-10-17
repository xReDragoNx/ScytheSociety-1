// Función que cambia el contenido del div 'display' según el botón presionado
function showContent(channel) {
    let displayDiv = document.getElementById("display");

    switch (channel) {
        case 'twitch1':
            displayDiv.innerHTML = '<iframe src="https://player.twitch.tv/?channel=auronplay&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="100%" width="100%"></iframe>';
            break;
        case 'twitch2':
            displayDiv.innerHTML = '<iframe src="https://player.twitch.tv/?channel=canal2&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="100%" width="100%"></iframe>';
            break;
        case 'twitch3':
            displayDiv.innerHTML = '<iframe src="https://player.twitch.tv/?channel=canal3&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="100%" width="100%"></iframe>';
            break;
        case 'twitch4':
            displayDiv.innerHTML = '<iframe src="https://player.twitch.tv/?channel=canal4&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="100%" width="100%"></iframe>';
            break;
        case 'twitch5':
            displayDiv.innerHTML = '<iframe src="https://player.twitch.tv/?channel=canal5&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="100%" width="100%"></iframe>';
            break;
        default:
            displayDiv.innerHTML = '<p>Selecciona un canal para ver su contenido.</p>';
    }
}
