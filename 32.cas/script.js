console.log(
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
);

let newPost = {
  title: 'Novi Post',
  body: 'Ovo je sadržaj novog posta.',
  userId: 1,
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer your_token_here',
  },
  body: JSON.stringify(newPost),
})
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log('Novi post kreiran:', data);
  })
  .catch(error => {
    console.error('Greška prilikom kreiranja posta:', error);
  });

let updatedPost = {
  title: 'Ažurirani Post',
  body: 'Ovo je ažurirani sadržaj posta.',
  userId: 1,
};

console.log(
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log('Post pre azuriranja:', data))
);

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updatedPost),
})
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log('Post ažuriran PUT-om:', data);
  })
  .catch(error => {
    console.error('Greška prilikom ažuriranja posta:', error);
  });

// Razlika između PUT i PATCH je u tome što PUT ažurira ceo resurs, dok PATCH ažurira samo deo resursa.

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'Ažurirani Naslov Posta',
  }),
})
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log('Post ažuriran PATCH-om:', data);
  })
  .catch(error => {
    console.error('Greška prilikom ažuriranja posta:', error);
  });

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
  .then(response => {
    if (response.ok) {
      console.log('Post uspešno obrisan');
    } else {
      console.error('Greška prilikom brisanja posta:', response.statusText);
    }
  })
  .catch(error => {
    console.error('Greška prilikom brisanja posta:', error);
  });

// Napraviti tri funkcije: createUser(), updateUser() i deleteUser() koje će koristiti fetch na url-u:
// https://jsonplaceholder.typicode.com/users.

console.log(
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => console.log('Korisnik:', data))
);

const createUser = async () => {
  const newUser = {
    name: 'Novi Korisnik',
    username: 'novi_korisnik',
    email: 'novi@korisnik.com',
  };

  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });

  if (!response.ok) {
    throw new Error('Greška prilikom kreiranja korisnika');
  }

  const data = await response.json();
  console.log('Novi korisnik kreiran:', data);
};

createUser();
