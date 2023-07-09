const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


//Filter search list
function search(str) {
	let results = [];
	let searchString = str;
	let letters = str.length 
	console.log(letters)
	fruit.forEach((listItem)=> {
		if(listItem.toLowerCase().substring(0 , letters) === searchString && letters > 0){
			results.push(listItem)
		}
	})

	return results;
}

//populate suggestions
function dropdownSuggs(str){
	dropdown = search(str);
	dropdown.forEach((item)=> {
	resElement = document.createElement("li");
	resElement.innerText = item;
	suggestions.appendChild(resElement);

})
};

//handle various inputs
input.addEventListener("keyup",(e) =>{
	while (suggestions.firstChild){
		suggestions.removeChild(suggestions.firstChild);
	}
	str = input.value.toLowerCase();
	dropdownSuggs(str);
	
	})



// suggestions.addEventListener("mouseover",(e)=>{
// 	e.target.style.color = "blue";
// 	console.log(e.target.innerText)
// });
// suggestions.addEventListener("mouseout",(e)=>{
// 	e.target.style.color = "";
// });
suggestions.addEventListener("click",(e)=>{
	e.preventDefault();
	while (suggestions.firstChild){
		suggestions.removeChild(suggestions.firstChild);
	};
	input.value = e.target.innerText;

	console.log(e.target.innerText)
	
});




// function searchHandler(e) {
// 	// TODO
// }

// function showSuggestions(results, inputVal) {

// 	// TODO
// }

// function useSuggestion(e) {
// 	// TODO
// }

// input.addEventListener('keyup', searchHandler);
// suggestions.addEventListener('click', useSuggestion);