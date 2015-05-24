function createAvailableLanServicesServiceTester(execlib,Tester){
  var lib = execlib.lib,
      q = lib.q;

  function AvailableLanServicesServiceTester(prophash,client){
    Tester.call(this,prophash,client);
    console.log('runNext finish');
    lib.runNext(this.finish.bind(this,0));
  }
  lib.inherit(AvailableLanServicesServiceTester,Tester);

  return AvailableLanServicesServiceTester;
}

module.exports = createAvailableLanServicesServiceTester;
