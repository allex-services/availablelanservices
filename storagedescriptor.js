module.exports = {
  record:{
    primaryKey: 'instancename',
    fields:[{
      name: 'instancename'
    },{
      name: 'modulename'
    },{
      name: 'propertyhash'
    },{
      name: 'strategies',
      default:{}
    },{
      name: 'ipaddress'
    },{
      name: 'tcpport',
      default: 0
    },{
      name: 'httpport',
      default: 0
    },{
      name: 'wsport',
      default: 0
    },{
      name: 'debug'
    },{
      name: 'debug_brk'
    },{
      name: 'created',
      default: "{{Date.now()}}"
    }]
  }
};
