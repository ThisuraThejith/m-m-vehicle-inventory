

app.controller("AddPartsController",function ($scope,$http){

    $scope.addParts = function () {
        var newPart = {
            name: $scope.name,
            description:$scope.description,
            category:$scope.category,
            code:$scope.code
        };

        if (newPart.code != null && newPart.name != null && newPart.category != null&& newPart.description != null) {
            $http.post("http://localhost:8082/api/inventory", newPart).then(function (response) {
                alert("New Part Added Successfully!");
                $scope.resetParts();
            }, function (response) {
                alert("New Part Adding Failed !")
            });
        } else {
            alert("Inputs are not valid !");
        }
    };

    $scope.resetParts = function(){
        $scope.name = '';
        $scope.description = '';
        $scope.category = '';
        $scope.code = '';
    };

});