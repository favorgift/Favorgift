function addToCart(name, price, image, pilihan){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingItem = cart.find(item => item.name === name);

    if(existingItem){

        existingItem.quantity += 1;

    } else {

  cart.push({
        name:name,
        price:price,
        image:image,
        pilihan:pilihan,
        quantity:1
    });
    }
      

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " berjaya ditambah ke troli!");
}

  function displayCart(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartItems = document.getElementById("cart-items");

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((item,index) => {

        total += item.price * item.quantity;

        cartItems.innerHTML += `
<div class="cart-item">

    <img src="${item.image}" class="cart-image">

    <div class="cart-info">
        <h3>${item.name}</h3>

        <p>Pilihan: ${item.pilihan || "-"}</p>

        <p>RM${item.price.toFixed(2)}</p>

        <p>
            Subtotal:
            RM${(item.price * item.quantity).toFixed(2)}
        </p>
    </div>

    <div class="cart-action">

        <div class="qty-box">

            <button onclick="decreaseQty(${index})">-</button>

            <input
                type="number"
                min="1"
                value="${item.quantity}"
                onchange="updateQty(${index}, this.value)">

            <button onclick="increaseQty(${index})">+</button>

        </div>

        <button class="remove-btn"
            onclick="removeItem(${index})">
            Buang
        </button>

    </div>

</div>
`;
    });

  let totalItems = 0;

cart.forEach(item => {
    totalItems += item.quantity;
});

document.getElementById("jumlah-item").innerHTML = totalItems;

document.getElementById("subtotal").innerHTML =
"RM" + total.toFixed(2);

document.getElementById("jumlah-bayar").innerHTML =
"RM" + (total + 5).toFixed(2);
} 

function removeItem(index){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}
function increaseQty(index){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart[index].quantity++;

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

function decreaseQty(index){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart[index].quantity > 1){

        cart[index].quantity--;

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

function updateQty(index, value){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart[index].quantity = parseInt(value) || 1;

    if(cart[index].quantity < 1){
        cart[index].quantity = 1;
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
    updateCartCount();
}
function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let totalItems = 0;

    cart.forEach(item => {
        totalItems += item.quantity || 1;
    });

    let count = document.getElementById("cart-count");

    if(count){
        count.innerText = totalItems;
    }
}

window.onload = function(){

    updateCartCount();

    loadStock();

    if(document.getElementById("cart-items")){
        displayCart();
    }

}


function saveStock(){

    let stock = {

        // Wedding
        sabun: document.getElementById("sabun").value,
        madu: document.getElementById("madu").value,
        lilin: document.getElementById("lilin").value,
        tuala: document.getElementById("tuala").value,
        coklat: document.getElementById("coklat").value,
        setcawan: document.getElementById("setcawan").value,
        kipas: document.getElementById("kipas").value,
        sudu: document.getElementById("sudu").value,
        tisu: document.getElementById("tisu").value,
        sejadah: document.getElementById("sejadah").value,

        // Birthday
        gula: document.getElementById("gula").value,
        popcorn: document.getElementById("popcorn").value,
        biskut: document.getElementById("biskut").value,
        makaron: document.getElementById("makaron").value,
        kapas: document.getElementById("kapas").value,
        kek: document.getElementById("kek").value,
        minyak: document.getElementById("minyak").value,
        sanitizer: document.getElementById("sanitizer").value,
        bubble: document.getElementById("bubble").value,
        kuku: document.getElementById("kuku").value,

        // Corporate
        pen: document.getElementById("pen").value,
        cawan: document.getElementById("cawan").value,
        nota: document.getElementById("nota").value,
        termos: document.getElementById("termos").value,
        kalender: document.getElementById("kalender").value,
        fail: document.getElementById("fail").value,
        pensil: document.getElementById("pensil").value,
        pelekat: document.getElementById("pelekat").value,
        lanyard: document.getElementById("lanyard").value,
        bekal: document.getElementById("bekal").value

    };

    localStorage.setItem("stock", JSON.stringify(stock));

    alert("Stok berjaya disimpan!");
}

function loadStock(){

fetch("https://script.google.com/macros/s/AKfycbxj2pAUWqCE3w8eoDafr4muSPurUsiKzFAnVewUfqzmxUKCw9gkL-zaGIp2JoZh8ESmBg/exec")
.then(response => response.json())

.then(stockData => {

for(let i = 1; i < stockData.length; i++){

let produk = stockData[i][0];
let stok = stockData[i][1];

// Wedding
if(produk == "Sabun Tangan")
document.getElementById("stock-sabun").innerText = "Stok: " + stok;

if(produk == "madu")
document.getElementById("stock-madu").innerText = "Stok: " + stok;

if(produk == "lilin")
document.getElementById("stock-lilin").innerText = "Stok: " + stok;

if(produk == "tuala")
document.getElementById("stock-tuala").innerText = "Stok: " + stok;

if(produk == "Coklat strawberi")
document.getElementById("stock-coklat").innerText = "Stok: " + stok;

if(produk == "Set Cawan")
document.getElementById("stock-setcawan").innerText = "Stok: " + stok;

if(produk == "kipas")
document.getElementById("stock-kipas").innerText = "Stok: " + stok;

if(produk == "Set Sudu & Garfu")
document.getElementById("stock-sudu").innerText = "Stok: " + stok;

if(produk == "Tisu")
document.getElementById("stock-tisu").innerText = "Stok: " + stok;

if(produk == "Sejadah Mini")
document.getElementById("stock-sejadah").innerText = "Stok: " + stok;


// Birthday
if(produk == "Gula-Gula")
document.getElementById("stock-gula").innerText = "Stok: " + stok;

if(produk == "Popcorn")
document.getElementById("stock-popcorn").innerText = "Stok: " + stok;

if(produk == "Biskut Coklat Chip")
document.getElementById("stock-biskut").innerText = "Stok: " + stok;

if(produk == "Makaron Mini")
document.getElementById("stock-makaron").innerText = "Stok: " + stok;

if(produk == "Gula-Gula Kapas")
document.getElementById("stock-kapas").innerText = "Stok: " + stok;

if(produk == "Kek Cawan")
document.getElementById("stock-kek").innerText = "Stok: " + stok;

if(produk == "Wangian Kereta")
document.getElementById("stock-minyak").innerText = "Stok: " + stok;

if(produk == "Hand Sanitizer")
document.getElementById("stock-sanitizer").innerText = "Stok: " + stok;

if(produk == "bubble Wand")
document.getElementById("stock-bubble").innerText = "Stok: " + stok;

if(produk == "Penyepit Kuku")
document.getElementById("stock-kuku").innerText = "Stok: " + stok;


// Corporate
if(produk == "Pen")
document.getElementById("stock-pen").innerText = "Stok: " + stok;

if(produk == "Cawan")
document.getElementById("stock-cawan").innerText = "Stok: " + stok;

if(produk == "Buku Nota")
document.getElementById("stock-bukunota").innerText = "Stok: " + stok;

if(produk == "Termos")
document.getElementById("stock-termos").innerText = "Stok: " + stok;

if(produk == "Kelender")
document.getElementById("stock-kalender").innerText = "Stok: " + stok;

if(produk == "Fail")
document.getElementById("stock-fail").innerText = "Stok: " + stok;

if(produk == "Bekas Pensil")
document.getElementById("stock-bekaspensil").innerText = "Stok: " + stok;

if(produk == "Nota Pelekat Buku")
document.getElementById("stock-notapelekat").innerText = "Stok: " + stok;

if(produk == "Lanyard")
document.getElementById("stock-lanyard").innerText = "Stok: " + stok;

if(produk == "Kotak Bekal")
document.getElementById("stock-kotakbekal").innerText = "Stok: " + stok;

}

})
.catch(error => {
console.log("Ralat baca stok:", error);
});

}

function checkPaymentRef(){

    let ref = document.getElementById("refnumber").value.trim();

    if(ref === ""){

        alert("Sila masukkan DuitNow Ref Number.");
        return;
    }

    if(ref.length < 8){

        alert("DuitNow Ref Number tidak sah.");
        return;
    }

    // Simpan Ref Number
    localStorage.setItem("duitnowRef", ref);

    // Pergi ke checkout
    window.location.href = "checkout.html";
}
