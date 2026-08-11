// ======================================================
// BONUS CHALLENGE — PRODUCT CARD
// ======================================================

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {

        let container = document.querySelector("#bonus");

        data.forEach(product => {

            let card = document.createElement("div");

            card.innerHTML = `
                <div class="card">

                    <img 
                        src="${product.image}" 
                        alt="${product.title}"
                        width="180"
                    >

                    <h3>${product.title}</h3>

                    <p>
                        <strong>Category:</strong>
                        ${product.category}
                    </p>

                    <p>
                        <strong>Description:</strong>
                        ${product.description}
                    </p>

                    <p>
                        <strong>Price:</strong>
                        $${product.price}
                    </p>

                    <p>
                        <strong>Rating:</strong>
                        ${product.rating.rate}
                    </p>

                    <p>
                        <strong>Reviews:</strong>
                        ${product.rating.count}
                    </p>

                    <button>BUY NOW</button>

                </div>
            `;

            container.append(card);
        });

    })
    .catch(error => {
        console.log("Error:", error);
    });