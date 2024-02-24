const title = document.querySelector("#title");
const btn = document.querySelector("#btn");
const spanGold = document.querySelector("#spanGold");
const contentWhat = document.querySelector("#contentWhat");
const contentSurprize = document.querySelector("#contentSurprize");
const contentSurprizeTitle = document.querySelector("#contentSurprizeTitle");
const contentSurprizeText = document.querySelector("#contentSurprizeText");

function changeContent() {
	setTimeout(function () {
		btn.classList.add("btnHW")
		btn.classList.add("btnHW")
	}, 500)
	setTimeout(function () {
		title.textContent = "С 23 февраля !!!";
		contentWhat.style.display = "none";
		contentSurprize.style.display = "flex";
	}, 1000);
	setTimeout(function () {
		contentSurprizeTitle.classList.add("colorSTi");
	}, 1500);
	setTimeout(function () {
		contentSurprizeText.classList.add("colorSTxt");
		spanGold.classList.add("gold");
	}, 2500);
}

btn.addEventListener("click", changeContent)