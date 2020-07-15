// stars - очки на игровом поле
var stars = null;

// lifes - блок жизне на игровом поле
var lifes = null;

// Количество жизней
var quantityLifes = 8;

// startBlock - область начального блока с кнопкой "Япошка!"
var startBlock = null;

// startButton - кнопка "Япошка!", которая начинает игру 
var startButton = null;

// Счет игры
var score = 0;

// game - элемент поле
var game = document.querySelector("#game");

// Обращаемся к блоку info-block
var infoBlock = document.querySelector("#info-block");

// clock - таймер
var clock = null;

// ballColor - цвет шарика
var ballColor = null;

// h2 - заголовок
var time = null;

// span - число в заголовке
var span = null;

// rand - случайное число
var rand = null;

// status - проверочная переменная
var status = "open";
