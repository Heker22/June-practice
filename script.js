const API_KEY = "25c14c31fcb14225be481c89501840c7";

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
