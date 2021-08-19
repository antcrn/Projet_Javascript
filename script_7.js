function chatbot(msg) {
    console.log(msg)
    let res = ["Ouais Ouais...", "Pwa, calme-toi...", "on s' fait une partie soum-soum ?", "t'es en PLS ?", "balek."];
    if (msg.endsWith('?')) {
        console.log(res[0])
    } else if (msg === msg.toUpperCase() && msg.match(/^[A-Z]*$/)) {
        console.log(res[1])
    } else if (msg.match('Fornite')) {
        console.log(res[2])
    } else if (msg.trim() === '' || msg == null || msg.length == 0) {
        console.log(res[3])
    } else {
        console.log(res[4])
    }
}


chatbot(prompt('Saissez votre texte :', ' '));

/*
    Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
    Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
    Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
    Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
    Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;
*/