
	var elementos = document.querySelectorAll('.player-options div > img');
	var playerOpt = "";
	var enemyOpt = "";

	function validarVencedor(){

		let resultado = document.querySelector('.resultado');


		if(playerOpt == "papel"){
			if(enemyOpt == "papel"){
				// Empate
				resultado.style.color = "black";
				resultado.innerHTML = "Empatou";
			} else if(enemyOpt == "tesoura"){
				// Perdeu
				resultado.style.color = "red";
				resultado.innerHTML = "Você perdeu";
			} else if(enemyOpt == "pedra"){
				// Ganhou
				resultado.style.color = "green";
				resultado.innerHTML = "Você ganhou";
			}
		}

		if (playerOpt == "tesoura") {
			if (enemyOpt == "papel") {
				// Ganhou
				resultado.style.color = "green";
				resultado.innerHTML = "Você ganhou";
			} else if(enemyOpt == "tesoura"){
				// Empatou
				resultado.style.color = "black";
				resultado.innerHTML = "Empatou";
			} else if(enemyOpt == "pedra"){
				// Perdeu
				resultado.style.color = "red";
				resultado.innerHTML = "Você perdeu";
			}
		}

		if (playerOpt == "pedra") {
			if (enemyOpt == "papel") {
				// Perdeu
				resultado.style.color = "red";
				resultado.innerHTML = "Você perdeu";
			} else if(enemyOpt == "tesoura"){
				// Ganhou
				resultado.style.color = "green";
				resultado.innerHTML = "Você ganhou";
			} else if(enemyOpt == "pedra"){
				// Empatou
				resultado.style.color = "black";
				resultado.innerHTML = "Empatou";
			}
		}
	}

	function resetEnemy(){
		const enemyOptions = document.querySelectorAll('.enemy-options div');	
		for(var i = 0; i < enemyOptions.length; i++){
			enemyOptions[i].childNodes[0].style.opacity = 0.3;
		}
	}

	function enemyPlay(){
		let rand = Math.floor(Math.random()*3);

		const enemyOptions = document.querySelectorAll('.enemy-options div');

		resetEnemy();

		for(var i = 0; i < enemyOptions.length; i++){
			if (i == rand) {
				enemyOptions[i].childNodes[0].style.opacity = 1;
				enemyOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
			}
		}

		validarVencedor();
	}

	function resetOpacityPlayer(){
		for (var i = 0; i < elementos.length; i++) {
			elementos[i].style.opacity = 0.3;	
		}
	}

	for (var i = 0; i < elementos.length; i++) {
		elementos[i].addEventListener('click',function(t){
			resetOpacityPlayer();
			t.target.style.opacity = 1;
			playerOpt = t.target.getAttribute('opt');

			enemyPlay();
		});
	}
