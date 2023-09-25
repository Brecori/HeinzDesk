const produto = document.getElementById('produto');
const marca = document.getElementById('marca');


const produtos = `
            <select id="product" name="product">
                <option value="0" label="Selecione um produto" selected="selected">Selecione um produto</option>
            </select>
`

const produtosHeinz = `
    <select id="product" name="product">
        <option value="0" label="Selecione um produto" selected="selected">Selecione um produto</option>
        <option value="Ketchup">Ketchup</option>
        <option value="Mostarda">Mostarda</option>
        <option value="Mostarda">Maionese</option>
    </select>
`

const produtosQuero = `
    <select id="product" name="product">
        <option value="0" label="Selecione um produto" selected="selected">Selecione um produto</option>
        <option value="Molho de Tomate">Molho de Tomate</option>
        <option value="Milho Verde em Lata">Milho Verde em Lata</option>
        <option value="Ervilha em Conserva">Ervilha em Conserva</option>
    </select>
`

const produtosHemmer = `
    <select id="product" name="product">
        <option value="0" label="Selecione um produto" selected="selected">Selecione um produto</option>
        <option value="Cogumelos Fatiados">Cogumelos Fatiados</option>
        <option value="Pimenta Biquinho Vermelha">Pimenta Biquinho Vermelha</option>
        <option value="Ervilha em Conserva">Ervilha em Conserva</option>
    </select>
`

const produtosSelect = document.createElement('div')

produtosSelect.innerHTML = produtos;

produto.appendChild(produtosSelect)

const marcas = `
            <select id="brand" name="brand" onChange={verificaMarca(this.value)}> 
                <option value="0" label="Selecione uma marca" selected="selected">Selecione uma marca</option>
                <option value="Heinz">Heinz</option>
                <option value="Quero">Quero</option>
                <option value="Hemmer">Hemmer</option>
            </select>
`

const marcasSelect = document.createElement('div')

marcasSelect.innerHTML = marcas;

marca.appendChild(marcasSelect)


const brand = document.getElementById('brand');


function verificaMarca() {
    switch (brand.value) {
        case "Heinz":
            produtosSelect.innerHTML = produtosHeinz;
            break;
        case "Quero":
            produtosSelect.innerHTML = produtosQuero;
            break;
        case "Hemmer":
            produtosSelect.innerHTML = produtosHemmer;
            break;
        default:
            produtosSelect.innerHTML = produtos;
            break;
    }
    
}
