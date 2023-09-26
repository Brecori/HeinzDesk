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
        <option value="1001">Ketchup</option>
        <option value="1006">Mostarda</option>
        <option value="1007">Maionese</option>
    </select>
`

const produtosQuero = `
    <select id="product" name="product">
        <option value="0" label="Selecione um produto" selected="selected">Selecione um produto</option>
        <option value="1008">Molho de Tomate</option>
        <option value="1009">Milho Verde em Lata</option>
        <option value="1010">Ervilha em Conserva</option>
    </select>
`

const produtosHemmer = `
    <select id="product" name="product">
        <option value="0" label="Selecione um produto" selected="selected">Selecione um produto</option>
        <option value="1011">Cogumelos Fatiados</option>
        <option value="1012">Pimenta Biquinho Vermelha</option>
        <option value="1013">Ervilha em Conserva</option>
    </select>
`

const produtosSelect = document.createElement('div')

produtosSelect.innerHTML = produtos;

produto.appendChild(produtosSelect)

const marcas = `
            <select id="brand" name="brand" onChange={verificaMarca(this.value)}> 
                <option value="0" label="Selecione uma marca" selected="selected">Selecione uma marca</option>
                <option value="1">Heinz</option>
                <option value="6">Quero</option>
                <option value="7">Hemmer</option>
            </select>
`

const marcasSelect = document.createElement('div')

marcasSelect.innerHTML = marcas;

marca.appendChild(marcasSelect)


const brand = document.getElementById('brand');


function verificaMarca() {
    switch (brand.value) {
        case "1":
            produtosSelect.innerHTML = produtosHeinz;
            break;
        case "6":
            produtosSelect.innerHTML = produtosQuero;
            break;
        case "7":
            produtosSelect.innerHTML = produtosHemmer;
            break;
        default:
            produtosSelect.innerHTML = produtos;
            break;
    }
    
}


var metas = [{
    "group": "Ambiental",
    "color": "green",
    "text": "Reduzir a intensidade do uso de energia em nossas instalações em 15% até 2025 (por tonelada métrica de produto fabricado).",
    "value": "9f516b7b-6b7d-491b-b790-8430877185b2",
    "range": 50.0
  },
  {
    "group": "Governança",
    "color": "orange",
    "text": "Fonte de 100% dos ovos globalmente de galinhas criadas sem gaiolas ou em condições melhores até 2025.",
    "value": "924b46d6-f673-40ad-bc88-df54ff92b716",
    "range": 50.0
  },
  {
    "group": "Governança",
    "color": "orange",
    "text": "Compra de 100% de óleo de palma sustentável até 2022.",
    "value": "cac7d0d6-fa9e-485c-9c6a-3d9c54d6c14f",
    "range": 50.0
  },
  {
    "group": "Governança",
    "color": "orange",
    "text": "Compra de 100% de óleo de palma rastreável até a usina até 2022.",
    "value": "c14dc9a3-b5d0-4f37-9c09-68c5e919aa81",
    "range": 50.0
  },
  {
    "group": "Social",
    "color": "red",
    "text": "Melhorar a saúde e nutrição dos produtos, alcançando 85% de conformidade com as Metas Globais de Nutrição da Kraft Heinz até 2025.",
    "value": "704f26b5-2031-44ca-8321-4cd12a40750d",
    "range": 50.0
  },
  {
    "group": "Social",
    "color": "red",
    "text": "Reduzir o açúcar total em nossos produtos em mais de 60 milhões de libras em nosso portfólio global até 2025.",
    "value": "6795e293-30ee-4753-98bf-c00df553fdd1",
    "range": 50.0
  },
  {
    "group": "Social",
    "color": "red",
    "text": "Reduzir o sódio em mais 5% em nosso Molho de Churrasco e Molhos para Salada Kraft na América do Norte até 2025.",
    "value": "f408fa4a-e6f7-46e9-b049-f6e3f24acfbc",
    "range": 50.0
  },
  {
    "group": "Social",
    "color": "red",
    "text": "Aumentar nossas ofertas de produtos à base de plantas.",
    "value": "c4dbe6fd-b455-4f51-be6f-ad6bd0556784",
    "range": 50.0
  },
  {
    "group": "Social",
    "color": "red",
    "text": "Fornecer 1,5 bilhão de refeições para pessoas necessitadas até 2025, em relação à nossa base de 2019.",
    "value": "ff7f311d-85be-4fca-94ba-9b4ebcfc0aef",
    "range": 50.0
  },
  {
    "group": "Social",
    "color": "red",
    "text": "50% de nossas posições de gestão global serão ocupadas por mulheres até 2025.",
    "value": "61590428-cbe0-4308-a7c2-baa408a1a0e8",
    "range": 50.0
  },
  {
    "group": "Social",
    "color": "red",
    "text": "30% de nossa população de funcionários assalariados nos EUA se identificará como pessoas de cor até 2025.",
    "value": "4bd30e48-a8b2-4e5f-8756-09704c9dbafd",
    "range": 50.0
  },
  {
    "group": "Ambiental",
    "color": "green",
    "text": "Reduzir a intensidade do uso de água em nossas instalações em 15% até 2025 (por tonelada métrica de produto fabricado).",
    "value": "e483c06d-3bbc-4a81-8b83-d4ba06335d2e",
    "range": 50.0
  },
  {
    "group": "Ambiental",
    "color": "green",
    "text": "Visamos criar embalagens 100% recicláveis, reutilizáveis ou compostáveis até 2025.",
    "value": "32e80e10-e848-487b-9f8f-5863b6145dd2",
    "range": 50.0
  },
  {
    "group": "Ambiental",
    "color": "green",
    "text": "Criar uma garrafa Heinz Tomato Ketchup totalmente circular na Europa até 2022.",
    "value": "47eb2b21-4cab-43e0-9b52-ddf3a65498d3",
    "range": 50.0
  },
  {
    "group": "Ambiental",
    "color": "green",
    "text": "Alcançar emissões líquidas zero de carbono até 2050, reduzindo pela metade até 2030.",
    "value": "a547339d-a501-47a1-a230-9cedd316b726",
    "range": 50.0
  },
  {
    "group": "Ambiental",
    "color": "green",
    "text": "Buscar a obtenção da maioria da eletricidade de fontes renováveis até 2025.",
    "value": "bf3ce5cb-ace2-42c9-a0e7-897664ea79bc",
    "range": 50.0
  },
  {
    "group": "Governança",
    "color": "orange",
    "text": "Fonte de 100% dos ovos na Europa de galinhas criadas ao ar livre.",
    "value": "6da0beee-9aad-4055-bc9b-63f5800e298d",
    "range": 50.0
  },
  {
    "group": "Governança",
    "color": "orange",
    "text": "Compra de 100% dos tomates sustentáveis para o Heinz Ketchup até 2025.",
    "value": "7eb57f2c-a286-48d9-bf4c-69b40877e9fd",
    "range": 50.0
  },
  {
    "group": "Governança",
    "color": "orange",
    "text": "Melhorar o bem-estar de frangos de corte nos EUA até 2024 e o compromisso europeu com frangos até 2026.",
    "value": "77250b24-11ae-4943-a2a8-44954d8191b3",
    "range": 50.0
  },
  {
    "group": "Social",
    "color": "red",
    "text": "Melhorar o uso e a transparência de ingredientes mais simples até 2025.",
    "value": "99de6356-f18f-42d0-b886-f872768c9a8f",
    "range": 50.0
  },
  {
    "group": "Ambiental",
    "color": "green",
    "text": "Reduzir a intensidade do uso de água em áreas de risco em 20% até 2025 (por tonelada métrica de produto fabricado).",
    "value": "f4927a61-92d6-4d4c-8fe7-c84c30ca19fa",
    "range": 50.0
  },
  {
    "group": "Ambiental",
    "color": "green",
    "text": "Reduzir a intensidade de resíduos enviados para aterro sanitário em nossas instalações em 20% até 2025 (por tonelada métrica de produto fabricado).",
    "value": "f316096e-c89f-41f9-acab-7afe0a5bece7",
    "range": 50.0
  },
  {
    "group": "Governança",
    "color": "orange",
    "text": "Continuar a trabalhar com especialistas em bem-estar animal e fornecedores nas melhores práticas para eliminar procedimentos dolorosos e promover práticas sustentáveis.",
    "value": "17027066-a4c7-4d46-8034-8e420902a06d",
    "range": 50.0
  }
];

const dropdown = jSuites.dropdown(document.getElementById('dropdown'), {
  data: metas,
  autocomplete: true,
  multiple: true,
  width: '400px',
});




const enviarFeedbackBtn = document.getElementById('enviar-feedback');




enviarFeedbackBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const dataFeedback = document.getElementById('data').value;
  const pais = document.getElementById('country').value;
  const positivo = document.getElementById('positivo').checked;
  const negativo = document.getElementById('negativo').checked;
  const marcaFeedback = document.getElementById('brand').value;
  const qtdFeedback = document.getElementById('qtd').value;
  const produtoFeedback = document.getElementById('product').value;
  let posOrNeg = null;
  console.log('Clicou no botão!');
  const selectedValues = dropdown.getValue();
  const selectedArray = selectedValues.split(';')
  console.log(dataFeedback)
  console.log(pais)
  console.log(posOrNeg);
  
  console.log(produtoFeedback);
  console.log(marcaFeedback);
  console.log(qtdFeedback);
  if (positivo) {
    posOrNeg = true;
  } else {
    posOrNeg = false;
  }
  console.log(posOrNeg);

  const data = {
    "date": "2002-12-19",
    "local": "Japao",
    "feedback" : true,
    "productSku" : 1003,
    "brandId": 3,
    "qtd_comment": 1001,
    "goals": [
      "e483c06d-3bbc-4a81-8b83-d4ba06335d2e",
  ]
  };

// Enviar o post para a api
const apiUrl = 'http://localhost:8081/register/data';
const requestOptions = {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data)
}
console.log(data);  
fetch(apiUrl, requestOptions)
.then(response => response.json()) // obter a resposta em formato JSON
.then(data => console.log(data)) // fazer algo com os dados
.catch(error =>  {
  console.error(error)
  
}
  ); // tratar possíveis erros

  // Redireciona para a página desejada
  // window.location.href = './obrigadoenviarfeedback.html';
});