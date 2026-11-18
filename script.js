let produtos = JSON.parse(
    localStorage.getItem("produtos")
) || [];


function cadastrarProduto(evento) {

    evento.preventDefault();

    let nome = document.getElementById("nome").value;
    let preco = Number(document.getElementById("preco").value);

    if (nome.trim() == "" || preco <= 0) {
        alert("Digite um nome e um preço válido!");
        return;
    }

    let produto = {
        nome: nome,
        preco: preco
    };

    produtos.push(produto);

    localStorage.setItem(
        "produtos",
        JSON.stringify(produtos)
    );

    document.getElementById("formProduto").reset();

    mostrarProdutos();
}


function mostrarProdutos() {

    let lista = document.getElementById("listaProdutos");
    lista.innerHTML = "";

    let total = 0;

    for (let produto of produtos) {

        let item = document.createElement("li");

        item.textContent = produto.nome + " - R$ " +
            produto.preco.toFixed(2).replace(".", ",");

        lista.appendChild(item);

        total = total + produto.preco;
    }

    document.getElementById("total").textContent =
        "Total: R$ " + total.toFixed(2).replace(".", ",");
}


document.getElementById("formProduto")
    .addEventListener("submit", cadastrarProduto);


mostrarProdutos();