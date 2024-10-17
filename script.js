// Función que cambia el contenido del div 'display' según el botón presionado
function showContent(channel) {
    let displayDiv = document.getElementById("display");

    switch (channel) {
        case 'twitch1':
            displayDiv.innerHTML = '<iframe src="https://player.twitch.tv/?channel=scythesocietygg&parent=xredragonx.github.io" frameborder="0" allowfullscreen="true" scrolling="no" height="400" width="100%"></iframe>';
            showChat('twitch1'); // Muestra el chat correspondiente
            break;
        case 'twitch2':
            displayDiv.innerHTML = '<iframe src="https://www.youtube.com/embed/live_stream?channel=UCc9x200As2pVAv6jos1wY7A&autoplay=1" frameborder="0" allowfullscreen="true" height="400" width="100%"></iframe>';
            showChat('twitch2'); // Muestra el chat correspondiente
            break;
        case 'twitch3':
            displayDiv.innerHTML = '<iframe src="https://player.twitch.tv/?channel=yumehimesan&parent=xredragonx.github.io" frameborder="0" allowfullscreen="true" scrolling="no" height="400" width="100%"></iframe>';
            showChat('twitch3'); // Muestra el chat correspondiente
            break;
        case 'twitch4':
            displayDiv.innerHTML = '<iframe src="https://player.twitch.tv/?channel=auronplay&parent=xredragonx.github.io" frameborder="0" allowfullscreen="true" scrolling="no" height="400" width="100%"></iframe>';
            showChat('twitch4'); // Muestra el chat correspondiente
            break;
        case 'twitch5':
            displayDiv.innerHTML = '<iframe src="https://player.twitch.tv/?channel=ibai&parent=xredragonx.github.io" frameborder="0" allowfullscreen="true" scrolling="no" height="400" width="100%"></iframe>';
            showChat('twitch5'); // Muestra el chat correspondiente
            break;
        default:
            displayDiv.innerHTML = '<p>Selecciona un canal para ver su contenido.</p>';
    }
}

// Función para mostrar el chat correspondiente
function showChat(channel) {
    let chatDiv = document.getElementById("chat");

    switch (channel) {
        case 'twitch1':
            chatDiv.innerHTML = '<iframe src="https://www.twitch.tv/scythesocietygg/chat" frameborder="0" allowfullscreen="true" height="400" width="100%"></iframe>';
            break;
        case 'twitch2':
            chatDiv.innerHTML = '<iframe src="https://www.youtube.com/embed/live_chat?channel=UCc9x200As2pVAv6jos1wY7A&autoplay=1" frameborder="0" allowfullscreen="true" height="400" width="100%"></iframe>';
            break;
        case 'twitch3':
            chatDiv.innerHTML = '<iframe src="https://www.twitch.tv/yumehimesan/chat" frameborder="0" allowfullscreen="true" height="400" width="100%"></iframe>';
            break;
        case 'twitch4':
            chatDiv.innerHTML = '<iframe src="https://www.twitch.tv/auronplay/chat" frameborder="0" allowfullscreen="true" height="400" width="100%"></iframe>';
            break;
        case 'twitch5':
            chatDiv.innerHTML = '<iframe src="https://www.twitch.tv/ibai/chat" frameborder="0" allowfullscreen="true" height="400" width="100%"></iframe>';
            break;
        default:
            chatDiv.innerHTML = '<p>Selecciona un canal para ver su chat.</p>';
    }
}
