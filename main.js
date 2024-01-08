let valorId = 0;

$(document).ready(function(){
    $('#comecar').click(function(){
        $('form').slideDown();
    })

    $('#cancelar').click(function(){
        $('form').slideUp();
    })

    $('#cadastrar').on("click", function(e){
        var descricao = $("#descricao").val();
        var prioridade = $("#prioridade").val();

        if(descricao === ""){
            alert("Você precisa colocar uma Descrição!");
        }else{
            valorId++;

            const incrementacao = `<div id="${valorId}" class="tarefas">
                                    <div>
                                        <h3>${descricao}</h3> 
                                        <p>${prioridade}</p>
                                        <button type="button" onclick="concluir(${valorId})">Concluir</button>
                                    </div>
                                </div>`
                
            $("#escopo").append(incrementacao);
            $('form').slideUp();
            $("#descricao").val("");
            $("#prioridade").val("");
        }
    })
})
let tarefa = document.getElementById("descricao");

function concluir(id){
    document.getElementById(`${id}`).remove();
}


