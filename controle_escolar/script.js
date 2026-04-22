const alunos = []

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // entrada dos dados

    const nome = document.getElementById("nome").value
    const idade = document.getElementById("idade").value
    const nota = document.getElementById("nota").value

    const idadeNumero = parseInt(idade);
    const notaNumero = parseFloat(nota);

    const mensagem = document.getElementById("mensagem");

    // validação dos dados

    mensagem.innerText = ""
    if (nome.trim() === "") {
        mensagem.innerText = "Nome obrigatório!"
        return
    }

    if (isNaN(idadeNumero) || idadeNumero <= 0) {
        mensagem.innerText = "Idade inválida!"
        return
    }

    if (isNaN(notaNumero) || notaNumero < 0 || notaNumero > 10) {
        mensagem.innerText = "Nota inválida!"
        return
    }   

    //objeto do aluno

    const aluno = {
        nome,
        idade: idadeNumero,
        nota: notaNumero
    }

    alunos.push(aluno)
 
    renderizarLista()

    document.getElementById("nome").value = ""
    document.getElementById("idade").value = ""
    document.getElementById("nota").value = ""
})


function renderizarLista() {
        const lista = document.getElementById("lista-alunos")

        lista.innerHTML = ""

        alunos.forEach((aluno, index) => {
            const divAluno = document.createElement("div")

            divAluno.classList.add("aluno")

            let status = ""
            let classeStatus = ""

            if(aluno.nota >= 6){
                status = "Aprovado"
                classeStatus = "status-aprovado"
            } else {
                status = "Reprovado"
                classeStatus = "status-reprovado"
            }

            divAluno.innerHTML = `
                <p><strong>Nome: </strong>${aluno.nome}</p>
                <p><strong>Idade: </strong>${aluno.idade}</p>
                <p><strong>Nota: </strong>${aluno.nota}</p>
                <p class="${classeStatus}"><strong>Status: </strong>${status}</p>
            `
            
            lista.appendChild(divAluno)

            const botaoRemover = document.createElement("button")

            botaoRemover.innerText = "Remover"
            botaoRemover.classList.add("btn-remover")

            botaoRemover.addEventListener("click", () => {
                alunos.splice(index, 1)
                renderizarLista()
            })

            const botaoDetalhes = document.createElement("button")

            botaoDetalhes.innerText = "Detalhes"
            botaoDetalhes.classList.add("btn-detalhes")

            botaoDetalhes.addEventListener("click", () => {

                let status = ""

                if(aluno.nota >= 6) {
                    status = "Aprovado"
                } else {
                    status = "Reprovado"
                }

                alert(
                    "--- DETALHES DO ALUNO ---\n\n" +
                    "Nome: " + aluno.nome +
                    "\nIdade: " + aluno.idade +
                    "\nNota: " + aluno.nota +
                    "\nStatus: " + status
                )
            })

            divAluno.appendChild(botaoRemover)
            divAluno.appendChild(botaoDetalhes)

            atualizarEstatisticas()

        })
    }


function atualizarEstatisticas() {
        const total = alunos.length

        let somaNotas = 0
        let aprovados = 0
        let reprovados = 0

        alunos.forEach((aluno) => {
            somaNotas += aluno.nota

            if (aluno.nota >= 6) {
                aprovados++
            } else {
                reprovados++
            }
        })

        let media = 0
         
        if (total > 0) {
            media = somaNotas / total
        }
        document.getElementById("total").innerText = total
        document.getElementById("media").innerText = media.toFixed(2)
        document.getElementById("aprovados").innerText = aprovados
        document.getElementById("reprovados").innerText = reprovados
}

const form = document.getElementById("form-aluno")