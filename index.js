/*****************************************************
 *                                                   *
 *          TRABALHO DESENVOLVIDO POR:               *
 *             JACKSON & LUIZ SECCO                  * 
 *                                                   *
 *****************************************************/
main();


/**
 * Function inicial do projeto. 
 * Inclui no arquivo principal o template do site
 * posteriormente a isso altera o conteudo HTML da página inserindo 
 * o conteudo para a realização do trabalho.
 */
function main() {
    //quando renderizar o template executa...
    $(document).ready(function () {

        criarMenu();
        criarGaleriaImagens();
        criarHistoriaCurso();
        criarVideoUniversidade();
        criarMercadoTrabalho();
        criarCases();
        criarIntercambio();
        criarVideoIntercambio();
        criarVideoBemVindo();

    });
}

/****************************************************
 *   CONTROLLER PARA INSERIR O CONTEUDO NA PAGINA   *
 ****************************************************/

/**
 * Funcao que incrementa o menu lateral a direita da pagina.
 * Cada slide é identificado como um item do menu
 */
function criarMenu() {

    //Adicionando menu aos slides
    let menu = $(".nav_dots");

    //inicial
    menu[0].classList.add('menu');
    menu[0].innerHTML = "<span>Ciência da Computação</span>";

    //historico
    menu[1].classList.add('menu');
    menu[1].innerHTML = "<span>Histórico do Curso</span>";

    //A UNIVERSIDADE
    menu[2].classList.add('menu');
    menu[2].innerHTML = "<span>Vídeo - A Universidade</span>";

    //MERCADO DE TRABALHO
    menu[3].classList.add('menu');
    menu[3].innerHTML = "<span>Oportunidades - Mercado de Trabalho</span>";

    //CASES
    menu[4].classList.add('menu');
    menu[4].innerHTML = "<span>Cases - Acadêmicos</span>";

    //CASES
    menu[5].classList.add('menu');
    menu[5].innerHTML = "<span>Intercâmbio</span>";

    //VÍDEO INTERCAMBIO
    menu[6].classList.add('menu');
    menu[6].innerHTML = "<span>Vídeo - Intercâmbio</span>";

    //VÍDEO INTERCAMBIO
    menu[7].classList.add('menu');
    menu[7].innerHTML = "<span>Bem-Vindos</span>";

    //VÍDEO INTERCAMBIO
    menu[8].classList.add('menu');
    menu[8].innerHTML = "<span>Imagens - Turmas</span>";

    //SAIBA MAIS
    menu[9].classList.add('menu');
    menu[9].innerHTML = "<span>SAIBA MAIS</span>";
}

/**
 * Function que alimenta as variaveis de topo imgs e imgAtual
 * para controlar a galeria de imagens da pagina
 */
function criarGaleriaImagens() {

    var imgPush = function (imagem, titulo) {
        imgs.push({
            img: imagem,
            titulo: titulo
        });
    }

    imgPush('assets/images/turma-1-ft-1.JPG', 'TURMA 01');
    imgPush('assets/images/turma-1-ft-2.JPG', 'TURMA 01');
    imgPush('assets/images/turma-2-ft-1.JPG', 'TURMA 02');
    imgPush('assets/images/turma-2-ft-2.JPG', 'TURMA 02');
    imgPush('assets/images/turma-3-ft-1.JPG', 'TURMA 03');
    imgPush('assets/images/turma-3-ft-2.JPG', 'TURMA 03');

    document.getElementById("img").src = imgs[0].img;
    document.getElementById("tituloImg").innerHTML = '<span>IMAGENS</span> - ' + imgs[0].titulo;
}

/**
 * Function que cria o conteudo no DOM HTML
 * para a section historico do curso
 */
function criarHistoriaCurso() {
    var section = $("#historico-curso");
    section[0].appendChild(criarTitulo('<span>HISTÓRICO</span> DO CURSO'));
    section[0].appendChild(criarDescricao('No ano de 2011, o Conselho Universitário autorizou o aumento de vagas para o Campus de São Miguel do Oeste com o ingresso da primeira turma em 2012. Receberam outorga de grau até o momento 30 acadêmicos. Atualmente, conta-se com 112 discentes matriculados no curso.'));
    section[0].appendChild(criarDescricao('Desde sua implantação, o curso já promoveu diversos eventos, com a participação de discentes e profissionais da região, tais como Semana de Informática, Encontro OESTI Digital, BootCamp e Seminário de Cases de Sucesso, cursos de formação complementar tais como cursos de programação em Delphi, HTML5, JavaScript, além de visitas e viagens de estudos.'));
    section[0].appendChild(criarDescricao('No ano de 2015, o curso passou pelo processo de reconhecimento do MEC e recebeu a visita dos avaliadores ad-hoc Prof. Ronaldo Augusto de Lara Gonçalves (coordenador) e Profa. Denise Fukumi Tsonoda. Obteve-se conceito final 4.'));
}

/**
 * Function que cria o conteudo no DOM HTML
 * para a section video universidade
 */
function criarVideoUniversidade() {
    var section = $("#video-universidade");
    section[0].appendChild(criarTitulo('<span>VÍDEO</span> - A UNIVERSIDADE'));
    section[0].appendChild(criarIframeYoutube('https://www.youtube.com/embed/pK_lpSNeJXA'));
}

/**
 * Function que cria o conteudo no DOM HTML
 * para a section oportunidades
 */
function criarMercadoTrabalho() {
    var section = $("#oportunidades");
    section[0].appendChild(criarTitulo('<span>OPORTUNIDADES</span> - MERCADO DE TRABALHO'));
    section[0].appendChild(criarDescricao('Um levantamento realizado no primeiro semestre de 2017 mostrou que 72% dos discentes matriculados trabalhavam durante o dia e frequentavam as aulas à noite. Aproximadamente 65% dos discentes trabalhavam em funções diretamente ligadas ao curso e deles 48% começaram a trabalhar depois de ter ingressado no curso. Esses percentuais tendem a mudar no segundo semestre do ano, já que a maioria dos discentes que não trabalhavam era de discentes da primeira fase do curso e ao passar para a segunda muitos poderão ser contratados pelas empresas da região.'));
    section[0].appendChild(criarDescricao('Em torno de 77% dos concluintes atuam em funções diretamente ligadas à sua formação. Três egressos como empreendedores, com suas próprias empresas. Daqueles que trabalham em funções fora da área de formação, um permanece na função que já atuava antes de ingressar no curso; outro que iniciou como estagiário de informática atingiu o cargo de diretor da organização; um está nos Estados Unidos para fazer cursos de aperfeiçoamento/especialização.'));
}

/**
 * Function que cria o conteudo no DOM HTML
 * para a section cases
 */
function criarCases() {
    var section = $("#cases");
    section[0].appendChild(criarTitulo('<span>CASES</span> - ACADÊMICOS'));
    section[0].appendChild(criarDescricao('<b>RAFAEL CHIELLE</b> - <i>Formado - Programador - Sysmo Sistemas</i><br>Ótimo curso, possui tutores qualificados para o ensino da grade curricular e para atender as dúvidas dos acadêmicos. O curso conta também com várias oportunidades para o ingresso ao mercado de trabalho.'));
    section[0].appendChild(criarDescricao('<b>DOUGLAS JULIANO RONALDO</b> - <i>Formado - TI - UNOESC</i><br>Sou Douglas Juliano Roldo me formei em 2017 em Ciência da Computação, pela Unoesc São Miguel, o curso me apresentou um leque de oportunidades, onde estudei várias áreas da computação. O curso me ajudou profissionalmente e tecnicamente, os professores são além docentes são meus amigos até hoje, posso dizer que o curso mudou a minha vida, pois o aprendizado foi de grande valia.'));
    section[0].appendChild(criarDescricao('<b>LUCAS MOREIRA</b> - <i>Formado - Programador - Sysmo Sistemas</i><br>O curso de ciência da computação da Unoesc campus São Miguel do Oeste oferece uma grande quantidade de oportunidades mensais para trabalhar nas empresas da região.'));
}

/**
 * Function que cria o conteudo no DOM HTML
 * para a section intercambio
 */
function criarIntercambio() {
    var section = $("#intercambio");
    section[0].appendChild(criarTitulo('<span>INTERCAMBIO</span> - MOBILIDADE ACADÊMICA'));
    section[0].appendChild(criarDescricao('No que se refira à mobilidade acadêmica, em 2015, um discente participou do Programa de Mobilidade no Instituto Politécnico de Setúbal em Portugal. Em 2017, um outro realizou um intercâmbio na Universidad de La Cuenca Del Plata, em Formosa, na Argentina. De outro lado, da Universidad Autónoma de Chihuahua do México que cursou um semestre como intercambista.'));
}

/**
 * Function que cria o conteudo no DOM HTML
 * para a section video intercambio
 */
function criarVideoIntercambio() {
    var section = $("#video-intercambio");
    section[0].appendChild(criarTitulo('<span>VÍDEO</span> - A INTERCAMBIO'));
    section[0].appendChild(criarIframeYoutube('https://www.youtube.com/embed/xcaQKhr3fao'));
}

/**
 * Function que cria o conteudo no DOM HTML
 * para a section video bem vindo
 */
function criarVideoBemVindo() {
    var section = $("#video-bemvindo");
    section[0].appendChild(criarTitulo('<span>VÍDEO</span> - BEM VINDOS (BIXOS 2017)'));
    section[0].appendChild(criarIframeYoutube('https://www.youtube.com/embed/RkPhZ3VLYUU'));
}





/****************************************************
 *       CONTROLLER PARA A GALERIA DE IMAGENS       *
 ****************************************************/

//Array com galeria de imagens das turmas
var imgs = [];

//variavel que controla a imagem da turma atual;
var imgAtual = 0;

/**
 * Funcao que altera a imagem atual da galeria
 * buscando a proxima imagem
 */
function proxImg() {
    imgAtual = (imgAtual + 1) == imgs.length ? 0 : (imgAtual + 1);
    document.getElementById("img").src = imgs[imgAtual].img;
    document.getElementById("tituloImg").innerHTML = '<span>IMAGENS</span> - ' + imgs[imgAtual].titulo;
}

/**
 * Funcao que altera a imagem da galeria
 * busnaco a imagem anterior
 */
function anteriorImg() {
    imgAtual = (imgAtual - 1) == -1 ? (imgs.length - 1) : (imgAtual - 1);
    document.getElementById("img").src = imgs[imgAtual].img;
    document.getElementById("tituloImg").innerHTML = '<span>IMAGENS</span> - ' + imgs[imgAtual].titulo;
}





/****************************************************
 *       CONTROLLER PARA FUNCOES UTILITARIAS        *
 ****************************************************/

/**
 * Function utilitaria que cria um elemento H1 
 * para inserir no DOM HTML da pagina
 * 
 * @param descricao 
 */
function criarTitulo(descricao) {
    var titulo = document.createElement('h1');
    titulo.classList.add('titulo');
    titulo.innerHTML = descricao;
    return titulo;
}

/**
 * Function utilitaria que cria um elemento p 
 * para inserir no DOM HTML da pagina
 * 
 * @param descricao 
 */
function criarDescricao(descricao) {
    var pDescricao = document.createElement('p');
    pDescricao.classList.add('descricao-conteudo');
    pDescricao.innerHTML = descricao;
    return pDescricao;
}

/**
 * Function utilitaria que cria um elemento iframe 
 * para inserir no DOM HTML da pagina
 * 
 * @param url 
 */
function criarIframeYoutube(url) {
    var iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = 450;
    iframe.src = url;
    iframe.frameborder = 0;
    iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowfullscreen = true;

    var descricao = criarDescricao('');
    descricao.appendChild(iframe);
    return descricao;
}