// Главный файл в котором я буду вызывать необходимые функции и действия игры

// Что будет делаться при загрузке сайте
function loadSite() {
	// Создали стартовую кнопку
	createStartBlock();
	// Создаём элемент времени
	createTimeBlock();
}

// При начале игры выполнять эту функцию
function start() {
	var status = "start";
	// Удаляем стартовую кнопку
	removeStartBlock();
	// Запускаем обратный отсчет (таймер)
	countdown();
	// Создаём поле со счетом
	createStars();
	// Создаём шарик на игровом поле
	createBall();
	// Создаём элемент с жизнями
	createLifes();
}

loadSite();

// Сброс очков при клике на очки
createStars.onclick = function() {
	stars.innerText = "0";
	score = 0;
}

// При нажатии на кнопку "Ниндзя!" удалили начальное поле и начали игру
startButton.onclick = start;

// Функция будет заканчивать игру
function endGame() {
	status = "end";
	// Сброс таймера
	timer.innerText = 60;
	clearInterval(clock);

	// Функция удаляет очки
	removeStars();
	// Функция удаляет жизни
	removeLifes();
	// Чистим игровое поле
	clearGame(); 
	// Создаём блок окончания игры
	createGameEnd();

	 // Сброс очков
	stars.innerText = 0;
	score = 0;

} 

// Обратный отсчет
function countdown() {
	clock = setInterval(function() {
		// За одну секунду отнимает 1
		timer.innerText = timer.innerText - 1;
		// Заканчивает игру, если таймер дошёл до 0
		if(timer.innerText == 0) {
			clearInterval(clock);
			endGame();
		}
	}, 1000)
}