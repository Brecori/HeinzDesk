// Função para buscar dados da API local e criar os cards
function fetchAndCreateCards() {
  // URL da API local
  const baseUrl = 'http://localhost:8081/feedback/person';
  const container = document.getElementById('cardsContainer');

  // Fazendo a requisição GET
  fetch(baseUrl)
    .then(response => {
      // Verifica se a resposta da API está ok (status 200)
      if (response.status === 200) {
        return response.json(); // Converte a resposta para JSON
      } else {
        throw new Error('Erro na requisição');
      }
    })
    .then(data => {
    
      const dataFiltrado = data.filter(response => response.answered === true).filter(response => response.typeEsg === 'E');

      dataFiltrado.forEach(response => {
        // Criar um elemento de card
        const card = document.createElement('div');
        card.className = 'card-comentario w-45';

        // Criar um link para a página ./aprovacaocomentario.html com personId como parâmetro na URL
        const link = document.createElement('a');
        link.href = `./aprovacaocomentario.html?personId=${response.personId}`;

        // Criar um parágrafo para o nome (supondo que 'response.name' seja o nome)
        const nomeParagraph = document.createElement('p');
        nomeParagraph.className = 'color-yellow';
        nomeParagraph.textContent = response.name;

        // Criar um div para o texto do comentário
        const comentarioDiv = document.createElement('div');
        comentarioDiv.className = 'card-comentario-text';

        // Criar um parágrafo para o comentário (supondo que 'response.comment' seja o comentário)
        const comentarioParagraph = document.createElement('p');
        comentarioParagraph.className = 'color-black';
        comentarioParagraph.textContent = response.comment;

        // Montar a estrutura do card
        comentarioDiv.appendChild(comentarioParagraph);
        link.appendChild(nomeParagraph);
        link.appendChild(comentarioDiv);
        card.appendChild(link);

        // Adicionar o card ao container
        container.appendChild(card);
      });
      // Aqui, 'data' conterá os dados da resposta da API em formato JSON
      console.log(data); // Você pode fazer o que quiser com os dados, como exibi-los no console
    })
    .catch(error => {
      console.error('Erro:', error);
    });
}

// Chame a função para buscar e criar os cards quando a página carregar
window.onload = fetchAndCreateCards;
