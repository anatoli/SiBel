/**
 * Created by Anatoliy Arinovich on 18.11.2016.
 */
'use strict';
angular.module('siBelApp')
  .controller('SoftForMobileCtrl',[ '$scope', '$rootScope', '$translate','$location', '$state', '$uibModal', '$anchorScroll',
    function ($scope, $rootScope, $translate, $location, $state, $uibModal, $anchorScroll) {
    $rootScope.$on('$translateChangeSuccess', function () {

      ////// Slider /////////
      $translate('SLIDER.BTN_2').then(function (translation) {
        $scope.SLIDER_BTN_2 = translation;
      });
      $translate('Mobile.Slider.Title').then(function (translation) {
        $scope.Mobile_Slider_Title = translation;
      });
      $translate('Mobile.Slider.Description').then(function (translation) {
        $scope.Mobile_Slider_Description = translation;
      });

      ///////// icons /////////
      $translate('Mobile.Icon.Title').then(function (translation) {
        $scope.Mobile_Icon_Title = translation;
      });
      $translate('Mobile.Icon.icon_1_title').then(function (translation) {
        $scope.Mobile_Icon_icon_1_title = translation;
      });
      $translate('Mobile.Icon.icon_1_description').then(function (translation) {
        $scope.Mobile_Icon_icon_1_description = translation;
      });
      $translate('Mobile.Icon.icon_1_btn').then(function (translation) {
        $scope.Mobile_Icon_icon_1_btn = translation;
      });
      $translate('Mobile.Icon.icon_2_title').then(function (translation) {
        $scope.Mobile_Icon_icon_2_title = translation;
      });
      $translate('Mobile.Icon.icon_2_description').then(function (translation) {
        $scope.Mobile_Icon_icon_2_description = translation;
      });
      $translate('Mobile.Icon.icon_2_btn').then(function (translation) {
        $scope.Mobile_Icon_icon_2_btn = translation;
      });
      $translate('Mobile.Icon.icon_3_title').then(function (translation) {
        $scope.Mobile_Icon_icon_3_title = translation;
      });
      $translate('Mobile.Icon.icon_3_description').then(function (translation) {
        $scope.Mobile_Icon_icon_3_description = translation;
      });
      $translate('Mobile.Icon.icon_3_btn').then(function (translation) {
        $scope.Mobile_Icon_icon_3_btn = translation;
      });

      ////// audit //////////
      $translate('Mobile.Audit.Blue.Title').then(function (translation) {
        $scope.Mobile_Audit_Blue_Title = translation;
      });
      $translate('Mobile.Audit.Blue.Description_1').then(function (translation) {
        $scope.Mobile_Audit_Blue_Description_1 = translation;
      });
      $translate('Mobile.Audit.Blue.Description_2').then(function (translation) {
        $scope.Mobile_Audit_Blue_Description_2 = translation;
      });
      $translate('Mobile.Audit.Blue.Description_3').then(function (translation) {
        $scope.Mobile_Audit_Blue_Description_3 = translation;
      });

      $translate('Mobile.Audit.White.Title').then(function (translation) {
        $scope.Mobile_Audit_White_Title = translation;
      });
      $translate('Mobile.Audit.White.Description_1').then(function (translation) {
        $scope.Mobile_Audit_White_Description_1 = translation;
      });
      $translate('Mobile.Audit.White.Description_2_1').then(function (translation) {
        $scope.Mobile_Audit_White_Description_2_1 = translation;
      });
      $translate('Mobile.Audit.White.Description_2_2').then(function (translation) {
        $scope.Mobile_Audit_White_Description_2_2 = translation;
      });

      ////// Cdr //////////
      $translate('Mobile.Cdr.Blue.Title_1').then(function (translation) {
        $scope.Mobile_Cdr_Blue_Title_1 = translation;
      });
      $translate('Mobile.Cdr.Blue.Title_2').then(function (translation) {
        $scope.Mobile_Cdr_Blue_Title_2 = translation;
      });
      $translate('Mobile.Cdr.Blue.Description_1').then(function (translation) {
        $scope.Mobile_Cdr_Blue_Description_1 = translation;
      });
      $translate('Mobile.Cdr.White.Description_1_1').then(function (translation) {
        $scope.Mobile_Cdr_White_Description_1_1 = translation;
      });
      $translate('Mobile.Cdr.White.Description_1_2').then(function (translation) {
        $scope.Mobile_Cdr_White_Description_1_2 = translation;
      });
      $translate('Mobile.Cdr.White.li_1').then(function (translation) {
        $scope.Mobile_Cdr_White_li_1 = translation;
      });
      $translate('Mobile.Cdr.White.li_2').then(function (translation) {
        $scope.Mobile_Cdr_White_li_2= translation;
      });
      $translate('Mobile.Cdr.White.li_3').then(function (translation) {
        $scope.Mobile_Cdr_White_li_3 = translation;
      });
      $translate('Mobile.Cdr.White.li_4').then(function (translation) {
        $scope.Mobile_Cdr_White_li_4 = translation;
      });

        ////// Session //////////
      $translate('Mobile.Session.Blue.Title').then(function (translation) {
        $scope.Mobile_Session_Blue_Title = translation;
      });
      $translate('Mobile.Session.Blue.Description_2').then(function (translation) {
        $scope.Mobile_Session_Blue_Description_2 = translation;
      });
      $translate('Mobile.Session.Blue.Description_1').then(function (translation) {
        $scope.Mobile_Session_Blue_Description_1 = translation;
      });
      $translate('Mobile.Session.White.Description_1_1').then(function (translation) {
        $scope.Mobile_Session_White_Description_1_1 = translation;
      });
      $translate('Mobile.Session.White.Description_1_2').then(function (translation) {
        $scope.Mobile_Session_White_Description_1_2 = translation;
      });
      $translate('Mobile.Session.White.Description_1_3').then(function (translation) {
        $scope.Mobile_Session_White_Description_1_3 = translation;
      });
      $translate('Mobile.Session.White.Description_2').then(function (translation) {
        $scope.Mobile_Session_White_Description_2 = translation;
      });


      /////// accordion /////////
      $translate('Mobile.Audit.Accordion.Title').then(function (translation) {
        $scope.Mobile_Audit_Accordion_Title = translation;
      });
      $translate('Mobile.Cdr.Accordion.Title').then(function (translation) {
        $scope.Mobile_Cdr_Accordion_Title = translation;
      });
      $translate('Mobile.Session.Accordion.Title').then(function (translation) {
        $scope.Mobile_Session_Accordion_Title = translation;
      });
      ////// All  ////////////////

      $translate('Ideas.Btn_1').then(function (translation) {
        $scope.Ideas_Btn_1 = translation;
      });
      $translate('Implementation.All.Title_1').then(function (translation) {
        $scope.Implementation_All_Title_1 = translation;
      });
      $translate('Implementation.All.Title_2').then(function (translation) {
        $scope.Implementation_All_Title_2 = translation;
      });
      $translate('Implementation.All.Title_3_1').then(function (translation) {
        $scope.Implementation_All_Title_3_1 = translation;
      });
      $translate('Implementation.All.Title_3_2').then(function (translation) {
        $scope.Implementation_All_Title_3_2 = translation;
      });
      $translate('Implementation.All.Title_4').then(function (translation) {
        $scope.Implementation_All_Title_4 = translation;
      });
      $translate('Implementation.All.Title_5').then(function (translation) {
        $scope.Implementation_All_Title_5 = translation;
      });

      //////// Project_7 ///////
      $translate('Implementation.Project_7.Title_1').then(function (translation) {
        $scope.Implementation_Project_7_Title_1 = translation;
      });
      $translate('Implementation.Project_7.Client').then(function (translation) {
        $scope.Implementation_Project_7_Client = translation;
      });
      $translate('Implementation.Project_7.Description_1').then(function (translation) {
        $scope.Implementation_Project_7_Description_1 = translation;
      });
      $translate('Implementation.Project_7.Description_2').then(function (translation) {
        $scope.Implementation_Project_7_Description_2 = translation;
      });
      $translate('Implementation.Project_7.Description_3').then(function (translation) {
        $scope.Implementation_Project_7_Description_3 = translation;
      });
      $translate('Implementation.Project_7.Description_4').then(function (translation) {
        $scope.Implementation_Project_7_Description_4 = translation;
      });
      $translate('Implementation.Project_7.li_1').then(function (translation) {
        $scope.Implementation_Project_7_li_1 = translation;
      });
      $translate('Implementation.Project_7.li_2').then(function (translation) {
        $scope.Implementation_Project_7_li_2 = translation;
      });
      $translate('Implementation.Project_7.li_3').then(function (translation) {
        $scope.Implementation_Project_7_li_3 = translation;
      });
      $translate('Implementation.Project_7.li_4').then(function (translation) {
        $scope.Implementation_Project_7_li_4 = translation;
      });
      $translate('IT.Implementation.OrangeTitle_1').then(function (translation) {
        $scope.IT_Implementation_OrangeTitle_1 = translation;
      });
      //////// Project_5 ///////
      $translate('Implementation.Project_5.Title_1').then(function (translation) {
        $scope.Implementation_Project_5_Title_1 = translation;
      });
      $translate('Implementation.Project_5.Client').then(function (translation) {
        $scope.Implementation_Project_5_Client = translation;
      });
      $translate('Implementation.Project_5.Description_1').then(function (translation) {
        $scope.Implementation_Project_5_Description_1 = translation;
      });
      $translate('Implementation.Project_5.Description_2').then(function (translation) {
        $scope.Implementation_Project_5_Description_2 = translation;
      });
      $translate('Implementation.Project_5.Description_3').then(function (translation) {
        $scope.Implementation_Project_5_Description_3 = translation;
      });
      $translate('Implementation.Project_5.Description_4').then(function (translation) {
        $scope.Implementation_Project_5_Description_4 = translation;
      });
      $translate('Implementation.Project_5.li_1').then(function (translation) {
        $scope.Implementation_Project_5_li_1 = translation;
      });
      $translate('Implementation.Project_5.li_2').then(function (translation) {
        $scope.Implementation_Project_5_li_2 = translation;
      });
      $translate('Implementation.Project_5.li_3').then(function (translation) {
        $scope.Implementation_Project_5_li_3 = translation;
      });
      $translate('Implementation.Project_5.li_4').then(function (translation) {
        $scope.Implementation_Project_5_li_4 = translation;
      });
      //////// Project_6 ///////
      $translate('Implementation.Project_6.Title_1').then(function (translation) {
        $scope.Implementation_Project_6_Title_1 = translation;
      });
      $translate('Implementation.Project_6.Client').then(function (translation) {
        $scope.Implementation_Project_6_Client = translation;
      });
      $translate('Implementation.Project_6.Description_1').then(function (translation) {
        $scope.Implementation_Project_6_Description_1 = translation;
      });
      $translate('Implementation.Project_6.Description_2').then(function (translation) {
        $scope.Implementation_Project_6_Description_2 = translation;
      });
      $translate('Implementation.Project_6.Description_3').then(function (translation) {
        $scope.Implementation_Project_6_Description_3 = translation;
      });
      $translate('Implementation.Project_6.Description_4').then(function (translation) {
        $scope.Implementation_Project_6_Description_4 = translation;
      });
      $translate('Implementation.Project_6.li_1').then(function (translation) {
        $scope.Implementation_Project_6_li_1 = translation;
      });
      $translate('Implementation.Project_6.li_2').then(function (translation) {
        $scope.Implementation_Project_6_li_2 = translation;
      });
      $translate('Implementation.Project_6.li_3').then(function (translation) {
        $scope.Implementation_Project_6_li_3 = translation;
      });
      $translate('Implementation.Project_6.li_4').then(function (translation) {
        $scope.Implementation_Project_6_li_4 = translation;
      });
      $translate('Implementation.Project_6.li_5').then(function (translation) {
        $scope.Implementation_Project_6_li_5 = translation;
      });


    });
    $translate.use($translate.proposedLanguage()).then(function () {});

    function iconActive() {
      var arr = $location.$$path.split('/');
      var n = arr.length-1;
      $scope.state = "."+arr[n];
    }

    iconActive();


    $rootScope.$on('$stateChangeSuccess',
      function(){
        iconActive();
      });
      console.log('mobile_test');
      console.log($state.params.param);
    if($state.params.param==='mobile'){
      setTimeout(function () {
        $location.hash('mobile');
        $anchorScroll();
        $location.hash(''); // clear url
      }, 400)
    }

    $scope.Go = function (data) {
      $state.go('root.service.mobile'+data);
      $scope.state = data;
    };

      $scope.Email = function (data) {
        $uibModal.open({
          backdropClass: 'backdrop',
          backdrop: 'static',
          animation: false,
          size: 'dialog',
          templateUrl: 'views/modals/email.html',
          resolve: {
            dataModal: function () {
              return {
                data: data,
                lang: $translate.proposedLanguage()
              };
            }
          },
          controller: 'EmailCtrl'
        });
      };


  // //  TODO Работа с графииками
  //     var graphConfig = {
  //       interval: 5, // интервал (с) добавления новых данных (должен быть >=5 и <= 59)
  //       timer: undefined, // для хранения promise генерируемого сервисом $interval
  //       data: [], // массив массивов для хранения данных для графика
  //       qtItem: 25, // отображаемое количество иттераций графика
  //       lineName: ["data01", "data02", "data03", "data04", "data05"] // массив строк с названием линий графика
  //     };
  //     var grf = generationFirstData(graphConfig.qtItem, graphConfig.interval, graphConfig.lineName.length);
  //     graphConfig.data = grf.data;
  //
  //     $scope.chart = {
  //       identity: $echarts.generateInstanceIdentity(),
  //       dimention: "16:9",
  //       config: {
  //         theme: 'mint',
  //         driftPalette: false,
  //         title: {
  //           x: 'center',
  //           y: 'top',
  //           padding: [20, 10, 10, 10],
  //           text: "График в реальном времени"
  //         },
  //         toolbox: {
  //           show: false,
  //           feature: {
  //             magicType: {
  //               show: true,
  //               title: {
  //                 'line': 'line',
  //                 'bar': 'bar'
  //               },
  //               type: ['line', 'bar']
  //             },
  //             saveAsImage: {
  //               show: true,
  //               title: "save as image",
  //               type: "png"
  //             }
  //           }
  //         },
  //         tooltip: {
  //           trigger: 'axis'
  //         },
  //         calculable: true,
  //         xAxis: {
  //           type: 'category',
  //           data: []
  //         },
  //         yAxis: {
  //           type: 'value'
  //         },
  //         legend: {
  //           show: true,
  //           orient: "vertical",
  //           x: "right",
  //           y: "center",
  //           backgroundColor: "rgba(0, 0, 0, 0.05)",
  //           padding: [10, 10, 10, 10],
  //           data: []
  //         },
  //         grid: {
  //           x: 20,
  //           x2: 130,
  //           y2: 60
  //         },
  //         dataZoom: {
  //           show: false,
  //           start: 0
  //         },
  //         series: []
  //       }
  //     };
  //
  //     /* наполнение графика первичными данными */
  //     var grf = generationFirstData(graphConfig.qtItem, graphConfig.interval, graphConfig.lineName.length);
  //     graphConfig.data = grf;
  //     var toEchart = dataToEhart(grf, graphConfig.lineName);
  //     $scope.chart.config.xAxis.data = angular.copy(toEchart.xAxisData);
  //     $scope.chart.config.legend.data = angular.copy(toEchart.legendData);
  //     $scope.chart.config.series = angular.copy(toEchart.seriesData);
  //     /* запускаем процесс генерации новых данных */
  //     runChangeChart();
  //
  //
  //     /**
  //      *  преобразование положительного числа в строку, содержащую 2 символа
  //      *  @param num {number}
  //      *  @returns {string}
  //      */
  //     function numToString(num) {
  //       if (num < 0) return "";
  //       var result = (num < 10 ) ? "0" + num : "" + num;
  //       return result;
  //     }
  //
  //     /**
  //      * трансформация текущего времени из формата Date в строку
  //      * @param date {Date} - дата/время в формате Date
  //      * @returns {string} - время в виде строки вида "чч:мм:cc"
  //      */
  //     function dateToString(date) {
  //       var tHours = date.getHours();
  //       var tMinutes = date.getMinutes();
  //       var tSeconds = date.getSeconds();
  //       var result = numToString(tHours) + ":" + numToString(tMinutes) + ":" + numToString(tSeconds);
  //       return result;
  //     }
  //
  //     /**
  //      * генерация случайного целого числа в диапазоне от min до max
  //      * @param min {number} - минимальное целое число диапазона
  //      * @param max {number} - максимальное целое число диапазона
  //      * @returns {number} - случайное число из указанного диапазона
  //      */
  //     function randomInteger(min, max) {
  //       var rand = min + Math.random() * (max + 1 - min);
  //       rand = Math.floor(rand);
  //       return rand;
  //     }
  //
  //     /**
  //      * округление времени к выбранному шагу времени
  //      * @param date {Date} - дата/время в формате Date
  //      * @param timeInterval {number} - шаг времени в секундах
  //      * @returns {Date} - огругленное дата/время в формате Date
  //      */
  //     function roundTime(date, timeInterval) {
  //       var sDate = date.toISOString();
  //       var dateStr = sDate.split("T")[0];
  //       var sTime = sDate.split("T")[1].substr(0, 8);
  //       var sHour = sTime.substr(0, 2);
  //       var sMin = sTime.substr(3, 2);
  //       var nSec = Number(sTime.substr(6, 2));
  //       var resDate = null;
  //       if (nSec/timeInterval === Math.floor(nSec/timeInterval)) {
  //         resDate = dateStr + "T" + sHour + ":" + sMin + ":" + numToString(nSec) + "Z";
  //       } else {
  //         var newSec = Math.floor(nSec/timeInterval) * timeInterval;
  //         resDate = dateStr + "T" + sHour + ":" + sMin + ":" + numToString(newSec) + "Z";
  //       }
  //       return new Date(resDate);
  //     }
  //
  //     /**
  //      * генерация данных для одной итерации графика
  //      * в диапазоне чисел 0...100
  //      * @param date {Date} - дата/время в формате Date
  //      * @param timeInterval {number} - интервал (с) добавления новых данных
  //      * @param qt {number} - количество необходимых данных в иттерации
  //      * @returns {array} - массив данных, первым элементом которого является дата
  //      */
  //     function generationDataToIteration(date, timeInterval, qt) {
  //       var result = [];
  //       var rTime = roundTime(date, timeInterval);
  //       var sTime = dateToString(rTime)
  //       result.push(sTime);
  //       for (var i = 1; i <= qt; i++) {
  //         var tmp = randomInteger(0, 100);
  //         result.push(tmp);
  //       }
  //       return result;
  //     }
  //
  //     /**
  //      * подготовка первоначальных данных для вывода
  //      * @param qtIteration {number} - необходимое количество данных (итераций)
  //      * @param timeInterval {number} - интервал (с) добавления новых данных
  //      * @param qt {number} - необходимое количество данных в одной итерации
  //      * @returns {array} - массив массивов с данными
  //      */
  //     function generationFirstData(qtIteration, timeInterval, qt) {
  //       var result = [];
  //       var curDate = new Date().getTime();
  //       for (var i = 0; i < qtIteration; i++) {
  //         var tmpDate = new Date (curDate - timeInterval * 1000 * i);
  //         var itemData = generationDataToIteration(tmpDate, timeInterval, qt);
  //         result.unshift(itemData);
  //       }
  //       return result;
  //     }
  //
  //     /**
  //      * транформация данных для графика
  //      * @param data {[][]} - массив массивов с данными
  //      * @param legendName {string[]} - массив строк с названием полей
  //      * @returns {xAxisData: any[], legendData: string[], seriesData: [][]}
  //      */
  //     function dataToEhart(data, legendName) {
  //       var xAxisData = [];
  //       var seriesData = [];
  //
  //       for (var a = 0; a < legendName.length; a++) {
  //         var tmp = {
  //           name: legendName[a],
  //           type: "line",
  //           data: []
  //         };
  //         seriesData.push(tmp);
  //       }
  //
  //       for (var i = 0; i < data.length; i++) {
  //         var tmpX = data[i].slice(0, 1);
  //         xAxisData.push(tmpX);
  //         var tmpSerData = data[i].slice(1);
  //         for (var j = 0; j < tmpSerData.length; j++) {
  //           seriesData[j].data.push(tmpSerData[j]);
  //         }
  //       }
  //       return {xAxisData: xAxisData, legendData: legendName, seriesData: seriesData};
  //     }
  //
  //     /**
  //      * запуск постоянного добавления данных
  //      */
  //     function runChangeChart() {
  //       if (angular.isDefined(graphConfig.timer)) {
  //         $interval.cancel(graphConfig.timer);
  //         graphConfig.timer = undefined;
  //       }
  //
  //       graphConfig.timer = $interval(function() {
  //         //console.log("RUN!");
  //         var curDate = roundTime(new Date(), graphConfig.interval);
  //         var newIterationData = generationDataToIteration(curDate, graphConfig.interval, graphConfig.lineName.length);
  //         graphConfig.data.shift();
  //         graphConfig.data.push(newIterationData);
  //         var tmpToEchart = dataToEhart(grf, graphConfig.lineName);
  //         $scope.chart.config.xAxis.data = angular.copy(tmpToEchart.xAxisData);
  //         $scope.chart.config.legend.data = angular.copy(tmpToEchart.legendData);
  //         $scope.chart.config.series = angular.copy(tmpToEchart.seriesData);
  //
  //       }, graphConfig.interval * 1000);
  //     }
  //
  //     /**
  //      * остановка добавления данных в график
  //      */
  //     function stopChangeChart() {
  //       $interval.cancel(graphConfig.timer);
  //       graphConfig.timer = undefined;
  //     }
  //
  // //  TODO Финиш Работа с графииками
  //

  }]);
