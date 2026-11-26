let produtos = [];

let carrinho = [];
let favoritos = [];

let mostrandoFavoritos = false;

const listaProdutos = document.getElementById("listaProdutos");

const pesquisa = document.getElementById("pesquisa");

const categoriaFiltro = document.getElementById("categoriaFiltro");

const marcaFiltro = document.getElementById("marcaFiltro");

const precoFiltro = document.getElementById("precoFiltro");

const ordenacao = document.getElementById("ordenacao");


// BUSCAR PRODUTOS NA API

async function buscarProdutos() {

    try {

        const resposta = await fetch("http://localhost:8080/api/sephora");

        if (!resposta.ok) {
            throw new Error("Erro ao buscar produtos");
        }

        produtos = await resposta.json();

        mostrarProdutos(produtos);

    } catch (erro) {

        console.error("Erro:", erro);

        listaProdutos.innerHTML = `
            <p>Não foi possível carregar os produtos.</p>
        `;

    }

}


// FORMATAR PREÇO

function formatarPreco(preco) {

    return Number(preco).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}


// MOSTRAR PRODUTOS

function mostrarProdutos(lista) {

    listaProdutos.innerHTML = "";

    document.getElementById("quantidadeProdutos").textContent =
        lista.length + " produto(s)";

    const mensagem = document.getElementById("mensagemVazia");

    if (lista.length === 0) {

        mensagem.style.display = "block";

        return;

    }

    mensagem.style.display = "none";


    lista.forEach(produto => {

        const card = document.createElement("div");

        card.classList.add("card");

        const estaFavorito = favoritos.includes(produto.id);


        card.innerHTML = `

            <button class="favorito"
                onclick="favoritar(${produto.id})">

                ${estaFavorito ? "♥" : "♡"}

            </button>

            <div class="imagem-produto">

                <div class="produto-placeholder">
                    ✦
                </div>

            </div>

            <div class="informacoes">

                <p class="marca">
                    ${produto.nomeDaMarca || "Marca"}
                </p>

                <h3>
                    ${produto.nomeproduto || "Produto"}
                </h3>

                <p class="avaliacao">
                    ${"★".repeat(Number(produto.avaliacao || 0))}
                    ${"☆".repeat(5 - Number(produto.avaliacao || 0))}
                </p>

                <p class="preco">
                    ${formatarPreco(produto.preco)}
                </p>

                <p class="descricao">
                    ${produto.descricaoDoProduto || ""}
                </p>

                <button class="botao adicionar"
                    onclick="adicionarCarrinho(${produto.id})">

                    ADICIONAR À SACOLA

                </button>

            </div>

        `;

        listaProdutos.appendChild(card);

    });

}


// PESQUISAR

pesquisa.addEventListener("input", aplicarFiltros);


// FILTRAR PRODUTOS

function aplicarFiltros() {

    let listaFiltrada = [...produtos];

    const texto = pesquisa.value.toLowerCase();

    const categoria = categoriaFiltro.value.toLowerCase();

    const marca = marcaFiltro.value.toLowerCase();

    const preco = precoFiltro.value;


    // Pesquisa pelo nome ou marca

    listaFiltrada = listaFiltrada.filter(produto => {

        const nome = (produto.nomeproduto || "").toLowerCase();

        const nomeMarca = (produto.nomeDaMarca || "").toLowerCase();

        return nome.includes(texto) || nomeMarca.includes(texto);

    });


    // Categoria

    if (categoria !== "") {

        listaFiltrada = listaFiltrada.filter(produto => {

            return (produto.classificacaoProduto || "").toLowerCase()
                === categoria;

        });

    }


    // Marca

    if (marca !== "") {

        listaFiltrada = listaFiltrada.filter(produto => {

            return (produto.nomeDaMarca || "").toLowerCase()
                .includes(marca);

        });

    }


    // Preço máximo

    if (preco !== "") {

        listaFiltrada = listaFiltrada.filter(produto => {

            return Number(produto.preco) <= Number(preco);

        });

    }


    // Ordenação

    if (ordenacao.value === "menor") {

        listaFiltrada.sort((a, b) => a.preco - b.preco);

    }

    if (ordenacao.value === "maior") {

        listaFiltrada.sort((a, b) => b.preco - a.preco);

    }

    if (ordenacao.value === "avaliacao") {

        listaFiltrada.sort((a, b) => b.avaliacao - a.avaliacao);

    }


    // Favoritos

    if (mostrandoFavoritos) {

        listaFiltrada = listaFiltrada.filter(produto => {

            return favoritos.includes(produto.id);

        });

    }

    mostrarProdutos(listaFiltrada);

}


// FILTRAR CATEGORIA

function filtrarCategoria(categoria) {

    categoriaFiltro.value = categoria;

    aplicarFiltros();

}


// LIMPAR FILTROS

function limparFiltros() {

    pesquisa.value = "";

    categoriaFiltro.value = "";

    marcaFiltro.value = "";

    precoFiltro.value = "";

    ordenacao.value = "";

    mostrandoFavoritos = false;

    aplicarFiltros();

}


// FAVORITOS

function favoritar(id) {

    if (favoritos.includes(id)) {

        favoritos = favoritos.filter(item => item !== id);

    } else {

        favoritos.push(id);

    }

    aplicarFiltros();

}


function mostrarFavoritos() {

    mostrandoFavoritos = !mostrandoFavoritos;

    aplicarFiltros();

}


// CARRINHO

function adicionarCarrinho(id) {

    const produto = produtos.find(item => item.id === id);

    if (produto) {

        carrinho.push(produto);

        atualizarCarrinho();

        alert("Produto adicionado à sacola!");

    }

}


function atualizarCarrinho() {

    document.getElementById("contador").textContent =
        carrinho.length;

    const itens = document.getElementById("itensCarrinho");

    itens.innerHTML = "";

    let total = 0;

    carrinho.forEach((produto, index) => {

        total += Number(produto.preco);

        const item = document.createElement("div");

        item.classList.add("item-carrinho");

        item.innerHTML = `

            <div>

                <strong>${produto.nomeproduto}</strong>

                <p>${formatarPreco(produto.preco)}</p>

            </div>

            <button onclick="removerCarrinho(${index})">
                Remover
            </button>

        `;

        itens.appendChild(item);

    });

    document.getElementById("totalCarrinho").textContent =
        formatarPreco(total);

}


function removerCarrinho(index) {

    carrinho.splice(index, 1);

    atualizarCarrinho();

}


function abrirCarrinho() {

    document.getElementById("modalCarrinho").style.display = "flex";

}


function fecharCarrinho() {

    document.getElementById("modalCarrinho").style.display = "none";

}


function finalizarCompra() {

    alert("O sistema de compra ainda será implementado.");

}


// INICIALIZAR

buscarProdutos();

atualizarCarrinho();