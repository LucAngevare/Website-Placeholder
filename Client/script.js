function API() {
    fetch("/api/quotes")
        .then((response) => response.json())
        .then((data) => {
            const quote = document.getElementById("quote");
            quote.innerText = `"${data["quote"]}"`
            console.log(data)
        });
}

window.onload = function() {
    API();
}