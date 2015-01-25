$(document).ready(function() {
    bindEvents();
});


function bindEvents() {
    $("form").on("submit", addTodo)

}

function buildTodo(todoName) {
    // gets todoTemplate stored in DOM.
    var todoTemplate = $.trim($('#todo_template').html());
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
}

function addTodo() {
    event.preventDefault();
    var $target = $(event.target) // which equals $(this) jquery object
    $.ajax({
        type: $target.attr("method"),
        url: $target.attr("action"),
        dataType: "json",
        data: $target.serialize()
    }).done(function(serverResponse) {
        $(".todo_list").append(buildTodo(serverResponse.todo_content))
    })
};