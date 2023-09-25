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

jSuites.dropdown(document.getElementById('dropdown'), {
    data: metas,
    autocomplete: true,
    multiple: true,
    width: '400px',
});

