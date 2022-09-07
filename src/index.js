function renderTransaction(transaction) {
    const { price, discount, createdAt, approvedAt } = transaction;

    const body = document.querySelector("body");

    body.innerHTML = "<ul></ul>";

    createdAtElements(price, createdAt, approvedAt, toDicounted(price, discount));

}

function createdAtElements(price, createdAt, approvedAt, discountedPrice) {

    const elementsTransaction = [
        `<li>Preço: R$ ${formatValue(price)}<br></li>`,
        `<li>Preço com desconto: R$ ${formatValue(discountedPrice)}<br></li>`,
        `<li>Criado em: ${createdAt}<br></li>`,
        `<li>Aprovado em: ${approvedAt}<br></li>`
    ];

    makeElements(elementsTransaction);

}

function formatValue(value) {

    return value.toFixed(2).replace('.', ',')
    
}

function makeElements(elementsTransaction) {
    const ul = document.querySelector("ul");

    ul.innerHTML = elementsTransaction;

}

function toDicounted(price, discount) {

    return price * (1 - discount);

}

function getTransaction() {

    return {
        price: 3,
        discount: 0.3,
        createdAt: "30/01/2022",
        approvedAt: "30/01/2022"
    };

}

renderTransaction(getTransaction());
