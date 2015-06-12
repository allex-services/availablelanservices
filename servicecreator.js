function createAvailableLanServicesService(execlib,ParentServicePack){
  'use strict';
  var ParentService = ParentServicePack.Service,
      dataSuite = execlib.dataSuite,
      MemoryStorage = dataSuite.MemoryStorage;

  function factoryCreator(parentFactory){
    return {
      'service': require('./users/serviceusercreator')(execlib,parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib,parentFactory.get('user')) 
    };
  }

  function AvailableLanServicesService(prophash){
    ParentService.call(this,prophash);
  }
  ParentService.inherit(AvailableLanServicesService,factoryCreator,require('./storagedescriptor'));
  AvailableLanServicesService.prototype.__cleanUp = function(){
    ParentService.prototype.__cleanUp.call(this);
  };
  AvailableLanServicesService.prototype.createStorage = function(storagedescriptor){
    return new MemoryStorage(storagedescriptor);//ParentService.prototype.createStorage.call(this,storagedescriptor);
  };
  return AvailableLanServicesService;
}

module.exports = createAvailableLanServicesService;
