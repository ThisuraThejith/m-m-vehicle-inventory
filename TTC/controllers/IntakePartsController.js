
app.controller("IntakePartsController", function ($scope, $http) {


    $scope.intakeParts = function () {
        var newPart = {
            date: $scope.intake_date,
            code:$scope.code,
            PurchaseUnitPrice:$scope.purchaseunitprice,
            SellingUnitPrice:$scope.sellingunitprice,
            amount:$scope.amount
        };

        //if (newPart.date != '' && newPart.code != null && newPart.purchaseunitprice != null&& newPart.sellingunitprice != null&& newPart.amount != null) {
            $http.post("http://localhost:8082/api/inventory/intake", newPart).then(function (response) {
                alert("Part Intaked Successfully!");
                $scope.resetParts();
            }, function (response) {
                alert("Part Intaking Failed !")
            });
        //} else {
           alert("Inputs are not valid !");
        //}
    };

    $scope.resetParts = function(){
        $scope.intake_date = 'mm/dd/yyyy';
        $scope.code = '';
        $scope.purchaseunitprice = '';
        $scope.sellingunitprice = '';
        $scope.amount = '';
    };

});