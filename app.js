(function(){
'use strict'
  angular.module('webapp',[])
  .controller('webappcontroller',webappcontroller);
  webappcontroller.$inject = ['$scope'];
  function webappcontroller($scope){
    $scope.name = "";
    var menu_order = $scope.name;
    var menu_split = menu_order.split(',');
    var count_item=0;
    $scope.count=count_item;
    $scope.blur = function(){
      var menu_order = $scope.name;
      var menu_split = menu_order.split(',');
      for(var i=0;i<=menu_split.length;i++){
        if(menu_split[i]!=" "&&menu_split[i]!=null)
        count_item++;
      }
      if(count_item <= 3)
      {
        $scope.text= "enjoy!";
      }
      else
      {
        $scope.text= "Alex Nguyen";
      }
      $scope.count=count_item;
      count_item=0;

    };
  }
})();
