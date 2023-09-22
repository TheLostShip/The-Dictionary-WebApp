// searchinput
// searchbtn

var meaning = document.getElementById("definition");

const dictionary = (word)=>{
    const options = {
    	method: 'GET',
    	headers: {
    		'X-RapidAPI-Key': '7e0b298117msh6017aea8de0a4abp1b3b3bjsn6dd1ab357e5e',
    		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    	}
    };

    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then((response) => {
            
            console.log(response)
            wordheading.innerHTML = "Here's the meaning of : " + response.word;
            definition.innerHTML = response.definition.replace("2.", "<br><hr>2.").replace("3.", "<br><hr>3.").replace("4.", "<br><hr>4.").replace("5.", "<br><hr>5.").replace("6.", "<br><hr>6.").replace("7.", "<br><hr>7.").replace("8.", "<br><hr>8.").replace("9.", "<br><hr>9.").replace("10.", "<br><hr>10.").replace("11.", "<br><hr>11.").replace("12.", "<br><hr>12.");
            meaning.innerHTML = '<div style="text-align: justify; border: 0.2px solid gray; border-radius: 4px; padding: 2.5rem; margin-top: 2rem;">' + meaning.innerHTML + '</div>';
        })
        .catch(err => console.error(err));
    }

searchbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    dictionary(searchinput.value)
})


// Redirecting to another html page.
function redirectToHistoryPage() {
    // Replace 'destination.html' with the actual filename and path of the destination HTML page
    window.location.href = 'history.html';
}
function redirectToTechPage() {
    // Replace 'destination.html' with the actual filename and path of the destination HTML page
    window.location.href = 'tech.html';
}
