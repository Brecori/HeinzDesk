var metas = [
    { "group": "Social", "color": "red", "text": "Melhorar saúde e nutrição do produto", "value": "Improve product health & nutrition by achieving 85% compliance with Kraft Heinz Global Nutrition Targets by 2025." },
    { "group": "Social", "color": "red", "text": "Reduzir açúcar total em produtos", "value": "Reduce total sugar in our products by more than 60 million pounds across our global portfolio by 2025." },
    { "group": "Social", "color": "red", "text": "Reduzir sódio em molhos e molhos para salada", "value": "Reduce sodium by an additional 5% in our BBQ Sauce and Kraft Salad Dressings in North America by 2025." },
    { "group": "Social", "color": "red", "text": "Melhorar ingredientes simples e transparência", "value": "Improve use and transparency of simpler ingredients by 2025." },
    { "group": "Social", "color": "red", "text": "Aumentar produtos à base de plantas", "value": "Increase our plant-based offerings." },
    { "group": "Social", "color": "red", "text": "Fornecer 1,5 bilhão de refeições para necessitados", "value": "Provide 1.5 billion meals to people in need by 2025 against our 2019 baseline." },
    { "group": "Social", "color": "red", "text": "50% de posições de gestão global ocupadas por mulheres", "value": "50% of our global management positions will be filled by women by 2025." },
    { "group": "Social", "color": "red", "text": "30% de funcionários nos EUA serão de minorias étnicas", "value": "30% of our salaried U.S. employee population will identify as people of color by 2025." },
    { 
        "group": "Ambiental", 
        "color": "green",
        "text": "Reduzir intensidade uso de água em áreas de risco.", 
        "value": "Reduce water use intensity by 20% in high-risk watershed areas by 2025 (per metric ton of product made)."
      },
      { 
        "group": "Ambiental", 
        "color": "green",
        "text": "Reduzir intensidade uso de água em instalações.", 
        "value": "Reduce water use intensity by 15% across our manufacturing facilities by 2025 (per metric ton of product made)."
      },
      { 
        "group": "Ambiental", 
        "color": "green",
        "text": "Reduzir intensidade resíduos em instalações.", 
        "value": "Reduce waste to landfill intensity by 20% across our manufacturing facilities by 2025 (per metric ton of product made)."
      },
      { 
        "group": "Ambiental", 
        "color": "green",
        "text": "Embalagens 100% recicláveis, reutilizáveis ou compostáveis.", 
        "value": "Aim to make 100% recyclable, reusable or compostable packaging by 2025."
      },
      { 
        "group": "Ambiental", 
        "color": "green",
        "text": "Garrafa Heinz Tomato Ketchup totalmente circular na Europa.", 
        "value": "Create a fully circular Heinz Tomato Ketchup Bottle in Europe by 2022."
      },
      { 
        "group": "Ambiental", 
        "color": "green",
        "text": "Alcançar emissões líquidas zero até 2050, reduzindo pela metade até 2030.", 
        "value": "Achieve Net Zero carbon emissions by 2050, halving same by 2030."
      },
      { 
        "group": "Ambiental", 
        "color": "green",
        "text": "Reduzir intensidade uso de energia em instalações.", 
        "value": "Reduce energy use intensity by 15% across our manufacturing facilities by 2025 (per metric ton of product made)."
      },
      { 
        "group": "Ambiental", 
        "color": "green",
        "text": "Obter a maioria da eletricidade de fontes renováveis até 2025.", 
        "value": "Procure majority of electricity from renewable sources by 2025."
      },
      { 
        "group": "Governança", 
        "color": "Orange",
        "text": "Fonte global 100% ovos de galinhas criadas sem gaiolas até 2025.", 
        "value": "Source 100% of eggs globally from cage-free or better* hens by 2025."
      },
      { 
        "group": "Governança", 
        "color": "Orange",
        "text": "Fonte de ovos na Europa de galinhas ao ar livre.", 
        "value": "Source 100% of eggs in Europe from free-range hens."
      },
      { 
        "group": "Governança", 
        "color": "Orange",
        "text": "Compra 100% tomates sustentáveis para Heinz Ketchup até 2025.", 
        "value": "Purchase 100% sustainably-sourced Heinz Ketchup tomatoes by 2025."
      },
      { 
        "group": "Governança", 
        "color": "Orange",
        "text": "Compra de 100% de óleo de palma sustentável até 2022.", 
        "value": "Purchase 100% sustainable palm oil by 2022."
      },
      { 
        "group": "Governança", 
        "color": "Orange",
        "text": "Compra de óleo de palma rastreável até a usina.", 
        "value": "Purchase 100% traceable palm oil to the mill by 2022."
      },
      { 
        "group": "Governança", 
        "color": "Orange",
        "text": "Melhorar bem-estar de frangos nos EUA até 2024.", 
        "value": "Improve broiler chicken welfare in the U.S. by 2024 and European chicken commitment by 2026."
      },
      { 
        "group": "Governança", 
        "color": "Orange",
        "text": "Trabalhar com especialistas em bem-estar animal e fornecedores.", 
        "value": "Continue to work with animal welfare experts and suppliers on best practices to eliminate painful procedures and promote sustainable practices."
      }
];

const metaSocial = document.getElementById('social');
const containerAmbiental = document.getElementById('ambiental')
const containerGovernanca = document.getElementById('governanca')

const metasSociais = metas.filter(meta => meta.group === "Social")
const metasAmbientais = metas.filter(meta => meta.group === "Ambiental")
const metasGovernantes = metas.filter(meta => meta.group === "Governança")

console.log(metasAmbientais);

metasSociais.forEach(meta => {
    const randomPercentage = Math.round(Math.random(100)*100);
    const randomPercentageText = randomPercentage.toString();
    const card = document.createElement('div');
    card.classList.add('card');
  
    const cardLink = document.createElement('a');
    cardLink.classList.add('d-flex','gap10', 'align-center')
    cardLink.href = '../pages/relatorio.html'; // Adicione o link desejado aqui.
  
    const cardImage = document.createElement('img');
    cardImage.src = '../assets/images/icon-social.svg';
    cardImage.alt = 'ícone meta social';
  
    const cardContent = document.createElement('div');
    cardContent.classList.add('content-card', 'gap5', 'w-100');
  
    const cardText = document.createElement('p');
    cardText.classList.add('bold', 'text-card', 'color-black');
    cardText.textContent = meta.text;
  
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
  
    const progress = document.createElement('progress');
    progress.style.position = 'relative';
    progress.style.height = '15px';
    progress.style.width = '100%';
    progress.min = 0;
    progress.step = 1;
    progress.max = 100;
    progress.value = randomPercentage;
    progress.classList.add('progress-red');
  
    const progressText = document.createElement('p');
    progressText.classList.add('bold', 'color-black');
    progressText.textContent = randomPercentageText + '%';
  
    progressBar.appendChild(progress);
    progressBar.appendChild(progressText);
  
    cardContent.appendChild(cardText);
    cardContent.appendChild(progressBar);
  
    cardLink.appendChild(cardImage);
    cardLink.appendChild(cardContent);
  
    card.appendChild(cardLink);
  
    metaSocial.appendChild(card);
  });

metasAmbientais.forEach(meta => {
    const randomPercentage = Math.round(Math.random(100)*100);
    const randomPercentageText = randomPercentage.toString();
    const card = document.createElement('div');
    card.classList.add('card');
  
    const cardLink = document.createElement('a');
    cardLink.classList.add('d-flex','gap10', 'align-center')
    cardLink.href = '../pages/relatorio.html'; // Adicione o link desejado aqui.
  
    const cardImage = document.createElement('img');
    cardImage.src = '../assets/images/icon-ambiente.svg';
    cardImage.alt = 'ícone meta ambiental';
  
    const cardContent = document.createElement('div');
    cardContent.classList.add('content-card', 'gap5', 'w-100');
  
    const cardText = document.createElement('p');
    cardText.classList.add('bold', 'text-card', 'color-black');
    cardText.textContent = meta.text;
  
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
  
    const progress = document.createElement('progress');
    progress.style.position = 'relative';
    progress.style.height = '15px';
    progress.style.width = '100%';
    progress.min = 0;
    progress.step = 1;
    progress.max = 100;
    progress.value = randomPercentageText;
    progress.classList.add('progress-green');
  
    const progressText = document.createElement('p');
    progressText.classList.add('bold', 'color-black');
    progressText.textContent = randomPercentageText + '%';
  
    progressBar.appendChild(progress);
    progressBar.appendChild(progressText);
  
    cardContent.appendChild(cardText);
    cardContent.appendChild(progressBar);
  
    cardLink.appendChild(cardImage);
    cardLink.appendChild(cardContent);
  
    card.appendChild(cardLink);
  
    containerAmbiental.appendChild(card);
  });


metasGovernantes.forEach(meta => {
    const randomPercentage = Math.round(Math.random(100)*100);
    const randomPercentageText = randomPercentage.toString();
    const card = document.createElement('div');
    card.classList.add('card');
  
    const cardLink = document.createElement('a');
    cardLink.classList.add('d-flex','gap10', 'align-center')
    cardLink.href = '../pages/relatorio.html'; // Adicione o link desejado aqui.
  
    const cardImage = document.createElement('img');
    cardImage.src = '../assets/images/icon-gov.svg';
    cardImage.alt = 'ícone meta ambiental';
  
    const cardContent = document.createElement('div');
    cardContent.classList.add('content-card', 'gap5', 'w-100');
  
    const cardText = document.createElement('p');
    cardText.classList.add('bold', 'text-card', 'color-black');
    cardText.textContent = meta.text;
  
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
  
    const progress = document.createElement('progress');
    progress.style.position = 'relative';
    progress.style.height = '15px';
    progress.style.width = '100%';
    progress.min = 0;
    progress.step = 1;
    progress.max = 100;
    progress.value = randomPercentage;
    progress.classList.add('progress-yellow');
  
    const progressText = document.createElement('p');
    progressText.classList.add('bold', 'color-black');
    progressText.textContent = randomPercentageText + '%';
  
    progressBar.appendChild(progress);
    progressBar.appendChild(progressText);
  
    cardContent.appendChild(cardText);
    cardContent.appendChild(progressBar);
  
    cardLink.appendChild(cardImage);
    cardLink.appendChild(cardContent);
  
    card.appendChild(cardLink);
  
    containerGovernanca.appendChild(card);
  });