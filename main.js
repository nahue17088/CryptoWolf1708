//Proyecto Final Js (CoderHouse)
//Este proyecto trata de una Pagina que vos podes interactuar "comprando" criptomonedas
//Tambien contiene un seccion para calcular el tipo de cambio de cada criptomoneda con cada peso de cada pais
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// incorporado para la estetica web (start) //
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


  ScrollReveal().reveal('#section-cards, #section-inicio, #section-main', {
    delay: 500,
    useDelay: 'onload',
    reset: true,
})

ScrollReveal().reveal('#section-cards, #section-inicio, #section-main', {
    delay: 0,
    interval: 80
})


let elementBuy = document.getElementById("buyEth");
elementBuy.addEventListener("click", () => {
  CriptoBuy()
});

let elementSend = document.getElementById("sendEth");
elementSend.addEventListener("click", () => {
  CriptoSend()
});

let elementBuyLtc = document.getElementById("buyLtc");
elementBuyLtc.addEventListener("click", () => {
  CriptoBuy()
});

let elementSendLtc = document.getElementById("sendLtc");
elementSendLtc.addEventListener("click", () => {
  CriptoSend()
});

let elementBuyBnc = document.getElementById("buyBnc");
elementBuyBnc.addEventListener("click", () => {
  CriptoBuy()
});

let elementSendBnc = document.getElementById("sendBnc");
elementSendBnc.addEventListener("click", () => {
  CriptoSend()
});

let elementBuyBtc = document.getElementById("buyBtc");
elementBuyBtc.addEventListener("click", () => {
  CriptoBuy()
});

let elementSendBtc = document.getElementById("sendBtc");
elementSendBtc.addEventListener("click", () => {
  CriptoSend()
});

let elementBuyMn = document.getElementById("buyMn");
elementBuyMn.addEventListener("click", () => {
  CriptoBuy()
});

let elementSendMn = document.getElementById("sendMn");
elementSendMn.addEventListener("click", () => {
  CriptoSend()
});

let elementBuyAt = document.getElementById("buyAt");
elementBuyAt.addEventListener("click", () => {
  CriptoBuy()
});

let elementSendAt = document.getElementById("sendAt");
elementSendAt.addEventListener("click", () => {
  CriptoSend()
});

let elementBuyEl = document.getElementById("buyEl");
elementBuyEl.addEventListener("click", () => {
  CriptoBuy()
});

let elementSendEl = document.getElementById("sendEl");
elementSendEl.addEventListener("click", () => {
  CriptoSend()
});

let elementBuyEj = document.getElementById("buyEj");
elementBuyEj.addEventListener("click", () => {
  CriptoBuy()
});

let elementSendEj = document.getElementById("sendEj");
elementSendEj.addEventListener("click", () => {
  CriptoSend()
});





const CriptoBuy = async () => {
  const ipAPI = '//api.ipify.org?format=json'
    
    const inputValue = fetch(ipAPI)
      .then(response => response.json())
      .then(data => data.ip)
    
    const { value: ipAddress } = await Swal.fire({
      title: 'Buy Crypto',
      input: 'number',
      color: '#000',
      background: '#fff',
      confirmButtonColor: '#8AC9FE',
      focusDeny: true,
      position: 'center',
      inputLabel: 'The amount',
      inputValue: inputValue,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!'
        }
      }
    })
    
    if (ipAddress) {
      Swal.fire(`You bought ` + ipAddress + ` of this Crypto`)
    }

  }
  
const CriptoSend = async () => {
  await Swal.fire({
    input: 'number',
    input: 'url',
    confirmButtonColor: '#8AC9FE',
    inputLabel: 'URL address',
    inputPlaceholder: 'Enter the URL',
  })
    Swal.fire(
      'Successfully sent',
      '',
      'info'
    )
}


function desp() {
  if ($("#p-nft").length < 1){
    $("#qe-e").append(`<div id="box"><p id="p-nft">What is an NFT system?
    NFT stands for “Non-Fungible Token”, “Non-fungible” means that they cannot be acquired by something else. A dollar bill can be removed for another or exchange one bitcoin for another and it will have exactly the same value and liquidity.</p></div>`);
  }
  else{
    $("#price-type").append("");
  }
}

let question = document.getElementById("question-d");
question.addEventListener("click", (e) => {
  e.preventDefault();
  desp()
});


function ant() {
  if ($("#p-cripto").length < 1){
    $("#qe-a").append(`<div id="box"><p id="p-cripto">A cryptocurrency, cryptocurrency, or cryptoasset is a digital medium of exchange that uses strong cryptography to secure transactions, control the creation of additional units, and verify the transfer of assets using distributed ledger technologies.</p></div>`);
  }
  else{
    $("#price-type").append("");
  }
}

let ants = document.getElementById("question-e");
ants.addEventListener("click", (e) => {
  e.preventDefault();
  ant()
});

let traerv2 = document.querySelector("#hola")

  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data => {
    console.log(data.results['0'])
    traerv2.innerHTML = `
    <span class="cryptowolf">${data.results['0'].name.last}</span>
    `
  });