const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function rentedCheck(arr) {
    console.log('Est-ce que tous les livres ont été au moins empruntés une fois ?');
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i].rented > 0) {
            console.log('Tout les livres ont déja été empruntés')
        } else {
            console.log('Un ou plusieurs livres ont été emprunté(s)');
        }
    }

}



function mostRented(arr) {
    console.log('Quel est livre le plus emprunté ?');

    const maxi = arr.reduce(function(prev, current) {
        return (prev.rented > current.rented) ? prev : current
    })
    console.log(maxi.title)
}



function lessRented(arr) {
    console.log('Quel est livre le moins emprunté ?');
    const max = arr.reduce(function(prev, current) {
        return (prev.rented < current.rented) ? prev : current
    })
    console.log(max.title)
}



function searchBookById(arr) {
    console.log('Trouve le livre avec l\'ID: 873495');
    let result = arr.find(book => {
        return book.id == 873495
    })
    console.log(result.title);
}


function deleteBook(arr, id) {
    console.log(' Supprime le livre avec l\'ID: 133712 ;');
    let indexToDelete = books.findIndex(book => book.id === id);
    arr.splice(indexToDelete, 1);
    console.log(books);
}

function sortBooks(arr) {
    console.log('Trie les livres par ordre alphabétique (sans celui avec l\'ID 133712 car il est supprimé).');
    console.log(arr.sort((a, b) => a.title.localeCompare(b.title)));
}


rentedCheck(books);
mostRented(books);
lessRented(books);
searchBookById(books);
deleteBook(books, 133712);
sortBooks(books);