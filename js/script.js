
$(document).ready(function(){
    $("#about1").click(function(){
        $("#slide1").slideToggle();
    });
});


$(document).ready(function(){
  $("#about2").click(function(){
    $("#slide2").slideToggle();
  })
})
var togg1 = false;
function ic1fct()   {
  var x = document.getElementById("iconpm1");
  if (!togg1)   {
    x.style.backgroundImage = "url('./img/minus.png')";
  }
  else  {
    x.style.backgroundImage = "url('./img/plus.png')";
  }
  togg1 = !togg1;
}
var togg2 = false;
function ic2fct()   {
  var y = document.getElementById("iconpm2");
  if (!togg2)   {
    y.style.backgroundImage = "url('./img/minus.png')";
  }
  else  {
    y.style.backgroundImage = "url('./img/plus.png')";
  }
  togg2 = !togg2;
}
function eraseFunction()  {
    var aux;
    aux = document.getElementsByName("nume");
    var ok = 0;
    if (aux[0].value.toString() != "")  {
      ok = 1;
      aux = document.getElementsByName("telefon");
      if (aux[0].value.toString() != "")  {
        ok = 1;
        aux = document.getElementsByName("inttimp");
        if (aux[0].value.toString() != "")  {
          ok = 1;
          aux = document.getElementsByName("magazin");
          if  (aux[0].value.toString() != "")   {
            ok = 1;
            aux = document.getElementById("adresa");
            if (aux.value.toString() != "")   {
              ok = 1;
              var aux = document.getElementById("list");
              if (aux.value.toString() != "")   {
                ok = 1;
              }
              else  {
                ok = 0;
              }
            }
            else {
              ok = 0;
            }
          }
          else {
            ok = 0;
          }
        }
        else  {
          ok = 0;
        }
      }
      else {
        ok = 0;
      }
    }








    if (ok == 1)  {

    var x = document.getElementsByTagName("input");
    var i;
    for (i = 0; i < x.length; i ++)   {
      x[i].value = "";
    }
    var y = document.getElementsByTagName("textarea");
    for (i = 0; i < y.length; i ++)   {
      y[i].value = "";
    }
    alert("Comanda a fost efecutata");
  }
  else  {
    alert("Verificati campurile obligatorii!");
  }
}



/*  var aux;
  aux = document.getElementsByName("nume");
  var ok = 0;
  if (aux[0].value.toString() != "")  {
    ok = 1;
  }

  aux = document.getElementsByName("telefon");
  if (aux[0].value.toString() != "")  {
    ok = 1;
  }
  else {
    ok = 0;
  }
  aux = document.getElementsByName("inttimp");
  if (aux[0].value.toString() != "")  {
    ok = 1;
  }
  else  {
    ok = 0;
  }

  aux = document.getElementsByName("magazin");
  if  (aux[0].value.toString() != "")   {
    ok = 1;
  }
  else {
    ok = 0;
  }
  aux = document.getElementById("adresa");
  if (aux.value.toString() != "")   {
    ok = 1;
  }
  else {
    ok = 0;
  }
  var aux = document.getElementById("list");
  if (aux.value.toString() != "")   {
    ok = 1;
  }
  else  {
    ok = 0;
  }*/
