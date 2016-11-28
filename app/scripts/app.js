angular.module('siBelApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'pascalprecht.translate',
    'angularFileUpload',
    'file-model',
    'leaflet-directive',
    'ncy-angular-breadcrumb',
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
        ncyBreadcrumb: {
          label: "Главная",
          parent:'root'
        },
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
      .state('root.company.about', {
        url: '/about',
        ncyBreadcrumb: {
              label: "О компании",
              parent:'root.main'

            },
        views: {
          'company@root.company': {
            templateUrl: '/views/partials/company/_about.html',
            controller:  'CompanyAboutCtrl'
          }
        }
      })
      .state('root.company.value', {
        url: '/value',
        ncyBreadcrumb: {
          label: "Ценности",
          parent: 'root.main'
        },
        views: {
          'company@root.company': {
            templateUrl: '/views/partials/company/_value.html',
            controller:  'CompanyValueCtrl'
          }
        }
      })
      .state('root.company.team', {
        url: '/team',
        ncyBreadcrumb: {
          label: "Команда",
          parent: 'root.main',
        },
        views: {
          'company@root.company': {
            templateUrl: '/views/partials/company/_team.html',
            controller:  'CompanyTimeCtrl'
          }
        }
      })
      .state('root.company.reviews', {
        url: '/reviews',
        ncyBreadcrumb: {
          label: "Отзывы",
          parent: 'root.main'
        },
        views: {
          'container@': {
            templateUrl: '/views/partials/company/_reviews.html',
            controller:  'CompanyReviewsCtrl'
          }
        }
      })
      .state('root.service', {
        url: '/service',
        views: {
          'container@': {
            templateUrl: '/views/partials/service/service.html',
            controller:  'ServiceCtrl'
          }
        }
      })
      .state('root.service.business', {
        url: '/business',
        views: {
          'service@root.service': {
            templateUrl: '/views/partials/service/business.html',
            controller:  'SoftForBusinessCtrl'
          }
        }
      })
      .state('root.service.mobile', {
        url: '/mobile',
        views: {
          'service@root.service': {
            templateUrl: '/views/partials/service/mobile.html',
            controller:  'SoftForMobileCtrl'
          }
        }
      })
      .state('root.service.it', {
        url: '/it',
        ncyBreadcrumb: {
          label: "ИТ",
          parent: 'root.main'
        },
        views: {
          'service@root.service': {
            templateUrl: '/views/partials/service/it.html',
            controller: 'ItServicesCtrl'
          }
        }
      })
        .state('root.service.it.audit', {
        url: '/audit',
          ncyBreadcrumb: {
            label: "ИТ-аудит",
            parent: 'root.main'
          },
        views: {
          'it@root.service.it': {
            templateUrl: '/views/partials/service/it/audit/audit.html',
            controller:  'ItServicesCtrl'
          }
        }
      })
      .state('root.service.it.infra', {
        url: '/infra',
        ncyBreadcrumb: {
          label: "ИТ-инфраструктура",
          parent: 'root.main'
        },
        views: {
          'it@root.service.it': {
            templateUrl: '/views/partials/service/it/infra/infra.html',
            controller:  'ItServicesCtrl'
          }
        }
      })
      .state('root.service.it.engineer', {
        url: '/engineer',
        ncyBreadcrumb: {
          label: "Инженерная инфраструктура",
          parent: 'root.main'
        },
        views: {
          'it@root.service.it': {
            templateUrl: '/views/partials/service/it/engineer/engineer.html',
            controller:  'ItServicesCtrl'
          }
        }
      })

      .state('root.cases', {
        url: '/cases',
        views: {
          'container@': {
            templateUrl: '/views/partials/cases/cases.html',
            controller:  'CasesCtrl'
          }
        }
      })
      .state('root.cases.project', {
        url: '/business',
        views: {
          'cases@root.cases': {
            templateUrl: '/views/partials/cases/project.html',
            controller:  'ProjectCtrl'
          }
        }
      })
      .state('root.cases.ideas', {
        url: '/mobile',
        views: {
          'cases@root.cases': {
            templateUrl: '/views/partials/cases/ideas.html',
            controller:  'IdeasCtrl'
          }
        }
      })

      .state('root.benefits', {
        url: '/benefits',
        views: {
          'container@': {
            templateUrl: '/views/partials/benefits/benefits.html',
            controller:  'BenefitsCtrl'
          }
        }
      })
      .state('root.benefits.employees', {
        url: '/employees',
        views: {
          'benefits@root.benefits': {
            templateUrl: '/views/partials/benefits/employees.html',
            controller:  'EmployeesCtrl'
          }
        }
      })
      .state('root.benefits.innovations', {
        url: '/innovations',
        views: {
          'benefits@root.benefits': {
            templateUrl: '/views/partials/benefits/innovations.html',
            controller:  'InnovationsCtrl'
          }
        }
      })
      .state('root.benefits.standards', {
        url: '/standards',
        views: {
          'benefits@root.benefits': {
            templateUrl: '/views/partials/benefits/standards.html',
            controller:  'StandardsCtrl'
          }
        }
      })
      .state('root.benefits.guarantees', {
        url: '/guarantees',
        views: {
          'benefits@root.benefits': {
            templateUrl: '/views/partials/benefits/guarantees.html',
            controller:  'GuaranteesCtrl'
          }
        }
      })
      .state('root.contacts', {
        url: '/contacts',
        views: {
          'container@': {
            templateUrl: '/views/contacts.html',
            controller:  'ContactsCtrl'
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

  .config(function($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
      template:
      '<ul class="breadcrumb">'+
        '<li ng-repeat="step in steps" ng-switch="$last || !!step.abstract" ng-class="{active: $last}">'+
            '<a ng-switch-when="false" href="{{step.ncyBreadcrumbLink}}">{{step.ncyBreadcrumbLabel}}</a>'+
            '<span ng-switch-when="true">{{step.ncyBreadcrumbLabel}}</span>'+
            '<span class="divider" ng-hide="$last"></span>'+
        '</li>'+
      '</ul>'

    });
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
        31:"Актуализация информации",
        32:"о состоянии  дел предприятия",
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
      Comments:"Компания «СиБел» входит в структуру многопрофильного холдинга «БелХард» и за 10 лет успешной деятельности в сфере системной интеграции достигла признания среди клиентов, вендоров и коллег.  Наши стремления в продвижении собственных ИТ-решений и услуг для белорусского бизнеса...",
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
      Title:'Наши вендоры'
    },
    Questions:{
      Title:'Остались вопросы?',
      Row_1_Title_1:'Напишите нам,',
      Row_1_Title_2:'и мы обязательно свяжемся с вами',
      Row_2_Title:'Или позвоните нам',
      Btn_1:'Отправить запрос',
      Btn_2:'Заказать звонок',
      Min_Row_1_1:'Напишите нам, и мы обязательно',
      Min_Row_1_2:'свяжемся с вами. Или позвоните нам'
    },
    Error:{
      Title_1:'Мы работаем над новой версией сайта.',
      Title_2:'Вы увидите его совсем скоро. Приносим свои извинения.',
      Title_Color:'Уведомление об открытии',
      Descriptions_1:'Хотите узнать о публикации сайта? Укажите ваш e-mail,',
      Descriptions_2:'и мы обязательно сообщим вам. Мы меняемся для вас!',
      Btn:'Получить уведомление',
      Address_1:'БЦ «Фаренгейт», 4-й этаж',
      Address_2:'Ул. Притыцкого, 79, 220140, Минск, Беларусь'

    },
    Modal:{
      Header:{
        1:'Запрос',
        2:'Резюме',
        3:'Заказать звонок',
        4:'Отзыв',
        5:'Поздравить'
      },
      Title:{
        11:'Заполните форму, отправьте, ',
        12:'и мы свяжемся в удобное для вас время ',
        21:'Хотите присоединиться к команде «СиБел»? ',
        22:'Заполните форму, пришлите резюме,',
        23:'и мы свяжемся с вами',
        31:'Заполните форму, отправьте, ',
        32:'и мы свяжемся с вами для консультации',
        41:'Заполните форму, чтобы оставить отзыв о «СиБел».',
        42:'Мы очень ценим ваше мнение. Спасибо за участие!',
        51:'Заполнив форму, вы разделите с «СиБел» радость ',
        52:'знаменательного события. Спасибо за участие!'
      },
      Btn_file:'Прикрепить файл',
      Btn_push:'Отправить',
      Description_1:'Размер файла не должен превышать 5 Мб',
      Description_2:"* — поля, обязательные для заполнения",
      Name_plh:"Имя, фамилия*",
      Phone_plh:"Телефон*",
      Datetime_plh:"Время и дата*",
      Company_plh:"Организация, должность",
      Area_plh:"Сообщение",
      Select:{
        Title:"-Выберите, направление-",
        1:"Разработка мобильных приложений",
        2:"Исследования в области матанализа",
      },
      UploaderBtn_1 :'Загрузить',
      UploaderBtn_2 :'Удалить',
      TableHeader:{
        Name: 'Имя',
        Size: 'Размер',
        Status: 'Статус',
        Actions: 'Действия',
      },
      Alert_True:"Сообщение передано",
      Alert_Error:"Ошибка передачи. Повторите позже."


    },
    SecondPage:{
      Slider:{
        Title:'10 лет успехов в ИТ',
        Text:'В ноябре 2006 года наша компания заявила о себе в сфере высоких технологий. Мы прошли захватывающий путь. Преодолевая препятствия и свершая открытия, достигали поставленных целей',
        Btn_1:'Подробнее',
        Btn_2:'Поздравить ;)'
      },
      Icons:{
        Title:'Развитие компании',
        Header_ICO_1:"Год основания",
        Text_ICO_1:' 10 лет работы для достижения отличного результата и высокого качества работ',
        Btn_ICO_1:'О компании',
        Header_ICO_2:"Рост команды",
        Text_ICO_2:'Лучшие специалисты вливаются в наши ряды',
        Btn_ICO_2:'Ценности',
        Header_ICO_3:"Кейсы",
        Text_ICO_3:'Составляют наш опыт и знания сферы высоких технологий для бизнес-решений',
        Btn_ICO_3:'Команда',

      },
      About:{
        Title_1:'Наша компания',
        Text_1_1:'«СиБел» входит в группу компаний «БелХард» и за 10 лет успешной деятельности в сфере системной интеграции достигла признания среди клиентов, вендеров и коллег. Возможность привлекать для эффективного решения задач все ресурсы холдинга: производственные, материальные, финансовые и иные — делает сотрудничество успешным. Продвигая собственные ИТ-решения и услуги для белорусских компаний, мы помогаем бизнесу работать.',
        Text_1_2:'Резидентство компании «СиБел» в ПВТ Беларуси подтверждает уровень предоставляемых услуг, внедрение инновационных ИТ-проектов различной сложности. Наши специалисты регулярно проходят обучение, повышают квалификацию и уровень знаний в учебных центрах IBM, Microsoft, Lotus и других, подтверждая результаты успешными сертификационными экзаменами вендоров и производителей.',
        Title_2:'Наша цель',
        Text_2_1:' — стать ведущей компанией в Беларуси по предоставлению платформенных решений для бизнеса и услуг в сфере высоких технологий.',
        Text_2_2:'Мы уверены, что достигнем поставленной цели:',
        Text_2_2_1:'мы знаем потребности нашего клиента и специфику белорусского бизнеса',
        Text_2_2_2:'в нашей команде высококвалифицированные специалисты',
        Text_2_2_3:'мы внедряем новые технологии',
        Title_3:'Наша миссия',
        Text_3_1:'— повысить рейтинг Беларуси по показателю развития информационно-коммуникационных технологий (ICT Development Index), который характеризует достижения стран с точки зрения развития ИТ-сферы, охватывающей все области создания, передачи, хранения, распространения и восприятия информации.',
      },
      Value:{
        Title_1:'Сотрудники',
        Text_1:'Наша главная ценность. Мы гордимся каждым и ценим достойных, предлагая оптимальные условия труда и отдыха',
        Title_2:'Качество',
        Text_2:'Мы подтверждаем качество оказываемых услуг, гарантируя их соответствие стандартам',
        Title_3:'Клиенты',
        Text_3:'Фокус на потребностях каждого клиента делает наши услуги уникальными. Внедряем новейшие решения для процветания бизнеса',
        Title_4:'Развитие',
        Text_4:'Каждый из команды стремится обогатить собственный багаж знаний и навыков, благодаря которым поставленные цели достигаются в кратчайшие сроки. Развиваясь сами, мы желаем благосостояния нашим партнерам',
        Title_5:'Ответственный бизнес',
        Text_5:'Понимание ценности каждого для общества отражается в старании повысить уровень и качество жизни наших сотрудников и членов их семей, участвовать в различных программах и внедрять социально значимые проекты',
        Title_6:'Профессионализм',
        Text_6:'Мы собрали команду высококвалифицированных специалистов, которых объединяет любимое дело. Стремимся быть асами в своей сфере',
      },
      Time:{
        Title_1:'Наша команда',
        Text_1:'«СиБел» — это команда талантливых специалистов, радеющих за свое дело. Мы приветствуем инициативность, творческий подход и системность. Каждый сотрудник «СиБел» имеет возможность проявить свой профессионализм, применить имеющиеся навыки и поделиться знаниями с коллегами.',
        Text_2:'Команду направляют общие цели, а принципы корпоративной культуры сплачивают единомышленников.',
        Title_2:'Принципы команды «СиБел»',
        Head_li_1:'Нацеленность на результат',
        li_1:'Сплоченная работа команды и ответственность за принятие решений приводит к ожидаемому итогу — качественный продукт в заданные сроки',
        Head_li_2:'Контактность',
        li_2:'Открытость и доступность обратной связи между всеми членами команды делает рабочий процесс эффективным и быстрым' ,
        Head_li_3:'Развитие и стремление к новому',
        li_3:'Жажда новых знаний и широкий кругозор каждого сотрудника обогащают интеллектуальный багаж всей команды',
        Head_li_4:'Взаимоуважение и поддержка',
        li_4:'Дружественность и внимание от всех к каждому делает рабочую атмосферу комфортной, а коллектив сплоченным. Мы — команда!',
        Descriptions_Text:'«СиБел» активно развивается, привлекая новых талантливых, активных профессионалов. Присоединяйтесь!',
        Btn:'Приглашаем в команду'
      },
      Comments:{
        Global_Title:'Клиенты о нас',
        Global_description_1:'Мнение клиентов о сотрудничестве с нами имеет большое значение. Мы дорожим своей репутацией и стремимся поддерживать статус надежного партнера. Отзывы о работе с «СиБел» — это объективная оценка нашей деятельности.',
        Title:'Александр Федоров ',
        Descriptions_11:'Руководитель департамента телекоммуникационных решений',
        Descriptions_12:'НР Enterprises CIS ',
        Text_11:' 10-летнее сотрудничество и успешная реализация более 50 совместных проектов для операторов мобильной связи позволяет с уверенностью утверждать: «СиБел» — надежный партнер, предоставляющий комплексные решения в сфере ИТ-телекоммуникаций.',
        Text_12:' О компетентности и высокой квалификации специалистов «СиБел» без лишних слов свидетельствует портфель проектов, включающий разработки для компаний России (МТС, Мегафон, Связьинформ, ТрансТелеКом, ТатТелеКом, СибирьТелеКом), Казахстана (MS BizTalk, MS Axapta, MS SQL Server, MS SharePoint Server, .NET), Беларуси (МТС, Life, Velcom).',
        Text_13:' Устойчивое развитие деловых отношений НР Enterprises CIS и «СиБел» переросло в плодотворное сотрудничество двух компаний и продолжает развивать область ИТ-телекоммуникаций Беларуси и стран СНГ.',
        Title_2:'Олег Бурак',
        Descriptions_21:'Заместитель председателя дирекции по техническим вопросам',
        Descriptions_22:'ИООО «КАПШ Телематик Сервисиз»',
        Text_21:'В 2013 году наши компании сплотил запуск электронной системы оплаты за проезд по дорогам Республики Беларусь — Beltoll. Создание центра обработки данных, необходимого для ее функционирования, логично увенчалось заключением долгосрочного контракта с авторитетной аутсорсинговой компанией — «СиБел». Обслуживание и поддержку ИТ-инфраструктуры (телекоммуникаций, серверного оборудования, операционной системы), а также сервис инженерных систем центра данных (электроснабжения, кондиционирования и т. д.) проводит отдел системной интеграции.',
        Text_22:'«СиБел» действительно отлично выполняет свою работу — контроль системы осуществляется в режиме 24/7, а подробные отчеты службы мониторинга отражают уровни доступности сервисов и подсистем, определяя качество предоставляемых услуг. ',
        Text_23:'Весомое преимущество «СиБел» в том, что компания не боится обязательств, гарантируя работоспособность ИТ-системы двусторонним SLA-соглашением.',
        Btn_1:'Подробнее',
        Btn_2:'Оставить отзыв',
        Btn_3:'Все отзывы'
      }

    },
    Contacts:{
      Title:'Контакты',
      Btn_1: 'На карте',
      Btn_2: 'Оставить запрос',
      Back: 'Назад',
      Tooltip:'Скрыть карту'
    }
  });
    $translateProvider.translations('by', {
      HOME:{
        TITLE:'ІТ — наша прызванне',
        ROW_1_TITLE:'Рашэнні для бізнесу',
        ROW_1:'Эфектыўнае кіраванне бізнес-працэсамі і мінімізацыя чалавечага фактару',
        ROW_1_BTN:'Падрабязней',
        ROW_2_TITLE:'Тэлекамунікацыя',
        ROW_2:'Укараненне праектаў і распрацоўка праграмнага забеспячэння для аператараў мабільнай сувязі',
        ROW_2_BTN:'Даведацца',
        ROW_3_TITLE:'ІТ-паслугі',
        ROW_3:'Стварэнне і мадэрнізацыя ІТ-інфраструктуры з падтрымкай ў фармаце 24/7',
        ROW_3_BTN:'Дэталёва',
      },
      SLIDER:{
        BTN_1:'Падрабязней',
        BTN_2:'Адправіць запрос',
        Slide_1_Title_1:'Праграмнае рашэнне',
        Slide_1_Title_2:'для бізнесу',
        Slide_1_li:{
          1:"Аўтаматызацыя бізнес-працэсаў",
          31:"Актуальная інфармацыя",
          32:"пра становішча спраў прадпрыемства",
          4:"Аналітыка бізнес-дадзеных",
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
        imgHeader_1:'Распрацоўка',
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
        Row_1_Title_2:'і мы абавязкова адкажам вам',
        Row_2_Title:'Альбо патэлефануйце нам',
        Btn_1:'Адправіць запрос',
        Btn_2:'Заказаць званок',
        Min_Row_1_1:'Напішыце нам, і мы абавязкова',
        Min_Row_1_2:'адкажам вам. Альбо патэлефануйце нам'
      },
      Error:{
        Title_1:'Выбачайце, але мы працуем над новай версіяй сайта.',
        Title_2:'Вы ўбачыце яго ў хуткім часе. ',
        Title_Color:'Паведамленне аб адкрыцці',
        Descriptions_1:'Жадаеце атрымаць паведамленне аб адкрыцці сайта? Пазначце ваш e-mail,',
        Descriptions_2:' і мы абавязкова праінфарміруем. Нашыя змены для вас!',
        Btn:'Атрымаць паведамленне',
        Address_1:'БЦ «Фарэнгейт», 4-ы паверх',
        Address_2:'Вул. Прытыцкага, 79, 220140, Мінск, Беларусь'
      },
      Modal:{
        Header:{
          1:'Запрос',
          2:'Рэзюмэ',
          3:'Заказаць званок',
          4:'Водгук',
          5:'Павіншаваць'
        },
        Title:{
          11:'Запоўніце форму, адпраўце, ',
          12:'і мы звязуемся з вамі для кансультацыі',
          21:"Жадаеце далучыцца да каманды «СіБел»?",
          22:"Запоўніце форму, дашліце рэзюмэ,",
          23:" і мы звязуемся з вамі",
          31:'Запоўніце форму, адпраўце, ',
          32:"і мы звязуемся з вамі ў зручны для вас час",
          41:'Запоўніце форму, каб пакінуць водгук пра «СиБел».',
          42:'Мы вельмі цэнім ваша меркаванне. Дзякуй за ўдзел!',
          51:'Запоўніўшы форму, вы падзеліце з «СиБел» радасць ',
          52:'выдатнай падзеі. Дзякуй за ўдзел!'
        },
        Btn_file:'Дадаць файл',
        Btn_push:'Адправіць',
        Description_1:'Памер файла не павінен перебольшваць 5 Мб',
        Description_2:"* — палі, абавязковыя для запаўнення",
        Name_plh:"Імя, прозвішча*",
        Phone_plh:"Тэлефон*",
        Datetime_plh:"Час і дата*",
        Company_plh:"Кампанія, пасада",
        Area_plh:"Паведамленне",
        Select:{
          Title:"-Адзначце накірунак-",
          1:"Распрацоўка мабільных прыкладанняў",
          2:"Даследаванні ў галіне матанализа",
        },
        UploaderBtn_1 :'Загрузіць',
        UploaderBtn_2 :'Удаліць',
        TableHeader:{
          Name: 'Імя',
          Size: 'Памер',
          Status: 'Статус',
          Actions: 'Дзеянне',
        },
        Alert_True:"Паведамленне адпраўлена",
        Alert_Error:"Памылка передачы. Паўтарыце пазней."

      },
      SecondPage:{
        Slider:{
          Title:'10 год поспехаў у ІТ!',
          Text:'У лістападзе 2006 года наша кампанія заявіла пра сябе ў сферы высокіх тэхналогій. Мы  прайшлі захапляючы шлях. Пераадольвалі перешкоды, рухаліся насустрач адкрыццям, дасягалі пастаўленых мэтаў',
          Btn_1:'Падрабязней',
          Btn_2:'Павіншаваць ;)'
        },
        Icons:{
          Title:'Развіццё кампаніі',
          Header_ICO_1:"Год заснавання ",
          Text_ICO_1:' 10 год працы для дасягнення выдатнага выніка і высокай якасці работ',
          Btn_ICO_1:'Пра кампанію',
          Header_ICO_2:"Штат супрацоўнікаў",
          Text_ICO_2:'Высокакваліфікаваныя і матываваныя супрацоўнікі папаўняюць нашы рады',
          Btn_ICO_2:'Каштоўнасці',
          Header_ICO_3:"Кейсы",
          Text_ICO_3:'Складаюць наш вопыт і веды сферы высокіх тэхналогій для бізнес-рашэнняў',
          Btn_ICO_3:'Каманда',
        },
        About:{
          Title_1:'Наша кампанія',
          Text_1_1:'«СіБел» уваходзіць у групу кампаній «БелХард» і за 10 год паспяховай дзйнасці ў сферы сістэмнай інтэграцыі дасягнула прызнання сярод кліентаў, вендараў і калег. Магчымасць выкарыстання для эфектыўнага вырашэння задач усіх рэсурсаў аб’яднання: вытворчых, матэрыяльных, фінансавых і іншых — робіць супрацоўніцтва паспяховым. Прасоўваючы ўласныя ІТ-рашэнні і паслугі для беларускіх кампаній, мы дапамагем бізнесу працаваць.',
          Text_1_2:'Рэзідэнцтва кампаніі «СіБел» ў ПВТ Беларусі сцвярджае ўзровень паслуг «СіБел» і ўкараненне інавацыйных ІТ-праектаў разнастайнай складанасці. Нашы спецыялісты своечасова праходзяць навучанне ў цэнтрах IBM, Microsoft, Lotus і іншых, павышаюць кваліфікацыю і ўзровень ведаў, сцвярджаючы вынікі паспяховымі сертыфікацыйнымі экзаменамі вендараў і вытворцаў.',
          Title_2:'Наша мэта',
          Text_2_1:' — стаць вядучай кампаніяй Беларусі, якая рэалізуе платформенныя рашэнні для бізнесу і паслуг у сферы высокіх тэхналогій',
          Text_2_2:'Мы ўпэўнены, што дасягнем вызначанай мэты:',
          Text_2_2_1:'мы ведаем патрэбы нашага кліента і спецыфіку беларускага бізнесу',
          Text_2_2_2:'у нашай камандзе высокакваліфікаваныя спецыялісты',
          Text_2_2_3:'мы ўкараняем новыя тэхналогіі',
          Title_3:'Наша місія ',
          Text_3_1:'— узняць рэйтынг Беларусі па паказальніку развіцця інфармацыйна-камунікацыйных тэхналогій (ICT Development Index), які характарызуе дасягненні краін з пункту гледжання развіцця ІТ-сферы, што ахоплівае ўсе галіны стварэння, перадачы, захоўвання, распаўсюджвання і ўспрымання інфармацыі.',
        },
        Value:{
          Title_1:'Супрацоўнікі',
          Text_1:'Наша галоўная каштоўнасць. Мы ганарымся кожным і шануем выртых, прапаноўваем ім аптымальныя ўмовы працы і адпачынку',
          Title_2:'Якасць',
          Text_2:'Мы пацвярджаем якасць нашых паслуг, гарантуем іх адпаведнасць стандартам',
          Title_3:'Клиенты',
          Text_3:'Фокус на патрэбах кожнага кліента робіць нашы паслугі ўнікальнымі. Укараняем найноўшыя рашэнні для росквіту бізнесу',
          Title_4:'Развіццё',
          Text_4:'Кожны з каманды імкнецца ўзбагаціць асабісты багаж ведаў і навыкаў, дзякуючы якім мэты дасягаюцца ў найкарацейшы час. У асабістым развіцці мы жадаем поспехаў нашым партнёрам',
          Title_5:'Адказны бізнес ',
          Text_5:'Разуменне каштоўнасці кожнага для грамадства адлюстроўваецца ў імкненне павысіць узровень і якасць жыцця нашых супрацоўнікаў і іх сямей, браць удзел у разнастайных праграмах і ўкараняць сацыяльна значныя праекты ',
          Title_6:'Прафесіяналізм',
          Text_6:'Мы сабралі каманду высокакваліфікаваных спецыялістаў, якіх аб’яднае любімая справа. Імкнемся быць асамі ў сваёй сферы',
        },
        Time:{
          Title_1:'Наша каманда',
          Text_1:'«СіБел» — гэта каманда таленавітых спецыялістаў, якія жывуць сваёй справай. Мы адзначаем ініцыятыўнасць, творчы падыход і сістэмнасць. Кожны супрацоўнік «СіБел» мае магчымасць праявіць свой прафесіяналізм, выкарыстаць навыкі, што мае, і падзяліцца ведамі з калегамі.',
          Text_2:'Каманду накіроўваюць агульныя мэты, а прынцыпы карпаратыўнай культуры гуртуюць аднадумцаў.',
          Title_2:'Прынцыпы каманды «СіБел»',
          Head_li_1:'Скіраванасць на вынік',
          li_1:'з’яднаная работа каманды і адказнасць за рашэнні дае чаканы вынік — якасны прадукт у адзначаны тэрмін',
          Head_li_2:'Кантактнасць',
          li_2:'Адкрытая і даступная адваротная сувязь паміж удзельнікамі каманды робіць працоўны працэс эфектыўным і хуткім' ,
          Head_li_3:'Развіццё і імкненне да новага ',
          li_3:'Прага новых ведаў і шырокі кругагляд кожнага супрацоўніка ўзбагачаюць інтэлектуальны запас усёй каманды ',
          Head_li_4:'Узаемапавага і падтрымка ',
          li_4:'Дружалюбнасць і ўвага ад усіх кожнаму стварае працоўную атмасферу спрыяльнай, а калектыў — згуртаваным. Мы — каманда!',
          Descriptions_Text:'«СіБел» актыўна развіваецца, прыцягваючы новых таленавітых, актыўных прафесіяналаў. Далучайцеся!',
          Btn:'Запрашаем у каманду'
        },
        Comments:{
          Global_Title:'Кліенты пра нас',
          Global_description_1:'Меркаванне кліентаў пра супрацоўніцтва з намі мае вялікае значэнне. Мы даражым сваёй рэпутацыяй і імкнемся падтрымліваць статус надзейнага партнёра. Водгукі пра работу з «СіБел» — гэта аб’ектыўная адзнака нашай дзейнасці.',
          Title:'Аляксандр Фёдараў ',
          Descriptions_11:'Кіраўнік праектаў PMP',
          Descriptions_12:' НР Enterprises CIS ',
          Text_11:' 10-гадовае супрацоўніцтва і паспяховая рэалізацыя болей за 50 сумесных праектаў для аператараў мабільнай сувязі дазваляе з упэўненасцю сцвярджаць: «СіБел» — надзейны партнёр, што пастаўляе комплексныя рашэнні ў сферы ІТ-тэлекамунікацый.',
          Text_12:' Пра кампетэнтнасць і высокую кваліфікацыю спецыялістаў «СіБел» без марных слоў сведчыць партфель праектаў: распрацоўкі для кампаній Расіі (МТС, Мегафон, Связьинформ, ТрансТелеКом, ТатТелеКом, СибирьТелеКом), Казахстана (MS BizTalk, MS Axapta, MS SQL Server, MS SharePoint Server, .NET), Беларусі (МТС, Life, Velcom). ',
          Text_13:' Устойлівае развіццё дзелавых адносінаў НР Enterprises CIS і «СіБел» перарасло ў плённае супрацоўніцтва дзвюх кампаній і працягвае развіваць галіну ІТ-тэлекамунікацый Беларусі і краін СНД.',
          Title_2:'Алег Бурак',
          Descriptions_21:'Намеснік старшыні дырэкцыі па тэхнічных пытаннях ',
          Descriptions_22:'ЗТАА «КАПШ Тэлематык Сэрвісіз»',
          Text_21:'У 2013 годзе нашы кампаніі згуртавала рэалізацыя электроннай сістэмы аплаты за праезд па дарогах Рэспублікі Беларусь — Beltoll. Сварэнне цэнтра апрацоўкі дадзеных, які неабходны для яе функцыянавання, лагічна завершылася ўчыненнем доўгатэрміновага кантракта з аўтарытэтнай аўтсорсінгавай кампаніяй — «СіБел». Абслугоўванне і падтрымку ІТ-інфраструктуры (тэлекамунікацый, сервернага абсталявання, аперацыйнай сістэмы), а таксама сэрвіс інжынерных сістэм цэнтра дадзеных (электразабеспячэння, кандыцыяніравання і г. д.) здзяйсняе адзел сістэмнай інтэграцыі.',
          Text_22:'«СіБел» сапраўды выдатна выконвае сваю работу — кантроль сістэмы ажыццяўляецца ў рэжыме 24/7, а падрабязныя справаздачы службы маніторынга адлюстроўваюць узроўні даступнасці сэрвісаў і падсістэм, вызначаючы якасць паслуг. ',
          Text_23:'Важкай перавагай «СіБел» з’яўляецца тое, што кампанія не баіцца абавязацельстваў і гарантуе працаздольнасць ІТ-сістэмы двухбаковым SLA-пагадненнем.',
          Btn_1:'Падрабязней',
          Btn_2:'Пакінуць водгук',
          Btn_3:'Усе водгукі'
        }
      },
      Contacts:{
        Title:'Кантакты',
        Btn_1: 'На карце',
        Btn_2: 'Пакінуць  запрос',
        Back: 'Назад',
        Tooltip:'Схаваць карту',
      }

    });
    $translateProvider.translations('en',{
      HOME:{
        TITLE:'IT - our vocation',
        ROW_1_TITLE:'Business solutions',
        ROW_1:'Effective data management and M2M approach',
        ROW_1_BTN:'More',
        ROW_2_TITLE:'Telecommunications',
        ROW_2:'Software development and implementation for telecom operators',
        ROW_2_BTN:'Introduce',
        ROW_3_TITLE:'IT Services',
        ROW_3:'IT infrastructure implementation and 24/7 support',
        ROW_3_BTN:'Learn more',
      },
      SLIDER:{
        BTN_1:'More ',
        BTN_2:'Leave request',
        Slide_1_Title_1:'Software solutions',
        Slide_1_Title_2:' for business',
        Slide_1_li:{
          1:"Business process Automation",
          31:"Real-time dashboards",
          32:"",
          4:"Big data analysis",
        },
        Slide_2_Title_1:'Telecom software ',
        Slide_2_Title_2:'solutions',
        Slide_2_li:{
          1:"Mediation platform",
          2:"Anti-fraud system",
          3:"Service provisioning",
        },
        Slide_3_Title_1:'Managed Services',
        Slide_3_li:{
          1:"IT Audit",
          2:"Maintenance and Support",
          3:"Enterprise IT systems",
          4:"24/7 Proactive Monitoring",
        }

      },
      Company:{
        TITLE:'About us',
        Name:'Eugene Piatrushin',
        Name_description_1:'Systems integration  ',
        Name_description_2:'Director',
        Comments:"\"SiBEL\" is a group of companies \"BelHard\" and for 10 years of successful activity in the field of system integration has achieved acknowledgment among clients, vendors and colleagues. Our commitment in advancing their own IT solutions and services for the Belarusian business ...",
        Btn_1:'More ',
        Btn_2:'Join the team'
      },
      Ideas:{
        imgHeader_1:'Software development',
        imgHeader_2:'Business Automation for Notary',
        Title:'Completed projects and innovative ideas speak for us',
        Description_1:'The company "Sibel" specializes in providing application services in the sphere of high technologies.',
        Description_2:'Informational system “Notary Belarus” developed to automate the activities of the notary (receipt, transfer, collection, processing, accumulation, storage, dissemination of information)…',
        Btn_1:'More ',
        Btn_2:'See all',
      },
      Vendors:{
        Title:'Our vendors'
      },
      Questions:{
        Title:'Have questions?',
        Row_1_Title_1:'Write to us ',
        Row_1_Title_2:'and we will contact you',
        Row_2_Title:'Call us',
        Btn_1:'Send inquiry',
        Btn_2:'Request a call',
        Min_Row_1_1:'Write to us, and we will contact you',
        Min_Row_1_2:'адкажам вам. Call us'
      },
      Error:{
        Title_1:'Sorry, we are working on a new version of the site.',
        Title_2:' You\'ll see it soon',
        Title_Color:'Notification of opening',
      Descriptions_1:'Want to learn about publishing site? Enter your e-mail ',
      Descriptions_2:'and we\'ll let you know. We change for you!',
    Btn:'Get notified',
      Address_1:'Business Center "Fahrenheit" 4th floor',
      Address_2:'Pritytsky Str., 79, 220140, Minsk, Belarus'

  },
      Modal:{
      Header:{
        1:'Information Request',
        2:'Resume',
        3:'Request a call',
        4:'Comments',
        5:'Congratulations'
      },
      Title:{
        11:'Fill in the form and send it ',
          12:'and we\'ll get back at a convenient time for you ',
        21:'Want to join "Sibel" team? ',
          22:'Fill in the form, please send a CV ',
          23:'and we will contact you ',
        31:'Fill in the form and send it  ',
          32:'and we will contact you for a consultation',
        41:'Fill in the form to leave a review of "Sibel".',
        42:'We really appreciate your feedback. Thank you for participating!',
        51:'After filling the form, you share with "Sibel" joy',
        52:'outstanding event. Thank you for participating!'

      },
      Btn_file:'Attach file',
      Btn_push:'Send',
      Description_1:'File size should not exceed 5 MB ',
      Description_2:"* — Fields are required",
      Name_plh:"First Name, Last Name*",
      Phone_plh:"Phone number*",
      Datetime_plh:"Time and date*",
      Company_plh:"Organization, position",
      Area_plh:"Message",
      Select:{
      Title:"-Select direction-",
        1:"Developing Mobile Applications",
        2:"Research in the field of mathematical analysis",
    },
      UploaderBtn_1 :'Upload',
      UploaderBtn_2 :'Remove',
      TableHeader:{
        Name: 'Name',
        Size: 'Size',
        Status: 'Status',
        Actions: 'Actions',
      },
      Alert_True:"Message Sent",
      Alert_Error:"Transmission error. Repeat later."


    },

      Contacts:{
        Title:'Сontacts',
        Btn_1: 'Map',
        Btn_2: 'Leave request',
        Back: 'Back',
        Tooltip:'Hide map'
      }


  });
  });
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

