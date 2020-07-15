// Получаем случайное максимальное число
function random(max) {
	// Случайное не целое число
	rand = 1 + Math.random() * (max + 1);
	// Округляем случайное число
	rand = Math.floor(rand);
	// Возвращаем случайное число
	return rand;
}


/*=============================================================================
						Функции создания блоков HTML
=============================================================================*/

// Функция создаёт стартовую кнопку
function createStartBlock() {
	// Создаём div
	startBlock = document.createElement("div");
	// Даём startBlock id => "start-block"
	startBlock.id = "start-block";
	// Помещаем startBlock в game в game
	game.appendChild(startBlock);
	// Создаём кнопку старта
	startButton = document.createElement("button");
	// Даём startButton id => "start-button"
	startButton.id = "start-button";
	// Помещаем startButton в startBlock
	startBlock.appendChild(startButton);
	// Добавляем текст для кнопки
	startButton.innerText = "Ниндзя!";

}

// Функция создаёт элемент жизней на игровом поле
function createLifes() {
	// Создаём элемент div
	lifes = document.createElement("div");
	// Даём id элементу div => id="lifes"
	lifes.id = "lifes";
	// Текущее количество жизней
	var nowLifes = 0;
	
	// Помещаем в lifes span*5
	function spanLifes() {
		lifes.appendChild(document.createElement("span"));
	}
	// Добавляем определённое в переменной quantityLifes количество жизней
	while(nowLifes < quantityLifes) {
		spanLifes();
		nowLifes = nowLifes + 1;
	}
	// Помещаем game > div#lifes
	game.appendChild(lifes);
}

// Функция создаём элемент времени в игре
function createTimeBlock() {
	// Создаём элемент h2
	time = document.createElement("h2");
	// Добавляем id = "time"
	time.id = "time";
	// Добавляем в заголовок текст
	time.innerText = "Время: ";
	// Создаём элемент span
	span = document.createElement("span");
	// Добавляем в span число
	span.innerText = "60";
	// span => id="timer"
	span.id = "timer";
	// Помещаем заголовок в infoBlock
	infoBlock.appendChild(time);
	// Помещаем span в h2
	time.appendChild(span);
}

// Функция создаёт элемент очков на игровом поле
function createStars() {
	// Создаём блок div
	stars = document.createElement("div");
	// добавлям тегу div => id="stars"
	stars.id = "stars";
	// Добаляем элементу с id="stars" число 0
	stars.innerText = "0";
	// Добавляем элемент очки в игровое поле <div id="game"></div>
	game.appendChild(stars);
}

// Функция создает элемент шарик на игровом поле
function createBall() {
	// создаём блок div
	var ball = document.createElement("div");
	// Определяем направление
	var direction = random(2); /* 1 - left; 2 - right*/
	// Если направление 1 то вылетает слева
	if (direction == 1) {
		ball.className = "ball left";
		// Иначе вылетает справа
	} else {
		ball.className = "ball right";
	}

	// Проверяем нужно ли добавлять шарик на поле
	if(status != "end") {
		// Добавляем шарик на игровое поле
		game.appendChild(ball);	
	}

	// Случайное местоположение шарика через 50 милисекунд
	setTimeout(function() {
		ball.style.top = random(404) + "px";
		ball.style.left = random(670) + "px";
	}, 50)

	// Запустить передвижение шарика вниз и удалять его, если вышел за границу + отнимать жизнь
	setTimeout(function() {
		// Убираем свойство с задержкой изменения стилей
		ball.style.transition = "all 0s";
		// Создаём таймер, который каждые 10 милисекунд опускает шарик ниже
		var timerBall = setInterval(function() {
			// Меняем позицию шарика опуска его на 1 пиксель вниз
			ball.style.top = ball.offsetTop + 1 + "px";
			// Если шарик вышел за пределы поля
			if(ball.offsetTop > 544) {
				// Удаляем шарик
				ball.remove();
				// Создаём новый шарик
				createBall();
				// Уменьшаем количество жизни
				quantityLifes = quantityLifes - 1;
				// Если жизней не осталось
				if(quantityLifes == 0 ) {
					// Завершить игру
					endGame();
				}
				// Удаляем блок жизней
				removeLifes();
				// Создаём новый блок жизней
				createLifes();
				// Удаляем таймер
				clearInterval(timerBall);
			}
		}, 10) 
	}, 1000)

	// При клике на шарик делаем функцию
	ball.onmousemove = function() {
		// Увеличиваем счет игры
		score = score + random(5);
		// Меняем текст счета игры, текст будет из переменной i
		stars.innerText = score;


		ball.className = "delete";
		// Удаляем шарик с игрового поля
		setTimeout(function() {
			if(ball.calssName == "delete") {
			removeBall();
			}
			// Выбираем элемент шарк
			var sushestvuetBall = document.querySelector(".ball");
			// Создаём рандомное количество шариков
			if(sushestvuetBall == null) {
				// Количество шариков
				var quantityBall = random(5);
				// Текущее количество шариков
				var nowBall = 0;
				// Цыкл создания шариков
				while(nowBall < quantityBall) {
				createBall();
				nowBall = nowBall + 1;
				}
			}	
		}, 200);
		// Проверяем количество очков и заканчиваем игру
		if(stars.innerText >= 300) {
			// Заканчиваем игру
			endGame();
		}
	};	
}

// Создаёт блок окончания игры
function createGameEnd() {
	// Создаём блок <div id="game-end"></div>
	var div = document.createElement("div");
	div.id = "game-and";

	// Создаём заголовок <h2>Игра окончена!</h2>
	var h2 = document.createElement("h2");
	h2.innerText = "Игра окончена!";

	// Создаём заголовок <h3>Вы набрали: 100 очков</h3>
	var h3 = document.createElement("h3");
	h3.innerText = "Вы набрали: " + stars.innerText + " очков";

	// Добавляем заголовок h2
	div.appendChild(h2);
	// Добавляем заголовок h3
	div.appendChild(h3);

	// Добавляем в игровое поле блок завершения игры
	game.appendChild(div);
}



/*============================================================
				Функции удаления блоков HTML
==============================================================*/

// Функция удаляет шарик
function removeBall() {
	var ball = document.querySelector(".ball");
	ball.remove();
}

// Функция удаляет очки
function removeStars() {
	stars.remove();
}

// Функция удаляет жизни
function removeLifes() {
	lifes.remove();
}

// Функция удаляет startBlock
function removeStartBlock() {
	startBlock.remove();
}

function clearGame() {
	game.innerText = "";
}





