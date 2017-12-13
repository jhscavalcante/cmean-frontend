angular.module('primeiraApp').constant('consts', {
    appName: 'MEAN - Primeira Aplicação',
    version: '1.0',
    owner: 'Cod3r',
    year: '2017',
    site: 'http://cod3r.com.br',
    apiUrl: 'https://cmean-backend.herokuapp.com/api',
    oapiUrl: 'https://cmean-backend.herokuapp.com/oapi', 
    userKey: '_primeira_app_user'
}).run(['$rootScope', 'consts', function ($rootScope, consts) {
    $rootScope.consts = consts
}])