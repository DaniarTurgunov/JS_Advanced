const url = 'https://jsonplaceholder.typicode.com/users';

// fetch(url)
//     .then((res) => res.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.error(error))

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.map(d=>{
            const html = `
                <tr>
                    <td>${d.name}</td>
                    <td>${d.email}</td>
                    <td>${d.address.city}</td>
                    <td>${d.phone}</td>
                    <td>${d.company.name}</td>
                </tr>
            `;
            document.querySelector('tbody').insertAdjacentHTML('beforeend', html);
        });
    });