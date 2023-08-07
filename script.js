

const textInput = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 
				'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 
				'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 
				'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 
				'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 
				'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 
				'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 
				'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 
				'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 
				'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 
				'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

class Fruit{


	search(str) {

		const results = fruit.filter(fruitItem =>
			fruitItem.toLowerCase().includes(str.toLowerCase()));

			this.showSuggestions(results);
		
	}

	

	searchHandler(str){

		str = textInput.value;
		this.search(str);

	}

	
	showSuggestions(results) {

		const ul = suggestions;
		ul.innerHTML = '';
		results.forEach(fruitItem => {
		  const li = document.createElement('li');
		  li.textContent = fruitItem;
		  ul.appendChild(li);
		});
		suggestions.parentElement.classList.add('show');
	  }
	
	useSuggestion(e) {

		if (e.target.tagName === 'LI') {
			textInput.value = e.target.textContent;
			suggestions.innerHTML = '';
			suggestions.parentElement.classList.remove('show');
		  }
		}
	  
}

const fruitObj = new Fruit();

textInput.addEventListener('input', () => {
  fruitObj.searchHandler();
});

document.addEventListener('click', e => {
  if (!textInput.contains(e.target) && e.target !== suggestions) {
    suggestions.parentElement.classList.remove('show');
  }
});

suggestions.addEventListener('click', e => {
  fruitObj.useSuggestion(e);
});

