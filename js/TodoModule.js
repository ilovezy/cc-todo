var todoModule = angular.module('todoModule', [])

todoModule.controller('todoController', ['$scope', function($scope) {

    $scope.todoList = [{
        todoNote: 'helloworld',
        done: true,
        id: 'a'
    }, {
        todoNote: 'hellocc',
        done: false,
        id: 'b'
    }, {
        todoNote: 'hellozy',
        done: false,
        id: 'c'
    }, {
        todoNote: 'helloqq',
        done: false,
        id: 'd'
    }];

    $scope.addTodo = function(todoNote) {
        $scope.todoList.push({
            todoNote: $scope.todoNote,
            done: false,
            id: Math.random().toFixed('3').toString()
        })

        $scope.todoNote = '';
    }

    $scope.cleanTodo = function() {
        var oldTodoList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldTodoList, function(todoItem, key) {
            if(!todoItem.done) {
                $scope.todoList.push(todoItem)
            }
        });
    }
}])
