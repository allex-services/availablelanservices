function createServicePack(execlib){
  'use strict';
  return {
    service: {
      dependencies: ['allex_dataservice']
    },
    sinkmap: {
      dependencies: ['allex_dataservice']
    }
  };
}

module.exports = createServicePack;
