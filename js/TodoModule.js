var todoModule = angular.module('todoModule', [])

todoModule.controller('todoController', ['$scope', function($scope) {

    $scope.todoList = [{
        todoNote: 'hello world',
        'done': true
    }, {
        todoNote: 'hello cc',
        'done': false
    }, {
        todoNote: 'hello zy',
        'done': false
    }, {
        todoNote: 'hello qq',
        'done': false
    }];

    $scope.addTodo = function(todoNote) {
        console.log(todoNote)

        $scope.todoList.push({
            todoNote: $scope.todoNote,
            done: false
        })
    }
}])
