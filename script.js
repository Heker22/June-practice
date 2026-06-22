/*const API_KEY = "25c14c31fcb14225be481c89501840c7";

const button = document.getElementById('btn');
const result = document.getElementById('result');

button.addEventListener('click', getNews)

function getNews() {
    const keyword = document.getElementById('keyword').value;
    if (!keyword) {
        result.innerHTML = "<p class = 'error'> enter keyword </p>";
    }

    result.innerHTML = "downloading..."

    const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}`

    
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("Error:" + response.status)
        }
        return response.json();
    })
    .then(data => {
        result.innerHTML = "";


        if (!data.articles || data.articles.lenght === 0) {
            result.innerHTML = "nothing found";
            return;
        }


        data.articles.forEach(article => {
            const div = document.createElement('div');
            div.className = 'article';

            div.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description || "Немає опису"}</p>
            <a href="${article.url}">Читати більше...</a>`;

            result.appendChild(div);
        })
    })

    .catch(error => {
        result.innerHTML = `<p class = "error">${error.message}</p>` });

};


//1

const btn = document.getElementById('catBtn');
const catDiv = document.getElementById('cat');

btn.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(data => {
        catDiv.innerHTML = `
        <img src="${data[0].url}" alt="cat" width="500" >`
    })
})
*/

//2


const user = document.getElementById('user');
const userDiv = document.getElementById('userDiv');

user.addEventListener('click', () => {
    fetch(' https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        const user = data.results[0]
        userDiv.innerHTML = `
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.email}</p>
        <img src="${user.picture.medium}">`
    })
    .catch(error => {
        userDiv.innerHTML = `error found`
        console.log('error')
    })
})