
    $('#clickk').click(() => {
      if (!mostradoCriptos) {
        mostradoCriptos = true;
        for (let criptos of arregloCriptos) {
          $("#section").append(`<p>${criptos.nombre}</p> <p>${criptos.tipo}</p> <p>${criptos.precio}</p>`);
      }

      }

    });

    $(document).ready(function(){
      $("#btn-bed").click(function(){
        $("#btc-div").fadeIn();
        $("#eth-div").fadeIn("slow");
        $("#dg-div").fadeIn(1500);
      });
    });
    $(document).ready(function(){
      $("#btn-bed").click(function(){
        $("#btc-div").fadeIn();
        $("#eth-div").fadeIn(-1000);
        $("#dg-div").fadeIn(-1500);
      });
    });

    let btnBed = document.querySelector("#btn-bed")
    let btcDiv = document.querySelector("#btc-div");
    let ethDiv = document.querySelector("#eth-div");
    let dgDiv = document.querySelector("#dg-div");
    btnBed.addEventListener("click", ()  => { 
      btcDiv.style.visibility = 'visible'
      ethDiv.style.visibility = 'visible'
      dgDiv.style.visibility = 'visible'
    })
    

    let traerv2 = document.querySelector("#sec-8")
    

    function traer() {
      fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => {
        console.log(data.results['0'])
        trerv2.innerHTML = `
        <img src="${data.results['0'].picture.large}" width="100px">
        <p>${data.results['0'].name.last}</p>
        `
      });
    }