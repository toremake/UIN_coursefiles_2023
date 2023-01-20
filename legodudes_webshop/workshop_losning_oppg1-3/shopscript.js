let cart = []

//Funksjon for å legge vare til handlevognen
function addToCart(title, price, quantity) {
    cart.push({title: title, price: price, quantity: quantity})
    console.log(cart)
    document.querySelector("#cart .label").innerHTML = cart.length
    //OPPGAVE 1
    //Kall funksjonen for å åpne handekurvvisningen
    renderCart()
}

function renderCart() {
    //OPPGAVE 1 FORTSETTELSE
    //Hvis handlekurven allerede er åpen, lukk den først
    if(!document.querySelector("#cartview").classList.contains("hidden")) {
        document.querySelector("#cartview").classList.add("hidden")
    }
    let cartViewList = ""
    //OPPGAVE 2
    //Klargjør en teller for total pris
    let totalPrice = 0
    //Gå gjennom cart-arrayen, og gjør nødvendige operasjoner for hvert produkt
    cart.map((prod, index) => {
        //OPPGAVE 2 FORTSETTELSE
        //Legger til en onClick på slett-knappen, kaller deleteProduct og sender med index
        cartViewList += `<li id="prod-${index}">
        <span class='title'>${prod.title}</span>
        <span class='price'>${prod.price},-</span>
        <span class='quantity'>x${prod.quantity}</span>
        <span class='delete' onclick='deleteProduct(${index})'>X</span>`
        //OPPGAVE 2 FORTSETTELSE
        //Summer totalPrice med prisen for dette produktet
        totalPrice = totalPrice + Number(prod.price)
    })
        //Skriv ut totalPrice til riktig HTML-element
        document.querySelector("#total").innerHTML = totalPrice
        
        //Skriv ut HTML-en med produktlisten til handlevognvisningen
        document.querySelector("#cartview ul").innerHTML = cartViewList
    
    //OPPGAVE 1 FORTSETTELSE
    //Åpne handlekurven ved hjelp av toggleCart
    toggleCart()
    console.log(totalPrice)
}

//Funksjon for å vise/skjule handlevogn
function toggleCart() {
    document.querySelector("#cartview").classList.toggle("hidden")
}

//OPPGAVE 3
/*
function deleteProduct(product) {
    cart.splice(product, 1)
    renderCart()
}
*/

//OPPGAVE 3.1
function deleteProduct(product) {
    //Finner <li>-elementet, legger til klassen hidden
    document.querySelector("#prod-"+product).classList.add("hidden");
    //Utsetter selve slettingen og oppdateringen av cart (like lenge som CSS-transition for <li>):
    setTimeout(() => {
        //Bruker splice for å fjerne element fra cart-array
        cart.splice(product, 1)
        //Skriver ut cart-visning på nytt
        renderCart()
    }, 700)
    
}