// Función que cambia el contenido del div 'display' según el botón presionado
function showContent(channel) {
    let displayDiv = document.getElementById("display");

    switch (channel) {
        case 'twitch1':
            displayDiv.innerHTML = '<iframe src="https://www.twitch.tv/embed/auronplay/video?darkpopout&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="100%" width="100%"></iframe>';
            break;
        case 'twitch2':
            displayDiv.innerHTML = '<iframe src="https://www.twitch.tv/embed/canal2/chat?darkpopout&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="100%" width="100%"></iframe>';
            break;
        case 'twitch3':
            displayDiv.innerHTML = '<iframe src="https://www.twitch.tv/embed/canal3/chat?darkpopout&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="100%" width="100%"></iframe>';
            break;
        case 'twitch4':
            displayDiv.innerHTML = '<iframe src="https://www.twitch.tv/embed/canal4/chat?darkpopout&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="100%" width="100%"></iframe>';
            break;
        case 'twitch5':
            displayDiv.innerHTML = '<iframe src="https://www.twitch.tv/embed/canal5/chat?darkpopout&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="100%" width="100%"></iframe>';
            break;
        default:
            displayDiv.innerHTML = '<p>Selecciona un canal para ver su contenido.</p>';
    }
}
