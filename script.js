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


//3

const btn = document.getElementById('postBtn');
const div = document.getElementById('box');

btn.addEventListener('click', () => {
   const randomID = Math.floor(Math.random() * 100)+1;
    fetch(`https://jsonplaceholder.typicode.com/posts/${randomID}`)
        .then(res => res.json())
        .then(data => {
            div.innerHTML = `
        <h2>${data.title}</h2>
        <h2>${data.body}</h2>`
        })
        .catch(error => {
            div.innerHTML = `error`
            console.log('error')
        })
})

  //4
const btn = document.getElementById('btn');
const div = document.getElementById('box');

btn.addEventListener('click', () => {
    fetch(`https://restcountries.com/v3.1/name/ukraine`)
        .then(res => res.json())
        .then(data => {
            const country = data[0]
            div.innerHTML = `
            <h1>${country.name.common}</h1>
            <h3>${country.capital[0]}</h3>
            <h3>${country.population}</h3>`
        })
        .catch(error => {
            div.innerHTML = `error`
            console.log('error')
        })
})

//5

const btn = document.getElementById('btn')
const div = document.getElementById('box')

btn.addEventListener('click', () => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json())
    .then(data => {
        div.innerHTML = `
        <img src="${data.message}" alt="" width="500">`
    })
    .catch(error => {
        div.innerHTML = `error`
        console.log('error')
    })
})


//6


const btn = document.getElementById('btn')
const div = document.getElementById('box')

btn.addEventListener('click', () => {
    fetch(`https://catfact.ninja/fact`)
    .then(res => res.json())
    .then(data => {
        div.innerHTML = `
        <h2>${data.fact}</h2>`
    })
    .catch(error => {
        innerHTML = 'error'
        console.log('error')         
    })
})

const btn = document.getElementById('btn')
const div = document.getElementById('div')

btn.addEventListener('click', () => {
    fetch(`https://api.adviceslip.com/advice`)
    .then(res => res.json())
    .then(data => {
        div.innerHTML =  `
        <p>${data.slip.advice}</p>`
    })
    .catch(error => {
        innerHTML = `errorrrrr`
        console.log('erorrrrrrr')
    })
})

let currentPage = 1;
const limit = 2;

const usersDiv = document.getElementById('users')

function getUsers(){
    fetch(`https://jsonplaceholder.typicode.com/users?_page=${currentPage}&_limit=${limit} `)
    .then(res => res.json())
    .then(data => {
        usersDiv.innerHTML = "";
        data.forEach(user => {
            usersDiv.innerHTML += `
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            <hr>`
        }) 
    })
}

getUsers()

document.getElementById('next').onclick = function(){
    currentPage++;
    getUsers();
}

document.getElementById('prev').onclick = function(){
    if(currentPage > 1){
        currentPage--;
         getUsers();
}
}


const dogs = document.getElementById('dogs');
let isLoading = false;

function loadDogs() {
    isLoading = true;
    dogs.innerHTML += `<p id="loading">loading...</p>`
    setTimeout(() => {
        fetch("https://dog.ceo/api/breeds/image/random/10")
            .then(res => res.json())
            .then(data => {
                document.getElementById('loading').remove();
                data.message.forEach(dog => {
                    dogs.innerHTML += `<img src="${dog}" alt="dog">`
                }
                );
                isLoading = false
            });
    }, 1000
    )

}

loadDogs();

window.addEventListener('scroll', () => {
    if (!isLoading && window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
    ) {
        loadDogs();
    }
});*/


const cats = document.getElementById('cats');
const pagination = document.getElementById('pagination');
const totalPages = 20;
let currentPage = 1;

function loadCats(page) {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=5&page=${page - 1}`)
        .then(res => res.json())
        .then(data => {
            cats.innerHTML = '';
            data.forEach(cat => cats.innerHTML +=
                `<img src="${cat.url}" alt="cat" width="250">`
            )
        })
}

function createPagination() {
    pagination.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page = "${i}" >${i}</button>`
    }
    document.querySelectorAll('.page-btn').forEach(button => {
        button.addEventListener('click', () => {
            currentPage = Number(button.dataset.page);
            loadCats(currentPage);
            createPagination();

        })
    })
}

loadCats(currentPage);
createPagination();
