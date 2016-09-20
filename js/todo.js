var todoApp = angular.module("todoApp", []);
todoApp.controller("todoListController", function($scope){
	var todoList = $scope;
	todoList.todos = [
		{
			text: "Learn Javascript",
			done: false
		},
		{
			text: "Learn Angular",
			done: false
		}
	];
	todoList.addTodo = function(){
		if(todoList.formNewTodo){
			todoList.todos.push({
				text: todoList.formNewTodo,
				done: false
				});
			todoList.formNewTodo = "";
		}
	}
	todoList.archive = function(){
		var oldTodos  = todoList.todos;
		todoList.todos = [];
		angular.forEach(oldTodos, function(todo){
			if(!todo.done){
				todoList.todos.push(todo);
			}
		});
	}
	todoList.remaining = function(){
		var count = 0;
		angular.forEach(todoList.todos, function(todo){
			count += todo.done ? 0 : 1;
		});
		return count;
	}
});