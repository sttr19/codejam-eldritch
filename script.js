import ancientsData from './data/ancients.js'
import difficulties from './data/difficulties.js'
import {
	brownCards,
	blueCards,
	greenCards
} from './data/mythicCards/index.js'

const Azatoth = document.getElementById('azathoth-card');
const Cthulthu = document.getElementById('cthulthu-card');
const IogSothoth = document.getElementById('iogSothoth-card');
const ShubNiggurath = document.getElementById('shubNiggurath-card');
const difficultyLow = document.getElementById('difficulty-low');
const difficultyMedium = document.getElementById('difficulty-medium');
const difficultyHight = document.getElementById('difficulty-hight');

const ancients = document.querySelectorAll('.ancient-card');
const difficultiesLabel = document.querySelectorAll('.difficulty');

//const dotsGreen = document.querySelector("#root > div > div.deck-container > div.current-state > div:nth-child(1) > div > div.dot.greenx");
const dotsGreen = document.querySelectorAll(".dot.green");
const dotsBrown = document.querySelectorAll(".dot.brown");
const dotsBlue = document.querySelectorAll(".dot.blue");
const createBtnDeck = document.querySelector(".shuffle-button");
//console.log(ancients);

let chosenAncient;
let chosenDifficulty;
let dotGreenFstage;
let dotGreenSstage;
let dotBrownFstage;
let dotBrownSstage;
let dotBlueFstage;
let dotBlueSstage;


// ancients.addEventListener('click', (event) => {
// 	   return elChosen = event.target.dataset.info;

// })
// console.log(elChosen);


Azatoth.addEventListener('click', () => {

	chosenAncient = 'azathoth';
	for (let ancient of ancients) {
		ancient.classList.remove('active')
	}
	Azatoth.classList.add('active');
	ancientsData.forEach(el => {
		if (el.name === chosenAncient) {
			dotsGreen[0].innerHTML = el.firstStage.greenCards;
			dotsGreen[1].innerHTML = el.secondStage.greenCards;
			dotsGreen[2].innerHTML = el.thirdStage.greenCards;

			dotsBrown[0].innerHTML = el.firstStage.brownCards;
			dotsBrown[1].innerHTML = el.secondStage.brownCards;
			dotsBrown[2].innerHTML = el.thirdStage.brownCards;

			dotsBlue[0].innerHTML = el.firstStage.blueCards;
			dotsBlue[1].innerHTML = el.secondStage.blueCards;
			dotsBlue[2].innerHTML = el.thirdStage.blueCards;
			//chosenAncient = el.name;
			dotGreenFstage = el.firstStage.greenCards;
			dotGreenSstage = el.secondStage.greenCards;
			dotBrownFstage = el.firstStage.brownCards;
			dotBrownSstage = el.secondStage.brownCards;
			dotBlueFstage = el.firstStage.blueCards;
			dotBlueSstage = el.secondStage.blueCards;
		}

	});

	//chosenAncient = 'azathoth'
	//AncientName.textContent = 'Азатот';
})

//console.log(chosenAncient);

Cthulthu.addEventListener('click', () => {
	chosenAncient = 'cthulhu';
	for (let ancient of ancients) {
		ancient.classList.remove('active');
	}
	ancientsData.forEach(el => {
		if (el.name === chosenAncient) {
			dotsGreen[0].innerHTML = el.firstStage.greenCards;
			dotsGreen[1].innerHTML = el.secondStage.greenCards;
			dotsGreen[2].innerHTML = el.thirdStage.greenCards;

			dotsBrown[0].innerHTML = el.firstStage.brownCards;
			dotsBrown[1].innerHTML = el.secondStage.brownCards;
			dotsBrown[2].innerHTML = el.thirdStage.brownCards;

			dotsBlue[0].innerHTML = el.firstStage.blueCards;
			dotsBlue[1].innerHTML = el.secondStage.blueCards;
			dotsBlue[2].innerHTML = el.thirdStage.blueCards;
		}
	})
	Cthulthu.classList.add('active');
})

IogSothoth.addEventListener('click', () => {
	chosenAncient = 'iogSothoth';
	for (let ancient of ancients) {
		ancient.classList.remove('active')
	}

	ancientsData.forEach(el => {
		if (el.name === chosenAncient) {
			dotsGreen[0].innerHTML = el.firstStage.greenCards;
			dotsGreen[1].innerHTML = el.secondStage.greenCards;
			dotsGreen[2].innerHTML = el.thirdStage.greenCards;

			dotsBrown[0].innerHTML = el.firstStage.brownCards;
			dotsBrown[1].innerHTML = el.secondStage.brownCards;
			dotsBrown[2].innerHTML = el.thirdStage.brownCards;

			dotsBlue[0].innerHTML = el.firstStage.blueCards;
			dotsBlue[1].innerHTML = el.secondStage.blueCards;
			dotsBlue[2].innerHTML = el.thirdStage.blueCards;
		}
	})

	IogSothoth.classList.add('active');
})


ShubNiggurath.addEventListener('click', () => {
	chosenAncient = 'shubNiggurath';
	for (let ancient of ancients) {
		ancient.classList.remove('active')
	}
	ancientsData.forEach(el => {
		if (el.name === chosenAncient) {
			dotsGreen[0].innerHTML = el.firstStage.greenCards;
			dotsGreen[1].innerHTML = el.secondStage.greenCards;
			dotsGreen[2].innerHTML = el.thirdStage.greenCards;

			dotsBrown[0].innerHTML = el.firstStage.brownCards;
			dotsBrown[1].innerHTML = el.secondStage.brownCards;
			dotsBrown[2].innerHTML = el.thirdStage.brownCards;

			dotsBlue[0].innerHTML = el.firstStage.blueCards;
			dotsBlue[1].innerHTML = el.secondStage.blueCards;
			dotsBlue[2].innerHTML = el.thirdStage.blueCards;
		}
	})
	ShubNiggurath.classList.add('active');
})

difficultyLow.addEventListener('click', () => {
	for (let dif of difficultiesLabel) {
		dif.classList.remove('active')
	}
	difficultyLow.classList.add('active');
	difficulties.forEach(dif => {
		if (dif.id === 'easy') chosenDifficulty = dif.id;

	})
})

difficultyMedium.addEventListener('click', () => {
	for (let dif of difficultiesLabel) {
		dif.classList.remove('active')
	}
	difficultyMedium.classList.add('active');
	difficulties.forEach(dif => {
		if (dif.id === 'normal') chosenDifficulty = dif.id;
	})
})

difficultyHight.addEventListener('click', () => {
	for (let dif of difficultiesLabel) {
		dif.classList.remove('active')
	}
	difficultyHight.classList.add('active');
	difficulties.forEach(dif => {
		if (dif.id === 'hard') chosenDifficulty = dif.id;
	})

})

createBtnDeck.addEventListener('click', () => {
	createBtnDeck.classList.add('active');
	if (chosenAncient && chosenDifficulty) buildDeck();

})


function buildDeck() {
	shuffle(greenCards);
	shuffle(brownCards);
	shuffle(blueCards);
	let sumGreenCards, sumBrownCards, sumBlueCards;
	ancientsData.forEach(el => {
		if (el.name === chosenAncient) {
			sumGreenCards = el.firstStage.greenCards + el.secondStage.greenCards + el.thirdStage.greenCards;
			sumBrownCards = el.firstStage.brownCards + el.secondStage.brownCards + el.thirdStage.brownCards;
			sumBlueCards = el.firstStage.blueCards + el.secondStage.blueCards + el.thirdStage.blueCards;
		}
	})
	let greenCardsForGame = [];
	let brownCardsForGame = [];
	let blueCardsForGame = [];

	//----зелёные карты по Древнему и Сложности---//
	greenCards.forEach(gcard => {
		if (chosenDifficulty === 'easy' && gcard.difficulty === 'easy' && (sumGreenCards - greenCardsForGame.length) != 0) {
			greenCardsForGame.push(gcard);
		}
		if (chosenDifficulty === 'normal' && (sumGreenCards - greenCardsForGame.length) != 0) {
			greenCardsForGame.push(gcard);
		}
		if (chosenDifficulty === 'hard' && gcard.difficulty === 'hard' && (sumGreenCards - greenCardsForGame.length) != 0) {
			greenCardsForGame.push(gcard);
		}
	});

	if (greenCardsForGame.length < sumGreenCards) {
		for (let i = 0; i < greenCards.length; ++i) {
			if (chosenDifficulty === 'easy' && greenCards[i].difficulty === 'normal' && (sumGreenCards - greenCardsForGame.length) != 0) {
				greenCardsForGame.push(greenCards[i]);
			}
			if (chosenDifficulty === 'hard' && greenCards[i].difficulty === 'normal' && (sumGreenCards - greenCardsForGame.length) != 0) {
				greenCardsForGame.push(greenCards[i]);
			}
		};
	}
	//----зелёные карты по Древнему и Сложности---//


	//----коричневые карты по Древнему и Сложности---//
	brownCards.forEach(bcard => {
		if (chosenDifficulty === 'easy' && bcard.difficulty === 'easy' && (sumBrownCards - brownCardsForGame.length) != 0) {
			brownCardsForGame.push(bcard);
		}
		if (chosenDifficulty === 'normal' && (sumBrownCards - brownCardsForGame.length) != 0) {
			brownCardsForGame.push(bcard);
		}
		if (chosenDifficulty === 'hard' && bcard.difficulty === 'hard' && (sumBrownCards - brownCardsForGame.length) != 0) {
			brownCardsForGame.push(bcard);
		}
	});

	if (brownCardsForGame.length < sumBrownCards) {
		for (let i = 0; i < brownCards.length; ++i) {
			if (chosenDifficulty === 'easy' && brownCards[i].difficulty === 'normal' && (sumBrownCards - brownCardsForGame.length) != 0) {
				brownCardsForGame.push(brownCards[i]);
			}
			if (chosenDifficulty === 'hard' && brownCards[i].difficulty === 'normal' && (sumBrownCards - brownCardsForGame.length) != 0) {
				brownCardsForGame.push(brownCards[i]);
			}
		};
	}
	//----коричневые карты по Древнему и Сложности---//

	//----синие карты по Древнему и Сложности---//
	blueCards.forEach(blcard => {
		if (chosenDifficulty === 'easy' && blcard.difficulty === 'easy' && (sumBlueCards - blueCardsForGame.length) != 0) {
			blueCardsForGame.push(blcard);
		}
		if (chosenDifficulty === 'normal' && (sumBlueCards - blueCardsForGame.length) != 0) {
			blueCardsForGame.push(blcard);
		}
		if (chosenDifficulty === 'hard' && blcard.difficulty === 'hard' && (sumBlueCards - blueCardsForGame.length) != 0) {
			blueCardsForGame.push(blcard);
		}
	});

	if (blueCardsForGame.length < sumBlueCards) {
		for (let i = 0; i < blueCards.length; ++i) {
			if (chosenDifficulty === 'easy' && blueCards[i].difficulty === 'normal' && (sumBlueCards - blueCardsForGame.length) != 0) {
				blueCardsForGame.push(blueCards[i]);
			}
			if (chosenDifficulty === 'hard' && blueCards[i].difficulty === 'normal' && (sumBlueCards - blueCardsForGame.length) != 0) {
				blueCardsForGame.push(blueCards[i]);
			}
		};
	}

	//----синие карты по Древнему и Сложности---//

	//console.log(chosenAncient);

	getMiniDeckFstage(greenCardsForGame, brownCardsForGame, blueCardsForGame);
	getMiniDeckSstage(greenCardsForGame, brownCardsForGame, blueCardsForGame);
}


///Тасование Фишера — Йетса
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}
///Тасование Фишера — Йетса

///----Первый этап----////
function getMiniDeckFstage(greenCardsFG, brownCardsFG, blueCardsFG) {
	let miniDeckFstageGreen = [];
	let miniDeckFstageBrown = [];
	let miniDeckFstageBlue = [];
	let miniDeckFstage = [];
	greenCardsFG.forEach(gcard => {
		if (miniDeckFstageGreen.length < dotGreenFstage) {
			miniDeckFstageGreen.push(gcard);
			greenCardsFG.pop();
		}
	});

	brownCardsFG.forEach(bcard => {
		if (miniDeckFstageBrown.length < dotBrownFstage)
			miniDeckFstageBrown.push(bcard);
	});

	blueCardsFG.forEach(blcard => {
		if (miniDeckFstageBlue.length < dotBlueFstage)
			miniDeckFstageBlue.push(blcard);
	});
	miniDeckFstage = miniDeckFstageGreen.concat(miniDeckFstageBrown, miniDeckFstageBlue);
	console.log(miniDeckFstage);
	console.log(greenCardsFG);
}
///----Первый этап----////

///----Второй этап----////
function getMiniDeckSstage(greenCardsFG, brownCardsFG, blueCardsFG) {
	let miniDeckSstageGreen = [];
	let miniDeckSstageBrown = [];
	let miniDeckSstageBlue = [];
	let miniDeckSstage = [];
	greenCardsFG.forEach(gcard => {
		if (miniDeckSstageGreen.length < dotGreenSstage) {
			miniDeckSstageGreen.push(gcard);
			greenCardsFG.pop();
		}
	});

	brownCardsFG.forEach(bcard => {
		if (miniDeckFstageBrown.length < dotBrownFstage)
			miniDeckFstageBrown.push(bcard);
	});

	blueCardsFG.forEach(blcard => {
		if (miniDeckFstageBlue.length < dotBlueFstage)
			miniDeckFstageBlue.push(blcard);
	});
	miniDeckFstage = miniDeckFstageGreen.concat(miniDeckFstageBrown, miniDeckFstageBlue);
	//console.log(miniDeckFstage);
}

///----Второй этап----////



// let arr = [];
// brownCards.forEach(bcard => {
// 	if (bcard.difficulty === 'hard') arr.push(bcard)
// });
// console.log(arr);