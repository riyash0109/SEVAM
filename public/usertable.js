angular.module('myapp',[])
.controller('ctrldetails',function($scope,$http)
{
    $http.get('http://127.0.0.1:5800/getusertable')
    .success(function(response)
    {
        $scope.table=response;
    })
    $scope.cancel=function(id)
    {
        $http.get('http://127.0.0.1:5800/cancel/'+id)
        .success(function(response)
        {
            $http.get('http://127.0.0.1:5800/getusertable')
            .success(function(response)
             {
                     $scope.table=response;
                })
        })
    }

    // $scope.pending=function(id)
    // {
    //     $http.get('http://127.0.0.1:5800/pending/'+id)
    //     .success(function(response)
    //     {
    //         $http.get('http://127.0.0.1:5800/getjsontoday')
    //         .success(function(response)
    //          {
    //                  $scope.table=response;
    //             })
    //     })
    // }
})