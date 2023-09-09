    async function registerSale() {
        try {
            const response = await fetch(urlSales, {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(sales),
            });
            const num_sale = await response.json();
            alert(JSON.stringify("Nota Nº:" + num_sale + " inserida com sucesso !"))
        } catch (error) {
            console.error("Error:", error)
        }
    };