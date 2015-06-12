function createAvailableLanServicesUserTester(execlib,Tester){
  'use strict';
  var lib = execlib.lib,
      q = lib.q;

  function AvailableLanServicesUserTester(prophash,client){
    Tester.call(this,prophash,client);
    console.log('runNext finish');
    lib.runNext(this.finish.bind(this,0));
  }
  lib.inherit(AvailableLanServicesUserTester,Tester);

  return AvailableLanServicesUserTester;
}

module.exports = createAvailableLanServicesUserTester;
