/*
 * @Author: ccHotaru
 * @Date:   2015-10-21 11:50:16
 * @Last Modified by:   ccHotaru
 * @Last Modified time: 2015-10-21 13:14:33
 */

'use strict';

var TodoModule = angular.module('TodoModule', [])

TodoModule.controller('TodoCtrl', ['$scope', function($scope) {

    var defaultTodos = [{
        text: 'learn angular js',
        done: false
    }, {
        text: 'make a little todo sample',
        done: false
    }, {
        text: 'learn angular js',
        done: false
    }]

    $scope.todos = defaultTodos

    // $scope.totalTodos = $scope.todos.length
    $scope.getTotalTodos = function() {
        return $scope.todos.length
    }

    $scope.cleanCompletedTodo = function() {
        var oldTodos = $scope.todos
        $scope.todos = []

        angular.forEach(oldTodos, function(value, key) {
            if(!value.done) {
                $scope.todos.push(value)
            }
        })
    }

    $scope.addTodo = function() {
        $scope.todos.push({
            text: $scope.formTodoText,
            done: false
        })

        $scope.formTodoText = ''
    }
}])
