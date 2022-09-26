angular.module('myapp',[])
.controller('ctrldetails',function($scope,$http)
{
    $http.get('http://127.0.0.1:5800/getpatient')
    .success(function(response)
    {
        $scope.table=response;
    })
    $scope.drop_patient=function(id)
    {
        $http.get('http://127.0.0.1:5800/drop_patient/'+id)
        .success(function(response)
        {
            $http.get('http://127.0.0.1:5800/getpatient')
            .success(function(response)
             {
                     $scope.table=response;
                })
        })
    }

    // $scope.reject=function(id)
    // {
    //     $http.get('http://127.0.0.1:5800/reject/'+id)
    //     .success(function(response)
    //     {
    //         $http.get('http://127.0.0.1:5800/getjson')
    //         .success(function(response)
    //          {
    //                  $scope.table=response;
    //             })
    //     })
    // }
})