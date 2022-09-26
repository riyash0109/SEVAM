angular.module('myapp',[])
.controller('ctrldetails',function($scope,$http)
{
    $http.get('http://127.0.0.1:5800/getjsontest')
    .success(function(response)
    {
        $scope.table=response;
    })
    $scope.drop=function(id)
    {
        $http.get('http://127.0.0.1:5800/drop/'+id)
        .success(function(response)
        {
            $http.get('http://127.0.0.1:5800/getjsontest')
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