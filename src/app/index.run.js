(function() {
  'use strict';

  angular
    .module('microServicesGui')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
