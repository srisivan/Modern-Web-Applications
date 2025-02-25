document.addEventListener("DOMContentLoaded", function () {
    fetch("books.xml")
        .then(response => response.text())
        .then(xmlStr => {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(xmlStr, "application/xml");
            let books = xmlDoc.getElementsByTagName("book");
            let tableBody = document.querySelector("#bookTable tbody");

            for (let book of books) {
                let row = document.createElement("tr");

                let title = book.getElementsByTagName("title")[0].textContent;
                let author = book.getElementsByTagName("author")[0].textContent;
                let isbn = book.getElementsByTagName("isbn")[0].textContent;
                let publisher = book.getElementsByTagName("publisher")[0].textContent;
                let edition = book.getElementsByTagName("edition")[0].textContent;
                let price = book.getElementsByTagName("price")[0].textContent;
                let currency = book.getElementsByTagName("price")[0].getAttribute("currency");

                row.innerHTML = `
                    <td>${title}</td>
                    <td>${author}</td>
                    <td>${isbn}</td>
                    <td>${publisher}</td>
                    <td>${edition}</td>
                    <td>${currency} ${price}</td>
                `;

                tableBody.appendChild(row);
            }
        })
        .catch(error => console.error("Error loading XML:", error));
});
