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
      name: 'tcpoptions'
    },{
      name: 'httpport',
      default: 0
    },{
      name: 'httpoptions'
    },{
      name: 'wsport',
      default: 0
    },{
      name: 'wsoptions'
    },{
      name: 'debug'
    },{
      name: 'debug_brk'
    },{
      name: 'prof'
    },{
      name: 'created',
      default: "{{Date.now()}}"
    }]
  }
};
