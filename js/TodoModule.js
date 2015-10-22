(function() {

    var todoModule = angular.module('todoModule', ['ngAnimate'])

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

        // notice that localStorage store in 'string'
        $scope.todoList = JSON.parse(localStorage.getItem('todoList')) || todoListDefault;

        $scope.addTodo = function(todoNote) {
            var tempTodoItem = {
                todoNote: $scope.todoNote,
                done: false,
                id: (Math.random().toFixed(3) + Math.random().toFixed(3)).toString()
            }

            $scope.todoList.push(tempTodoItem)

            $scope.todoNote = ''
        }

        // 获取是否有todo的 done为true, 为了给clean按钮也加个ng - disabled
        // $scope.$watch('todoList', function(newValue, oldValue) {
        //     angular.forEach(newValue, function(value, key) {
        //         if(value.done == true) {
        //             $scope.hasDone = true;
        //         }
        //     });
        // }, true)

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

            // using ES5 Array.filter, great
            // $scope.todoList = $scope.todoList.filter(function(item) {
            //     return !item.done
            // });
        }

        // click confess btn to recover the deleted 'done todos'
        $scope.confessTodo = function() {
            angular.forEach($scope.confessTodoList, function(value, key) {
                $scope.todoList.push(value)
            });
            $scope.confessTodoList = []
        }

        // add a $watch, notice localStorage store 'string'
        $scope.$watch('todoList', function(newValue, oldValue) {
            if(newValue != oldValue) {
                localStorage.setItem('todoList', JSON.stringify(newValue))
            }
        }, true)
    }])

})()
