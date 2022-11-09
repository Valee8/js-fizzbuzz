/* Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

// Genero numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // Variabile che contiene la classe container nell'html
    const container = document.querySelector(".container");

    // Creo i div che formeranno i quadrati
    const div = document.createElement("div");

    // Aggiungo i numeri ai div
    div.append(i);

    // Creo la classe square per i div
    div.classList.add("square");

    // Aggiungo al container i div
    container.append(div);

}