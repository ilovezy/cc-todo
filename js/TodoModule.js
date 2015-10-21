var todoModule = angular.module('todoModule', [])

todoModule.controller('todoController', ['$scope', function($scope) {

    $scope.todoList = [{
        todoNote: 'helloworld',
        done: true
    }, {
        todoNote: 'hellocc',
        done: false
    }, {
        todoNote: 'hellozy',
        done: false
    }, {
        todoNote: 'helloqq',
        done: false
    }];

    $scope.addTodo = function(todoNote) {
        $scope.todoList.push({
            todoNote: $scope.todoNote,
            done: false
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
