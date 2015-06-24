'use strict';
angular.module('main')
.controller('StartCtrl', function (Start, Config, $ionicScrollDelegate) {

  // get delegates by handle
  var header = $ionicScrollDelegate.$getByHandle('header');
  var column = $ionicScrollDelegate.$getByHandle('column');
  var content = $ionicScrollDelegate.$getByHandle('content');

  this.scrollElements = function (event) {
    // console.log(event.currentTarget.id);
    // debugger;
    switch (event.currentTarget.id) {
      case 'content':
        // scroll header
        header.scrollTo(
          content.getScrollPosition().left,
          0
        );
        // scroll column
        column.scrollTo(
          0,
          content.getScrollPosition().top
        );
        break;

      case 'header':

        content.scrollTo(
          header.getScrollPosition().left,
          0
        );
        break;

      case 'column':

        content.scrollTo(
          0,
          column.getScrollPosition().top
        );

        break;
      default:

    }
  };

});
