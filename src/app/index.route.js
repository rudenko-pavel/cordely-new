(function() {
  'use strict';

  angular
    .module('running')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'app/views/projects/projects.html',
        controller: 'ProjectsController',
        controllerAs: 'projects'
      })
      .state('services', {
        url: '/services',
        templateUrl: 'app/views/services/services.html',
        controller: 'ServicesController',
        controllerAs: 'services'
      })
      .state('customs', {
        url: '/services/customs',
        templateUrl: 'app/views/services/customs/customs.html',
        controller: 'CustomController',
        controllerAs: 'customs'
      })
      .state('consultations', {
        url: '/services/consultations',
        templateUrl: 'app/views/services/consultations/consultations.html',
        controller: 'ConsultationController',
        controllerAs: 'consultations'
      })
      .state('logistics', {
        url: '/services/logistics',
        templateUrl: 'app/views/services/logistics/logistics.html',
        controller: 'LogisticsController',
        controllerAs: 'logistics'
      })
      .state('doortodoor', {
        url: '/services/doortodoor',
        templateUrl: 'app/views/services/doortodoor/doortodoor.html',
        controller: 'DoortodoorController',
        controllerAs: 'doortodoor'
      })
      .state('privateclients', {
        url: '/services/privateclients',
        templateUrl: 'app/views/services/privateclients/privateclients.html',
        controller: 'PrivateclientsController',
        controllerAs: 'privateclients'
      })
      .state('carriages', {
        url: '/carriages',
        templateUrl: 'app/views/carriages/carriages.html',
        controller: 'CarriagesController',
        controllerAs: 'carriages'
      })
      .state('auto', {
        url: '/carriages/auto',
        templateUrl: 'app/views/carriages/auto/auto.html',
        controller: 'AutoController',
        controllerAs: 'auto'
      })
      .state('railway', {
        url: '/carriages/railway',
        templateUrl: 'app/views/carriages/railway/railway.html',
        controller: 'RailwayController',
        controllerAs: 'railway'
      })
      .state('air', {
        url: '/carriages/air',
        templateUrl: 'app/views/carriages/air/air.html',
        controller: 'AirController',
        controllerAs: 'air'
      })
      .state('sea', {
        url: '/carriages/sea',
        templateUrl: 'app/views/carriages/sea/sea.html',
        controller: 'SeaController',
        controllerAs: 'sea'
      })
      .state('multimodal', {
        url: '/carriages/multimodal',
        templateUrl: 'app/views/carriages/multimodal/multimodal.html',
        controller: 'MultimodalController',
        controllerAs: 'multimodal'
      })
      .state('sectional', {
        url: '/carriages/sectional',
        templateUrl: 'app/views/carriages/sectional/sectional.html',
        controller: 'SectionalController',
        controllerAs: 'sectional'
      })
      .state('contacts', {
        url: '/contacts',
        templateUrl: 'app/views/contacts/contacts.html',
        controller: 'ContactsController',
        controllerAs: 'contacts'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
