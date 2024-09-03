const caixaPrincipal = document.querySelector(".Caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-Alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

    const perguntas = [
            {
                enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
                Alternativas: [
                    {
                        texto: "Isso é assustador!",
                       afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
                    },
                    {
                        texto: "Isso é maravilhoso!",
                        afirmacao: "Quis saber como usar IA no seu dia a dia."
                    }
                    
                ]
            },
            {
                enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
                Alternativas: [
                    {
                        texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                        afirmacao: "Justamente por essa relevância toda, é muito comum que pessoas recrutadoras acessem o GitHub em busca de profissionais para vagas de Devs front-end ou back-end."
                    },
                    {
                        texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                        afirmacao:"Além disso, se você gosta de curiosidades, aqui vai uma: em 2019, o pessoal do GitHub esperava chegar a 100 milhões de pessoas usuárias até 2025, mas, na verdade, eles atingiram esse número ainda em 2023. Isso rendeu uma postagem da liderança dessa plataforma."
                    } 
                ]
                   
            },
            {
                enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
                Alternativas: [
                    {
                        texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                        afirmacao: "afirmacao"
                    },
                    {
                        texto:"Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                        afirmacao:"afirmacao"
                    }
                        
                    
                    
                ]
            },
            {
                enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
                Alternativas: [
                    {
                        texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                        afirmacao: "afirmacao"
                    },
                    {
                        texto:"Criar uma imagem utilizando um gerador de imagem de IA.",
                        afirmacao:"afirmacao"
                    }
                
                    
                ]
            },
            {
                enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
                Alternativas: [
                    {
                        texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                        afirmacao: "afirmacao"
                    },
                    {
                        texto:  "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                        afirmacao: "afirmacao"
                    }
                   
                ] 
            },
        ];
        
    
    let atual = 0;
    let perguntaAtual; 
    let historiaFinal = "";

    function mostraPergunta(){
        if(atual >= perguntas.length){
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.textContent = "";
        mostraAlternativas();
    }
    function mostraAlternativas() {
        for (const alternativa of perguntaAtual.Alternativas) {
          const botaoalternativas = document.createElement("button");
          botaoalternativas.textContent = alternativa.texto;
          botaoalternativas.addEventListener("click", () => respostaSelecionada(alternativa));
          caixaAlternativas.appendChild(botaoalternativas);
        }
      }
    
    
      function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
    }

    function mostraResultado(){
        caixaPerguntas.textContent = "Em 2049...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
    }

    mostraPergunta();
