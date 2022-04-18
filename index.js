const cidades = [
    { nome: 'Patos de Minas', populacao: 153585 },
    { nome: 'Lages', populacao: 157349 },
    { nome: 'Ibiúna', populacao: 79479 },
    { nome: 'Maringá', populacao: 403063 },
    { nome: 'Curitiba', populacao: 1963726 },
    { nome: 'Florianópolis', populacao: 508826 },
    { nome: 'Pato Branco', populacao: 84779 },
];
/*metodo .filter filtra o array de objetos cidades, e retorna um novo array de objeto cidade com a propriedade populacao for igual ou maior que 200000 duzentos mil*/
let maioresCidades = cidades.filter(cidade => cidade.populacao > 200000)

/*método .sort retorna um novo array com as propriedades ordenadas de forma descendente o resultado da variavel maioresCidades */
let ordemDecrescente = maioresCidades.sort((c1, c2) => c2.populacao - c1.populacao)

