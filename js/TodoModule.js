var todoModule = angular.module('todoModule', [])

todoModule.controller('todoController', ['$scope', function($scope) {

    $scope.todoList = [{
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
    }];

    $scope.addTodo = function(todoNote) {
        $scope.todoList.push({
            todoNote: $scope.todoNote,
            done: false,
            id: Math.random().toFixed('3').toString()
        })
        $scope.hasDoneItem = true
        $scope.todoNote = '';
    }

    $scope.ifHasDone = false;
    // 获取是否有todo的 done为true, 为了给clean按钮也加个ng-disabled
    // $scope.hasDoneItem = false;
    $scope.ifDoneItem = function() {
        angular.forEach($scope.todoList, function(value, key) {
            if(value.done) {
                return true
            }
        });

        // if($scope.hasDoneItem == false) {
        //     console.log('没有完成的项');
        // }
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
