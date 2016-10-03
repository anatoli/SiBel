angular.module('siBelApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'pascalprecht.translate'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    "use strict";
    $urlRouterProvider.otherwise('/');
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

      .state('root.404',{
        url: '/sorry',
        views: {
          'container@': {
            templateUrl: 'views/404.html',
            controller: 'ErrorCtrl'
          }
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

      .state('root.company', {
        url: '/company',
        views: {
          'container@': {
            templateUrl: '/views/company.html',
            controller:  'CompanyCtrl'
          }
        }
      })

      .state('root.projects', {
        url: '/projects',
        views: {
          'container@': {
            templateUrl: '/views/projects.html',
            controller:  'ProjectsCtrl'
          }
        }
      });
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


  })
  .config(function ($translateProvider) {

    "use strict";
  // $translateProvider.preferredLanguage('ru');
    $translateProvider.fallbackLanguage('ru');
    $translateProvider.determinePreferredLanguage();
  $translateProvider.translations('ru', {
    HOME:{
     TITLE:'ИТ — наше  призвание',
     ROW_1_TITLE:'Решения для бизнеса',
     ROW_1:'Эффективное управление и минимизация человеческого фактора',
     ROW_1_BTN:'Подробнее',
     ROW_2_TITLE:'Телекомммуникации',
     ROW_2:'Внедрение и разработка ПО для операторов мобильной связи',
     ROW_2_BTN:'Ознакомиться',
     ROW_3_TITLE:'ИТ-услуги',
     ROW_3:'ИТ-инфраструктура: модернизация и обслуживание в режиме 24/7',
     ROW_3_BTN:'Узнать детали',
    },
    SLIDER:{
      BTN_1:'Подробнее',
      BTN_2:'Отправить запрос',
      Slide_1_Title_1:'Программное решение',
      Slide_1_Title_2:'для бизнеса',
      Slide_1_li:{
        1:"Автоматизация бизнес-процессов",
        2:"Учет и контроль бизнес-решений",
        3:"Актуализация информации о состоянии  дел предприятия",
        4:"Аналитика бизнес-данных",
      },
      Slide_2_Title_1:'ПО для мобильных',
      Slide_2_Title_2:'операторов',
      Slide_2_li:{
        1:"Подготовка данных для выставления счетов",
        2:"Защита от мошенничества",
        3:"Активация услуг, предоставляемых мобильным оператором",
      },
      Slide_3_Title_1:'Опора для бизнеса',
      Slide_3_li:{
        1:"ИТ-аудит инфраструктуры",
        2:"Обслуживание и поддержка",
        3:"Создание корпоративных сетей",
        4:"Мониторинг информационной системы",
      }

    },
    Company:{
      TITLE:'Наша компания',
      Name:'Евгений Петрушин',
      Name_description_1:'Директор по ',
      Name_description_2:'системной интеграции',
      Comments:"Компания «СиБел» входит в структуру многопрофильного холдинга «БелХард» и за 10 лет успешной деятельности в сфере системной интеграции достигла признания среди клиентов, вендеров и коллег.  Наши стремления в продвижении собственных ИТ-решений и услуг для белорусского бизнеса...",
      Btn_1:'Подробнее',
      Btn_2:'Приглашаем в команду'
    },
    Ideas:{
      imgHeader_1:'Разработка',
      imgHeader_2:'Системное решение для нотариата',
      Title:'Реализованные проекты и передовые идеи говорят за наc',
      Description_1:'Компания «СиБел» специализируется на предоставлении  прикладных услуг в сфере высоких технологий.',
      Description_2:'ЕИС нотариата Беларуси предназначена для автоматизации поиска, получения, передачи, сбора, обработки, накопления, хранения, распространения информации о нотариальной деятельности...',
      Btn_1:'Подробнее',
      Btn_2:'Показать все',
    },
    Vendors:{
      Title:'Наши вендеры'
    },
    Questions:{
      Title:'Остались вопросы?',
      Row_1_Title_1:'Напишите нам,',
      Row_1_Title_2:'и мы обязательно свяжемся с вами',
      Row_2_Title:'Или позвоните нам',
      Btn_1:'Отправить запрос',
      Btn_2:'Заказать звонок'
    },
    Error:{
      Title_1:'Мы работаем над новой версией сайта.',
      Title_2:'Вы увидите его совсем скоро. Приносим свои извинения.',
      Title_Color:'Уведомление об открытии',
      Descriptions_1:'Хотите узнать о публикации сайта? Укажите ваш e-mail,',
      Descriptions_2:'и мы обязательно сообщим вам. Мы меняемся для вас!',
      Btn:'Получить уведомление'
    },
    Modal:{
      Header:{
        1:'Запрос',
        2:'Резюме',
        3:'Заказать звонок'
      },
      Title:{
        11:'Заполните форму, отправьте, ',
        12:'и мы свяжемся в удобное для вас время ',
        21:'Хотите присоединиться к команде «СиБел&» ? ',
        22:'Заполните форму, пришлите резюме,',
        23:'и мы свяжемся с вами',
        31:'Заполните форму, отправьте, ',
        32:'и мы свяжемся с вами для консультации'
      },
      Btn_file:'Прикрепить файл',
      Btn_push:'Отправить',
      Description_1:'Размер файла не должен превышать 5 Мб',
      Description_2:"* — поля, обязательные для заполнения",
      Name_plh:"Имя, фамилия*",
      Phone_plh:"Телефон*",
      Datetime_plh:"Время и дата",
      Company_plh:"Организация, должность",
      Area_plh:"Интересующее решение или услуга",
      Select:{
        Title:"-Выберите, направление-",
        1:"Разработка мобильных приложений",
        2:"Исследования в области матанализа",
      },


    }
  });
    $translateProvider.translations('by', {
      HOME:{
        TITLE:'ІТ - наша прызванне',
        ROW_1_TITLE:'Рашэнні для бізнесу',
        ROW_1:'Эфектыўнае кіраванне бізнес-працэсамі і мінімізацыя чалавечага фактару',
        ROW_1_BTN:'Падрабязней',
        ROW_2_TITLE:'Тэлекамунікацыя',
        ROW_2:'Укараненне праектаў і распрацоўка праграмнага забеспячэння для аператараў мабільнай сувязі',
        ROW_2_BTN:'Даведацца',
        ROW_3_TITLE:'ІТ-паслугі',
        ROW_3:'Стварэнне і мадэрнізацыя ІТ-інфраструктуры з падтрымкай 24/7',
        ROW_3_BTN:'Дэталёва',
      },
      SLIDER:{
        BTN_1:'Падрабязней',
        BTN_2:'Адправіць запрос',
        Slide_1_Title_1:'Праграмнае рашэнне',
        Slide_1_Title_2:'для бізнесу',
        Slide_1_li:{
          1:"Аўтаматызацыя бізнес-працэсаў",
          2:"Улік і кантроль бізнес-рашэнняў",
          3:"Актуальная інфармацыя пра становішча спраў прадпрыемства",
          4:"Анілітыка бізнес-данных",
        },
        Slide_2_Title_1:'ПЗ для аператараў',
        Slide_2_Title_2:'мабільнай сувязі',
        Slide_2_li:{
          1:"Падрыхтоўка дадзеных, каб выставіць рахунак ",
          2:"Ахова ад махлярства",
          3:"Актывацыя паслуг ад аператара мабільнай сувязі",
        },
        Slide_3_Title_1:'Апора для бізнесу',
        Slide_3_li:{
          1:"ІТ-аудыт інфраструктуры",
          2:"Абслугоўванне і падтрымка інфраструктуры",
          3:"Стварэнне карпаратыўных сетак",
          4:"Маніторынг інфармацыйнай сістэмы",
        }
      },
      Company:{
        TITLE:'Наша кампанія',
        Name:'Яўген Пятрушын',
        Name_description_1:'Дырэктар па',
        Name_description_2:'сістэмнай інтэграцыі',
        Comments:'«СіБел» уваходзіць у групу кампаній «БелХард» і за 10 год паспяховай дзейнасці ў сферы сістэмнай інтэграцыі дасягнула прызнання сярод кліентаў, вендараў і калег. Нашыя імкненні ў стварэнні ўласных ІТ-рашэнняў і паслуг для беларускага бізнесу…',
        Btn_1:'Падрабязней ',
        Btn_2:'Запрашаем у каманду'
      },
      Ideas:{
        imgHeader_1:'Распрацоука',
        imgHeader_2:'Сістэмнае рашэнне для натарыята',
        Title:'Рэалізаваныя праекты і перадавыя ідэі гавораць за нас',
        Description_1:'Спецыялізацыя кампаніі «СіБел» у пашырэнні прыкладных паслуг сферы высокіх тэхналогій.',
        Description_2:'АІС (адзіная інфармацыйная сістэма) натарыята Беларусі, празначаная для аўтаматызацыі, пошуку, атрымання, перадачы, збору, апрацоўкі, назапашвання, захоўвання, распаўсюджвання інфармацыі пра дзейнасць натарыусаў…',
        Btn_1:'Падрабязней',
        Btn_2:'Паказаць усё',
      },
      Vendors:{
        Title:'Нашы вендары'
      },
      Questions:{
        Title:'Ёсць пытанні?',
        Row_1_Title_1:'Напішыце нам,',
        Row_1_Title_2:'і мы абавязкова звяжамся з вамі',
        Row_2_Title:'Альбо патэлефануйце нам',
        Btn_1:'Адправіць запрос',
        Btn_2:'Заказаць званок'
      },
      Error:{
        Title_1:'Выбачайце, але мы працуем над новай версіяй сайта.',
        Title_2:'Вы ўбачыце яго ў хуткім часе. ',
        Title_Color:'Паведамленне аб адкрыцці',
        Descriptions_1:'Жадаеце атрымаць паведамленне аб адкрыцці сайта? Пазначце ваш e-mail,',
        Descriptions_2:' і мы абавязкова праінфарміруем. Нашыя змены для вас!',
        Btn:'Атрымаць паведамленне'
      },
      Modal:{
        Header:{
          1:'Запрос',
          2:'Рэзюмэ',
          3:'Заказаць званок'
        },
        Title:{
          11:'Запоўніце форму, адпраўце, ',
          12:'і мы звязуемся з вамі для кансультацыі',
          21:"Жадаеце далучыцца да каманды «СіБел»?",
          22:"Запоўніце форму, дашліце рэзюмэ,",
          23:" і мы звязуемся з вамі",
          31:'Запоўніце форму, адпраўце, ',
          32:"і мы звязуемся з вамі ў зручны для вас час"
        },
        Btn_file:'Дадаць файл',
        Btn_push:'Адправіць',
        Description_1:'Памер файла не павінен перебольшваць 5 Мб',
        Description_2:"* — палі, абавязковыя для запаўнення",
        Name_plh:"Імя, прозвішча*",
        Phone_plh:"Тэлефон*",
        Datetime_plh:"Час і дата",
        Company_plh:"Кампанія, пасада",
        Area_plh:"Рашэнне ці паслуга, якія цікавяць",
        Select:{
          Title:"-Адзначце накірунак-",
          1:"Распрацоўка мабільных прыкладанняў",
          2:"Даследаванні ў галіне матанализа",
        }

      }
    });
})
/////**********************//// Заюзать для выгрузки словарей в файлах
//   .config(['$translateProvider', '$translatePartialLoaderProvider', function ($translateProvider, $translatePartialLoaderProvider) {
//     $translatePartialLoaderProvider.addPart('ru');
//     $translateProvider.useLoader('$translatePartialLoader', {
//       urlTemplate: '../styles/i18/ru.json'
//     });
//     $translateProvider.preferredLanguage('en');
//   }])
//   .run(['$translatePartialLoader', '$translate', function ($translatePartialLoader, $translate){
//     // $translatePartialLoader.addPart('two');
//     $translate.use('ru');
//     // $translate.refresh();
//   }])

/*************/

