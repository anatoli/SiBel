angular.module('siBelApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/')
    $stateProvider
      .state('root',{
        url: '',
        abstract: true,
        views: {
          'header': {
            templateUrl: 'views/header.html',
            controller: 'HeaderCtrl'
          },
          'footer':{
            templateUrl: '/views/footer.html',
            controller: 'FooterCtrl'
          }
          // 'sidebar':{
          //   templateUrl: 'views/layouts/sidebar.html',
          //   controller: 'SidebarCtrl'
          // }
        }
      })


      .state('root.main',{
        url: '/',
        views: {
          'container@': {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
          }
        }
      })

      // .state('root.profile.userAdd', {
      //   url: '/usersAdd',
      //   ncyBreadcrumb: {
      //     label: "Добавить пользователя",
      //     skip: true
      //   },
      //   views: {
      //     'container@': {
      //       templateUrl: '/views/userAdd.html',
      //       controller:  'MainCtrl'
      //     }
      //   }
      // })
      // .state('root.profile.users', {
      //   url: '/users',
      //   ncyBreadcrumb: {
      //     label: "Пользователи",
      //     skip: true
      //   },
      //   views: {
      //     'container@': {
      //       templateUrl: '/views/users.html',
      //       controller:  'UsersCtrl'
      //     }
      //   }
      // })
      //
      // .state('root.paintings', {
      //   url: '/paintings',
      //   ncyBreadcrumb: {
      //     label: "Материалы-полотна",
      //     skip: true
      //   },
      //   views: {
      //     'container@': {
      //       templateUrl: '/views/paintings.html',
      //       controller:  'PaintingsCtrl'
      //     }
      //   }
      // })
      //
      // .state('root.accessories', {
      //   url: '/accessories',
      //   ncyBreadcrumb: {
      //     label: "Материалы-комплектующие",
      //     skip: true
      //   },
      //   views: {
      //     'container@': {
      //       templateUrl: '/views/accessories.html',
      //       controller:  'AccessoriesCtrl'
      //     }
      //   }
      // })
      //
      // .state('root.dealers', {
      //   url: '/dealers',
      //   ncyBreadcrumb: {
      //     label: "Дилеры",
      //     skip: true
      //   },
      //   views: {
      //     'container@': {
      //       templateUrl: '/views/dealers.html',
      //       controller:  'DealersCtrl'
      //     }
      //   }
      // })
      //
      // .state('root.materialAdd', {
      //   url: '/materialAdd',
      //   ncyBreadcrumb: {
      //     label: "Добавить новый материал",
      //     skip: true
      //   },
      //   views: {
      //     'container@': {
      //       templateUrl: '/views/materialAdd.html',
      //       controller:  'MaterialCtrl'
      //     }
      //   }
      // })
      // .state('root.info', {
      //   url: '/info',
      //   ncyBreadcrumb: {
      //     label: "Полезная информация",
      //     skip: true
      //   },
      //   views: {
      //     'container@': {
      //       templateUrl: '/views/info.html',
      //       controller:  'InfoCtrl'
      //     }
      //   }
      // })


  });

