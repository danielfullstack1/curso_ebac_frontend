$(document).ready(function() {
    // Ao submeter o formulário
    $("#task-form").submit(function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        
        // Recupera o nome da tarefa do campo de entrada
        var taskName = $("#task-name").val();

        // Adiciona a tarefa à lista
        if (taskName) {
            $("#task-list").append("<li>" + taskName + "</li>");
            $("#task-name").val(""); // Limpa o campo de entrada após adicionar a tarefa
        }
    });

    // Ao clicar nas tarefas da lista
    $("#task-list").on("click", "li", function() {
        $(this).css("text-decoration", "line-through"); // Aplica o risco no texto
    });
});
