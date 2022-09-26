angular.module('myapp',[])
.controller('ctrldetails',function($scope,$http)
{
    $http.get('http://127.0.0.1:5800/getjsonag')
    .success(function(response)
    {
        $scope.table=response;
    })
    $scope.dropagent=function(id)
    {
        $http.get('http://127.0.0.1:5800/dropagent/'+id)
        .success(function(response)
        {
            $http.get('http://127.0.0.1:5800/getjsonag')
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