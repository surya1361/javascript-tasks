const api = "https://fakestoreapi.com/products";


// ======================================================
// TASK 1 — PRODUCT CARDS
// ======================================================

fetch(api)
    .then(response => response.json())
    .then(data => {

        let container = document.querySelector("#task1");

        data.forEach(c => {

            let card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <h3>${c.title}</h3>

                <img src="${c.image}" alt="${c.title}">

                <p><strong>Price:</strong> $${c.price}</p>

                <p><strong>Category:</strong> ${c.category}</p>

                <p><strong>Rating:</strong> ${c.rating.rate}</p>
            `;

            container.append(card);
        });

    })
    .catch(error => console.log(error));


// ======================================================
// TASK 2 — PRODUCT DESCRIPTION
// Show only first 50 characters
// ======================================================

fetch(api)
    .then(response => response.json())
    .then(data => {

        let container = document.querySelector("#task2");

        data.forEach(c => {

            let product = document.createElement("div");

            product.innerHTML = `
                <p><strong>Title:</strong> ${c.title}</p>

                <p>
                    <strong>Description:</strong>
                    ${c.description.slice(0, 50)}
                </p>

                <p><strong>Price:</strong> $${c.price}</p>

                <hr>
            `;

            container.append(product);
        });

    })
    .catch(error => console.log(error));


// ======================================================
// TASK 3 — PRODUCT LIST
// ======================================================

fetch(api)
    .then(response => response.json())
    .then(data => {

        let container = document.querySelector(".api");

        data.forEach(c => {

            let product = document.createElement("div");

            product.innerHTML = `
                <h3>Product: ${c.title}</h3>

                <p>Price: $${c.price}</p>

                <p>Category: ${c.category}</p>

                <img 
                    src="${c.image}" 
                    alt="${c.title}"
                    width="150"
                >

                <hr>
            `;

            container.append(product);
        });

    })
    .catch(error => console.log(error));


// ======================================================
// TASK 4 — PRODUCT IMAGE GALLERY
// Use document.createElement("img")
// ======================================================

fetch(api)
    .then(response => response.json())
    .then(data => {

        let container = document.querySelector("#task4");

        data.forEach(c => {

            let image = document.createElement("img");

            image.src = c.image;

            image.alt = c.title;

            container.append(image);
        });

    })
    .catch(error => console.log(error));


// ======================================================
// TASK 5 — CATEGORY DISPLAY
// ======================================================

fetch(api)
    .then(response => response.json())
    .then(data => {

        let container = document.querySelector("#task5");

        data.forEach(c => {

            let product = document.createElement("div");

            product.innerHTML = `
                <p><strong>Title:</strong> ${c.title}</p>

                <p><strong>Category:</strong> ${c.category}</p>

                <p><strong>Price:</strong> $${c.price}</p>

                <hr>
            `;

            container.append(product);
        });

    })
    .catch(error => console.log(error));


// ======================================================
// TASK 6 — PRODUCT DETAILS CARD
// ======================================================

fetch(api)
    .then(response => response.json())
    .then(data => {

        let container = document.querySelector("#task6");

        data.forEach(c => {

            let card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <h3>${c.title}</h3>

                <img 
                    src="${c.image}" 
                    alt="${c.title}"
                >

                <p>
                    <strong>Description:</strong>
                    ${c.description}
                </p>

                <p>
                    <strong>Category:</strong>
                    ${c.category}
                </p>

                <p>
                    <strong>Price:</strong>
                    $${c.price}
                </p>

                <p>
                    <strong>Rating:</strong>
                    ${c.rating.rate}
                </p>
            `;

            container.append(card);
        });

    })
    .catch(error => console.log(error));


// ======================================================
// TASK 7 — RATING DETAILS
// ======================================================

fetch(api)
    .then(response => response.json())
    .then(data => {

        let container = document.querySelector("#task7");

        data.forEach(c => {

            let product = document.createElement("div");

            product.innerHTML = `
                <p><strong>Product:</strong> ${c.title}</p>

                <p><strong>Rating:</strong> ${c.rating.rate}</p>

                <p><strong>Reviews:</strong> ${c.rating.count}</p>

                <hr>
            `;

            container.append(product);
        });

    })
    .catch(error => console.log(error));


// ======================================================
// TASK 8 — FIRST 20 CHARACTERS
// ======================================================

fetch(api)
    .then(response => response.json())
    .then(data => {

        let container = document.querySelector("#task8");

        data.forEach(c => {

            let product = document.createElement("div");

            product.innerHTML = `
                <p><strong>Title:</strong> ${c.title}</p>

                <p>
                    <strong>Description:</strong>
                    ${c.description.slice(0, 20)}
                </p>

                <hr>
            `;

            container.append(product);
        });

    })
    .catch(error => console.log(error));


// ======================================================
// TASK 9 — CHANGE BUTTON CONTENT
// ======================================================

fetch(api)
    .then(response => response.json())
    .then(data => {

        let container = document.querySelector("#task9");

        data.forEach(c => {

            let card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <img 
                    src="${c.image}" 
                    alt="${c.title}"
                >

                <h3>${c.title}</h3>

                <button>Buy for $${c.price}</button>
            `;

            container.append(card);
        });

    })
    .catch(error => console.log(error));


// ======================================================
// TASK 10 — COMPLETE PRODUCT CARD
// ======================================================

fetch(api)
    .then(response => response.json())
    .then(data => {

        let container = document.querySelector("#task10");

        data.forEach(c => {

            let card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <img 
                    src="${c.image}" 
                    alt="${c.title}"
                >

                <h3>
                    Title: ${c.title}
                </h3>

                <p>
                    <strong>Category:</strong>
                    ${c.category}
                </p>

                <p>
                    <strong>Description:</strong><br>
                    ${c.description}
                </p>

                <p>
                    <strong>Price:</strong>
                    $${c.price}
                </p>

                <p>
                    <strong>Rating:</strong>
                    ${c.rating.rate}
                </p>

                <p>
                    <strong>Reviews:</strong>
                    ${c.rating.count}
                </p>

                <button>BUY NOW</button>
            `;

            container.append(card);
        });

    })
    .catch(error => console.log(error));