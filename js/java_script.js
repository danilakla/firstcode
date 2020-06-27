//const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели');
//const personalMovieDB = {
//	count: numberOfFilms,
//	movies: {},
//	actors: {},
//	generes: [],
//	privet: true
//};
//const a = prompt('Один из последних просмотренных фильмов'),
//	b = prompt('На сколько оцените его?'),
//	c = prompt('Один из последних просмотренных фильмов')
//d = prompt('На сколько оцените его')
//personalMovieDB.movies[a] = b
//personalMovieDB.movies[c] = d
//console.log(personalMovieDB);

// if (0) {
// 	console.log('ok');
// } else {
// 	console.log('error');

// }
// const num = 50;
// if (num < 39) {
// 	console.log('error');

// }
// else if (num > 100) {
// 	console.log('mnogo');

// }
// else {
// 	console.log('ok');

// }
// (num === 50) ? console.log('ok') : console.log('error');
// const num = '50';
// switch (num) {
// 	case '49':
// 		console.log('no');
// 		break;
// 	case '0':
// 		console.log('no');
// 		break;
// 	case '5':
// 		console.log('yes');
// 		break;
// 	default:
// 		console.log('слишком много попыток');


// }
let numberOfFilms;
function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	generes: [],
	privat: false
};





function rememberMyFilm() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов'),
			b = prompt('На сколько оцените его?');

		if (a != null && b != null && a != ' ', b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}
rememberMyFilm();
if (personalMovieDB.count < 10) {
	console.log('lox');

} else if (personalMovieDB.count >= 10 && personalMovieDB.count >= 30) {
	console.log('norm');

} else if (personalMovieDB.count >= 30) {
	console.log('kroot');

} else {
	console.log('error');

}
function detectPersonalLeval() {
	if (personalMovieDB.count < 10) {
		console.log('lox');

	} else if (personalMovieDB.count >= 10 && personalMovieDB.count >= 30) {
		console.log('norm');

	} else if (personalMovieDB.count >= 30) {
		console.log('kroot');

	} else {
		console.log('error');

	}
}
detectPersonalLeval();

function showMyDB(hidde) {
	if (!hidde) {
		console.log(personalMovieDB);

	}
}



function writeYourGeners() {
	for (let k = 1; k <= 3; k++) {
		let jener = prompt(`Ваш любимый жанр под номером${k}`);
		personalMovieDB.generes[k - 1] = jener
		//personalMovieDB.generes[k - 1] = = prompt(`Ваш любимый жанр под номером${k}`);можно так если прикол let только для одной вещи нгужен
	}
}
writeYourGeners(personalMovieDB.generes);





showMyDB(personalMovieDB.privat);