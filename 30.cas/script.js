// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 3000);
// setTimeout(() => {
//     console.log(4);
// }, 0);
// console.log(3);

// Callback Hell
// getUser(function (user) {
//     getPosts(user.id, function (posts) {
//         getComments(posts[0].id, function (comments) {
//             console.log(comments);
//         });
//     });
// });

// Promises
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (!success) {
        resolve('Uspeh!');
    } else {
        reject('Greška!');
    }
});

myPromise.then(data => console.log(data)).catch(error => console.error(error));
// fullfilled
// rejected
// pending

// Primer sa API-jem
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Async/Await
async function getPost() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts/3'
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Greška:', error);
    }
}

// getPost().then(data => {
//     const element = document.createElement('div');
//     element.textContent = data.title;
//     document.body.appendChild(element);
// });

async function loadUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    const ul = document.getElementById('user-list');
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        ul.appendChild(li);
    });
}

loadUsers();

// Napisati funkciju loadPost(id) koja ucitava post po ID-u i prikazuje njegov title u HTML-u
async function loadPost() {
    const id = document.getElementById('post-id').value;
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = await response.json();
    document.getElementById(
        'post-output'
    ).innerHTML += `<h2>${post.title}</h2>`;
}

const input = document.getElementById('post-id');
input.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        loadPost();
        event.target.value = '';
    }
});

// Za users api endpoint prikazati  email korisnika, adresu grada i ime kompanije
