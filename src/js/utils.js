 function activador(event) {
 	event.preventDefault()
	var login= document.getElementById("login");
	
	infoUsuario = {
		email:document.getElementById("exampleInputEmail1").value,
		contrasela:document.getElementById("exampleInputPassword1").value,
		};
	
	

	if (validateEmail(infoUsuario.email)) {
		document.getElementById("exampleInputEmail1").style = "color:fieldtext;";
		validador1=1;
		document.getElementById("emailHelp").innerHTML = "Te prometo que nadie lo compartira :v";
	} else {
  		document.getElementById("exampleInputEmail1").style = "color:#F00;background-color:#CCC;";
		validador1=0;
		document.getElementById("emailHelp").innerHTML = "Correo Invalido";
		document.getElementById("emailHelp").style = "font-size:small; color:#F00;font-style:bold;";
	};
	
	if (validatePassword(infoUsuario.contrasela)) {
		document.getElementById("exampleInputPassword1").style = "color:fieldtext;";
		validador2=1;
		document.getElementById("contraneeds").style= "display:none;"
	} else {
  		console.log("La contraseña no sirve");
		document.getElementById("exampleInputPassword1").style = "color:#F00;background-color:#CCC;";
		validador2=0;
		document.getElementById("exampleInputPassword1").value = "";
		document.getElementById("exampleInputPassword1").placeholder = "La contraseña no sirve";
			
	}
	
	if (validador1*validador2 == 1){
		login.remove();
		document.getElementById("contador total").className="totalitario";
	}

	
};

function wrande(){
	debugger;
		var testy = document.getElementById('target');
		testy.style.height=parseInt(testy.style.height) +2 +"px";
		testy.style.width= parseInt(testy.style.width) +2 +"px";
		testy.style.fontSize=parseInt(testy.style.fontSize)+1+"px";
	};
	
function minus(){
	var testy = document.getElementById('target');
	testy.style.height=parseInt(testy.style.height) -2 +"px";
	testy.style.width= parseInt(testy.style.width) -2 +"px";
	testy.style.fontSize=parseInt(testy.style.fontSize)-1+"px";
};

function validateEmail(WeaWena) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(WeaWena).toLowerCase());
};

function validatePassword(WeaMala) {
	const re2 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040-,.])\S{7,}$/;
	return re2.test(WeaMala);
};

function contador(){
		document.getElementById("counter").innerHTML=paso;
		
	 	lista = document.createElement("li");
		lista.id="Tempo"+paso;
		lista.className=info.mayor*1;
	 	lista.innerHTML = info.concatenado;
	}
	
	function ordenamiento() {
		var panel = document.getElementById("panel")
		var items = panel.getElementsByTagName("li");

		var sortedItems = [];// Creamos un array donde almacenaremos los "li" ordenados
		for (var i = 0; i < items.length; i++) {// Iteramos sobre cada "li"
			 var itemClass = items[i].className;// Obtenemos la clase del "li"
			 sortedItems.push({// Agregamos el "li" al array de elementos ordenados, junto con su clase
				item: items[i],
				class: itemClass
			  });
		}
			sortedItems.sort(function(a, b) {// Ordenamos el array de elementos en función de la clase de cada "li"
			  return a.class - b.class;
			});
			for (var i = 0; i < sortedItems.length; i++) {// Iteramos sobre cada elemento ordenado del array
			  panel.appendChild(sortedItems[i].item); // Agregamos cada elemento al "ul" en el orden en el que aparecen en el array
			}
	}
	var info;
	function tempo() {
		ms++;
			if (ms>99){
				s++;ms=0;
			}
			if (s>59){
				m++;s=0;
			}
		var todo = (m>=10? m:"0"+m) + ":" + (s>=10? s:"0"+s) + ":" + (ms>=10? ms:"0"+ms);
		document.getElementById("timer").innerHTML = todo;
		var strg1=(m>=10? m:"0"+m);
		var strg2=(s>=10? s:"0"+s);
		var strg3=(ms>=10? ms:"0"+ms);
		info = {
			"concatenado":todo,
			"mayor": strg1+strg2+strg3,};
	return info; 
	}

	function action(el){
		ordenamiento();
		contador();
		paso++;
		
		document.getElementById("panel").appendChild(lista);
	
		ms=0;s=0; m=0;
		debugger;
	 	var testy = el;
	 	var x = Math.round(Math.random()*80);
	 	
	 	var y =Math.round(Math.random()*80);
		
	 	testy.style.left = x + "%";
	 	testy.style.top = y + "%";
	 	var red, green, blue;
	 	red = Math.random()*260;
	 	green = Math.random()*260;
	 	blue = Math.random()*260;
	 	testy.style.backgroundColor ="rgb(" + red + "," + green + "," + blue + ")";
		testy.style.color = "rgb(" + (red*0.1) + "," + (green*0.1) + "," + (blue*0.1) + ")";
	
	}