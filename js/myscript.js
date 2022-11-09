/* Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

// Genero numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // Variabile che contiene la classe container nell'html
    const container = document.querySelector(".container");

    // Creo i div che formeranno i quadrati
    const div = document.createElement("div");

    // Creo la classe square per i div
    div.classList.add("square");

    // Aggiungo al container i div
    container.append(div);

    // Se sono multipli sia di 3 sia di 5
    if (i % 3 === 0 && i % 5 === 0) {

        // Sostituisco la scritta fizzbuzz al numero
        div.append("fizzbuzz");

        // Aggiungo classe fizzbuzz a square
        div.classList.add("fizzbuzz");
    }
    // Se sono solo multipli di 3
    else if (i % 3 === 0) {

        // Sostituisco la scritta fizz al numero
        div.append("fizz");

        // Aggiungo classe fizz a square
        div.classList.add("fizz");
    }
    // Se sono solo multipli di 5
    else if (i % 5 === 0) {

        // Sostituisco la scritta buzz al numero
        div.append("buzz");
        
        // Aggiungo classe buzz a square
        div.classList.add("buzz");
    }
    // In tutti gli altri casi
    else {
        // Aggiungo i numeri ai div
        div.append(i);
    }

}