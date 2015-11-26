Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  // This code only runs on the client
  angular.module('simple-todos',['angular-meteor']);

  angular.module('simple-todos').controller('TodosListCtrl', 
    ['$scope', '$meteor', function ($scope, $meteor) {

      var tasksData = function() {
        return Tasks.find({}, { sort: {createdAt: -1 } })
      }

      $scope.tasks = $meteor.collection(tasksData);

      $scope.addTask = function (newTask) {
        $scope.tasks.push( {
               text: newTask,
          createdAt: new Date()
        });
      };

    }]);

}