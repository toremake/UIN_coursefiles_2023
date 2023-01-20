/*
 * TILGJENGELIGE PRODUKTER:
 * prodid: unik id for hvert produkt
 * title: produktnavn for visning på web
 * category: produktkategori
 * price: produktpris
 * storage: antall på lager
 * imagefile: filnavn til produktbilde
 */

const products = [
    {prodid: 1, title: "Dragon Zane", category: "Ninjago", price: "89", storage: 5, imagefile: "dragon_zane.webp"},
    {prodid: 2, title: "Lil'Ninja", category: "Ninjago", price: "99", storage: 2, imagefile: "lil_ninja.webp"},
    {prodid: 3, title: "Master Wu", category: "Ninjago", price: "109", storage: 3, imagefile: "master_wu.webp"},
    {prodid: 4, title: "Scuba Kai", category: "Ninjago", price: "89", storage: 7, imagefile: "scuba_kai.webp"},
    {prodid: 5, title: "The Mechanic", category: "Ninjago", price: "99", storage: 3, imagefile: "the_mechanic.webp"},
    {prodid: 6, title: "Vengestone Warrior", category: "Ninjago", price: "89", storage: 4, imagefile: "vengestone_warrior.webp"}
]

/*
 * HANDLEVOGN:
 * Informasjon som bør lagres i handlevogn er
 * id: id som henviser til et produkt i products-arrayen
 *     - bruk prodid som referanse for å hente tittel og pris
 * quantity: antall produkter lagt i handlekurven
 */
let cart = []

//List products:
function listProducts() {
    let prodListHTML = ""
    products.map(prod => {
        prodListHTML += `
        <article class="product-card" id="product-${prod.prodid}">
            <img src="images/PROD_${prod.imagefile}" alt="${prod.title}" />
            <a href="/${prod.category}">${prod.category}</a>
            <h2>${prod.title}</h2>
            <p>Kr. <span class="price">${prod.price}</span>,-</p>
            <p>Antall på lager: <span class="storage">${prod.storage}</span></p>
            <button ${prod.storage === 0 ? `disabled` : null } onClick="addToCart(${prod.prodid})">Legg i handlekurv</button>
        </article>
        `
    })
    document.getElementById("product-list").innerHTML = prodListHTML
}
//Kjør opplisting av produkter så de synes når vi laster inn siden
listProducts()

//Add product to cart:
function addToCart(id) {
    const existID = cart.findIndex(prod => prod.id === id)
    const prodIndex = products.findIndex(prod => prod.prodid === id)
    if(existID > -1) {
        cart[existID].quantity = Number(cart[existID].quantity) + 1
    } else {
        cart.push({id: id, quantity: 1})
    }
    products[prodIndex].storage = Number(products[prodIndex].storage) - 1
    //OPPDATER PRODUCTUTSKRIFT
    listProducts()
    //OPPDATER ANTALL PRODUKTER I HANDLEKURV-label
    updateCartLabel()
    //OPPDATER HANDLEVOGNUTSKRIFT
    renderCart()
    //TESTPRINT:
    console.log(cart)
    console.log(products)
}

function updateCartLabel() {
    //Løp gjennom cart, summer alle quantity-verdier
    let totalProducts = 0
    cart.map(prod => {
        totalProducts = totalProducts + Number(prod.quantity)
    })
    document.querySelector("#cart .label").innerHTML = totalProducts
}

function toggleCart() {
    document.querySelector("#cartview").classList.toggle("hidden")
}

function renderCart() {
    if(!document.querySelector("#cartview").classList.contains("hidden")) {
        document.querySelector("#cartview").classList.add("hidden")
    }
    let cartHTML = ""
    let totalPrice = 0
    cart.map((prod, index) => {
        const productIndex = products.findIndex(p => p.prodid === prod.id)
        prod.quantity != 0 ? 
        cartHTML += `<li id="prod-${index}">
        <span class='title'>${products[productIndex].title}</span>
        <span class='price'>${products[productIndex].price},-</span>
        <span class='quantity'>
            <button onClick="changeQuantity(${index}, -1)">-</button>
            <input type="number" value="${prod.quantity}">
            <button onClick="changeQuantity(${index}, 1)">+</button>
        </span>
        <span class='delete' onclick='deleteProduct(${index})'>X</span>
        </li>` : null
        totalPrice += Number(products[productIndex].price) * prod.quantity
        //Skriv ut totalPrice til riktig HTML-element
        document.querySelector("#total").innerHTML = totalPrice
        //Skriv ut HTML-en med produktlisten til handlevognvisningen
        document.querySelector("#cartview ul").innerHTML = cartHTML
    })
    toggleCart()
}

function deleteProduct(index) {
    console.log("deleteProduct running...")
    document.querySelector("#prod-"+index).classList.add("hidden");
    setTimeout(() => {
        const prodID = cart[index].id
        const prodIndex = products.findIndex(p => p.prodid === prodID)
        products[prodIndex].storage = Number(products[prodIndex].storage) + Number(cart[index].quantity)
        cart.splice(index, 1)
        //Oppdaterer produktvisning, handlekurvvisning og label
        listProducts()
        updateCartLabel()
        renderCart()
        console.log(cart)
    }, 700)
}

function changeQuantity(cartIndex, amount) {
    //Finn produktiden...
    const prodID = cart[cartIndex].id
    //Så vi kan finne index til produktet i products-arrayen
    const prodIndex = products.findIndex(p => p.prodid === prodID)
    
    //Hvis denne endringen gjør slik at et produkt i handlekurven har antall 0,
    //slett raden fra handlekurven
    if(Number(cart[cartIndex].quantity) + amount === 0) {
        deleteProduct(cartIndex)
        console.log("deleteProduct")
    }
    //Hvis det finnes et lager (storage er 1 eller større), oppdater antall
    if(products[prodIndex].storage > 0) {
        cart[cartIndex].quantity = Number(cart[cartIndex].quantity) + amount
        products[prodIndex].storage = Number(products[prodIndex].storage) - amount
    }
    //Oppdater handekurvvisning, label og produktliste
    renderCart()
    updateCartLabel()
    listProducts()
}