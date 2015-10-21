var todoModule = angular.module('todoModule', [])

todoModule.value('todoListDefault', [{
    todoNote: 'this is a little note',
    done: true,
    id: 'a'
}, {
    todoNote: 'write something and click add todo button or just click enter',
    done: false,
    id: 'b'
}, {
    todoNote: 'click the checkbox and click clean btn',
    done: false,
    id: 'c'
}, {
    todoNote: 'have fun with it',
    done: false,
    id: 'd'
}])

todoModule.controller('todoController', ['$scope', 'todoListDefault', function($scope, todoListDefault) {

    $scope.todoList = localStorage.getItem('todoList') || todoListDefault;

    // if(!localStorage.getItem('todoList')) {
    //     localStorage.setItem('todoList', [])
    // }

    $scope.addTodo = function(todoNote) {
        var tempTodoItem = {
            todoNote: $scope.todoNote,
            done: false,
            id: (Math.random().toFixed(3) + Math.random().toFixed(3)).toString()
        }

        $scope.todoList.push(tempTodoItem)

        // console.log(localStorage.getItem('todoList'));

        $scope.todoNote = ''
    }

    // 获取是否有todo的 done为true, 为了给clean按钮也加个ng-disabled
    // $scope.hasDoneItem = false;
    $scope.ifDoneItem = function() {
        angular.forEach($scope.todoList, function(value, key) {
            if(value.done) {
                return true
            }
        });
    }

    $scope.confessTodoList = [];

    $scope.cleanTodo = function() {
        var oldTodoList = $scope.todoList;
        $scope.todoList = [];
        $scope.confessTodoList = [];

        angular.forEach(oldTodoList, function(todoItem, key) {
            if(!todoItem.done) {
                $scope.todoList.push(todoItem)
            } else {
                $scope.confessTodoList.push(todoItem)
            }
        });
    }

    // click confess btn to recover the deleted 'done todos'
    $scope.confessTodo = function() {
        angular.forEach($scope.confessTodoList, function(value, key) {
            $scope.todoList.push(value)
        });
        $scope.confessTodoList = []
    }
}])
