export interface State {
  title: string;
  bridge: Bridge;
  config?: HConfig;
}

export interface Bridge {
  ip: string;
  apiKey: string;
}

export interface HConfig {
  name: string;
  zigbeechannel: number;
  bridgeid: string;
  mac: string;
  dhcp: boolean;
  ipaddress: string;
  netmask: string;
  gateway: string;
  proxyaddress: string;
  proxyport: number;
  UTC: Date;
  localtime: Date;
  timezone: string;
  modelid: string;
  datastoreversion: string;
  swversion: string;
  apiversion: string;
  swupdate: {
    updatestate: number;
    checkforupdate: boolean;
    devicetypes: {
      bridge: boolean;
      lights: number[];
      sensors: number[];
    };
    url: string;
    text: string;
    notify: boolean;
  };
  swupdate2: {
    checkforupdate: boolean;
    lastchange: Date;
    bridge: {
      state: string;
      lastinstall: Date;
    };
    state: string;
    autoinstall: {
      updatetime: string;
      on: boolean;
    };
  };
  linkbutton: boolean;
  portalservices: boolean;
  portalconnection: string;
  portalstate: {
    signedon: boolean;
    incoming: boolean;
    outgoing: boolean;
    communication: string;
  };
  internetservices: {
    internet: string;
    remoteaccess: string;
    time: string;
    swupdate: string;
  };
  factorynew: boolean;
  // replacesbridgeid: null,
  backup: {
    status: string;
    errorcode: number;
  };
  starterkitid: string;
  whitelist: {
    [key: string]: {
      "last use date": Date;
      "create date": Date;
      name: string;
    };
  };
}

export const state: State = {
  title: "Hue Dev Controller",
  bridge: {
    ip: "",
    apiKey: ""
  }
};
