// Função para obter o valor do parâmetro "personId" da URL
function getPersonIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const personId = urlParams.get('personId');
    return personId;
  }
  
  // Chame a função para obter o valor do parâmetro "personId"
  const personId = getPersonIdFromURL();
  
  // Verifique se o "personId" existe
  if (personId) {
    const apiUrl = `http://localhost:8080/feedback/person/${personId}`;
  
    // Fazendo a requisição GET com o personId na URL
    fetch(apiUrl)
      .then(response => {
        // Verifica se a resposta da API está ok (status 200)
        if (response.status === 200) {
          return response.json(); // Converte a resposta para JSON
        } else {
          throw new Error('Erro na requisição');
        }
      })
      .then(data => {
        // -------------------------------------------------------------------------------------------------NOME
        const nome = data.name;
        const boxNome = document.querySelector('#boxNome');
        boxNome.textContent = `Comentário de ${nome}`;

        // -------------------------------------------------------------------------------------------------Comentario
        // Obtém o valor do campo "comment" do JSON
        const comment = data.comment;
  
        // Encontra o elemento HTML com a classe "comentario-box"
        const comentarioBox = document.querySelector('#comentario');
  
        // Cria um elemento <p> e define o conteúdo como o valor do campo "comment"
        const comentarioParagraph = document.createElement('p');
        comentarioParagraph.className = 'color-black';
        comentarioParagraph.textContent = comment;
  
        // Adiciona o elemento <p> à "comentario-box"
        comentarioBox.appendChild(comentarioParagraph);


        // -------------------------------------------------------------------------------------------------PROGRESSO
        // Obtém o valor do campo "ranger" da primeira entrada do JSON

            const rangerValuep = data.questions[0].ranger;

            // Encontra o elemento HTML com o ID "progresso"
            const progresso = document.getElementById('progresso');

            // Define o valor da barra de progresso como o valor de "rangerValue"
            progresso.value = rangerValuep;

            // Encontra o elemento HTML com o ID "progresso-numero"
            const progressoNumero = document.getElementById('progresso-numero');

            // Define o texto do elemento "progresso-numero" como a porcentagem
            progressoNumero.textContent = `${rangerValuep}%`;


        // -------------------------------------------------------------------------------------------------NIVEL  

            const rangerValue = data.questions[3].ranger;

            // Encontra o elemento HTML que corresponde ao valor de "rangerValue"
            const divs = document.querySelectorAll('.breno');

            divs.forEach(div => {
                const label = div.querySelector('label');
                const inputValue = parseInt(label.textContent);

                // Compara o valor de "rangerValue" com o conteúdo da div
                if (rangerValue === inputValue) {
                const input = div.querySelector('input[type="radio"]');
                input.setAttribute('checked', 'checked');
                }
            });

        // -------------------------------------------------------------------------------------------------PERGUNTA 1
        
        const resultValue = data.questions[data.questions.length - 1].result;

        // Encontra o elemento HTML com o ID "conceitoESG"
        const conceitoESG = document.getElementById('conceitoESG');
      
        // Define o conteúdo da div como o valor de "resultValue"
        conceitoESG.textContent = resultValue;

        // -------------------------------------------------------------------------------------------------PERGUNTA 2

        const resultValue2 = data.questions[2].result;

        const resultContent2 = resultValue2 === "NÃO_TENHO_CERTEZA" ? "NÃO TENHO CERTEZA" : resultValue2;
        // Encontra o elemento HTML com o ID "carbono"
        const carbono = document.getElementById('carbono');
      
        // Define o conteúdo da div como o valor de "resultValue"
        carbono.textContent = resultContent2;

         // -------------------------------------------------------------------------------------------------PERGUNTA 3

         const resultValue3 = data.questions[1].result;

         // Verifica se o valor é "NÃO_TENHO_CERTEZA" e atribui "Não tenho certeza" em vez disso
         const resultContent = resultValue3 === "NÃO_TENHO_CERTEZA" ? "NÃO TENHO CERTEZA" : resultValue3;
       
         // Encontra o elemento HTML com o ID "lgbt"
         const lgbt = document.getElementById('lgbt');
       
         // Define o conteúdo da div como o valor de "resultContent"
         lgbt.textContent = resultContent;
        
        // --------------------------------------------------------------------------------------------------ACEITAR
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  } else {
    console.error('O parâmetro "personId" não foi encontrado na URL.');
  }
  