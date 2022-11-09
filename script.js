const CITY_INFO_URL = "https://realibi.kz/courses";

function draw(array){
    let listDiv = document.querySelector("#list");
    listDiv.innerHTML = "";

    for(let task of array){
        listDiv.innerHTML += `
            <p>Название: ${task.title}</p>
            <p>Instagram: ${task.instagram}</p>
            <p>Телефон: ${task.phones}</p>
            <p>Адрес: ${task.addresses}</p>
            <hr>
        `;
    }
};

async function loadCity (selectedCityID) {
    let response = await fetch(CITY_INFO_URL);
    let result = await response.json();
    console.log(result);

    draw(result.filter(item => item.city_id === selectedCityID));
};
loadCity(2); // показываем только Алматы