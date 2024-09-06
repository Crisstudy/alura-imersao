//console.log(dados);

let section = document.getElementById("resultados-pesquisa")
console.log(section);

//para cada dado dentro da lista de dados
for (let dado of dados)

section.innerHTML = `
<div class="item-resultado">
        <h2>
            <a href="#" target="_blank">${dados[0].titulo}</a>
        </h2>
        <p class="descricao-meta">Nelson Piquet: Um Ícone do Automobilismo Brasileiro
        Nelson Piquet é um nome que ecoa na história do automobilismo mundial. Tricampeão mundial de Fórmula 1, o brasileiro conquistou o esporte com sua habilidade, determinação e estilo único. Sua rivalidade com Ayrton Senna marcou uma época e elevou o automobilismo brasileiro a um patamar internacional. Além dos títulos, Piquet é lembrado por suas corridas emocionantes, ultrapassagens arriscadas e um talento inegável ao volante. Sua trajetória inspirou gerações de pilotos e consolidou seu lugar entre os maiores nomes da Fórmula 1.</p><a href="https://pt.wikipedia.org/wiki/Nelson_Piquet"  target="_blank">Mais informações</a>
</div>
`